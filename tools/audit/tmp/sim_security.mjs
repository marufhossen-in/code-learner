// Simulation of GraphQL Query Depth & Complexity Gatekeeper

function analyzeQuery(ast, depth = 1) {
  let maxDepth = depth;
  let totalCost = 0;

  for (const [field, config] of Object.entries(ast)) {
    const baseFieldCost = config.cost || 1;
    const multiplier = config.args?.first || 1;

    let childDepth = depth;
    let childCost = 0;

    if (config.selections) {
      const childAnalysis = analyzeQuery(config.selections, depth + 1);
      childDepth = childAnalysis.maxDepth;
      childCost = childAnalysis.totalCost;
    }

    maxDepth = Math.max(maxDepth, childDepth);
    totalCost += baseFieldCost + (multiplier * childCost);
  }

  return { maxDepth, totalCost };
}

function evaluateGate(ast, maxDepthLimit = 4, maxCostLimit = 150) {
  const { maxDepth, totalCost } = analyzeQuery(ast);
  if (maxDepth > maxDepthLimit) {
    return {
      allowed: false,
      reason: 'DEPTH_LIMIT_EXCEEDED',
      maxDepth,
      limit: maxDepthLimit,
      totalCost
    };
  }
  if (totalCost > maxCostLimit) {
    return {
      allowed: false,
      reason: 'COST_LIMIT_EXCEEDED',
      maxDepth,
      totalCost,
      limit: maxCostLimit
    };
  }
  return {
    allowed: true,
    maxDepth,
    totalCost
  };
}

// 1. Normal Query (depth 2, low cost)
const safeQuery = {
  user: {
    args: { id: '42' },
    cost: 1,
    selections: {
      id: { cost: 1 },
      name: { cost: 1 }
    }
  }
};

// 2. Depth Bomb (depth 5, exceeds limit 4)
const depthBomb = {
  author: {
    cost: 1,
    selections: {
      books: {
        cost: 2,
        selections: {
          author: {
            cost: 1,
            selections: {
              books: {
                cost: 2,
                selections: {
                  title: { cost: 1 }
                }
              }
            }
          }
        }
      }
    }
  }
};

// 3. Wide Multiplier Query (depth 2, cost 201 exceeds limit 150)
const wideQuery = {
  feed: {
    args: { first: 50 },
    cost: 1,
    selections: {
      id: { cost: 1 },
      title: { cost: 1 },
      author: { cost: 2 } // 50 * 4 = 200 + 1 = 201
    }
  }
};

const safeResult = evaluateGate(safeQuery);
const depthResult = evaluateGate(depthBomb);
const costResult = evaluateGate(wideQuery);

console.log('Safe query allowed:', safeResult.allowed);
console.log('Safe query depth:', safeResult.maxDepth);
console.log('Safe query total cost:', safeResult.totalCost);

console.log('Depth bomb allowed:', depthResult.allowed);
console.log('Depth bomb rejected depth:', depthResult.maxDepth);
console.log('Depth bomb limit:', depthResult.limit);

console.log('Wide query allowed:', costResult.allowed);
console.log('Wide query rejected total cost:', costResult.totalCost);
console.log('Wide query cost limit:', costResult.limit);
