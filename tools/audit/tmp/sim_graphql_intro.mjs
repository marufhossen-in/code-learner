// Lightweight GraphQL Execution Simulation in Node.js

const mockDatabase = {
  users: [
    { id: '1', name: 'Zubair', email: 'zubair@example.com', role: 'admin', salary: 120000 },
    { id: '2', name: 'Ayesha', email: 'ayesha@example.com', role: 'engineer', salary: 95000 }
  ],
  orders: [
    { id: '101', userId: '1', total: 250, status: 'DELIVERED' },
    { id: '102', userId: '1', total: 80, status: 'SHIPPED' },
    { id: '103', userId: '2', total: 420, status: 'PROCESSING' }
  ]
};

// Resolvers map
const resolvers = {
  Query: {
    user: (parent, args) => mockDatabase.users.find(u => u.id === args.id),
    users: () => mockDatabase.users
  },
  User: {
    orders: (parent) => mockDatabase.orders.filter(o => o.userId === parent.id)
  }
};

// Simplified executor simulating GraphQL tree walk
function executeGraphQL(queryAst, rootResolvers) {
  const result = {};
  for (const [opField, fieldConfig] of Object.entries(queryAst)) {
    const queryResolver = rootResolvers.Query[opField];
    const resolvedRoot = queryResolver(null, fieldConfig.args);
    if (!resolvedRoot) {
      result[opField] = null;
      continue;
    }

    if (fieldConfig.selections) {
      result[opField] = projectFields(resolvedRoot, fieldConfig.selections, resolvers.User);
    } else {
      result[opField] = resolvedRoot;
    }
  }
  return result;
}

function projectFields(entity, selections, typeResolvers = {}) {
  const output = {};
  for (const [field, subSelection] of Object.entries(selections)) {
    if (typeResolvers[field]) {
      const nested = typeResolvers[field](entity);
      if (Array.isArray(nested) && subSelection.selections) {
        output[field] = nested.map(item => projectFields(item, subSelection.selections));
      } else {
        output[field] = nested;
      }
    } else if (field in entity) {
      output[field] = entity[field];
    }
  }
  return output;
}

// 1. Client Query: requests ONLY name, role, and orders with total
const clientAst = {
  user: {
    args: { id: '1' },
    selections: {
      name: true,
      role: true,
      orders: {
        selections: {
          id: true,
          total: true
        }
      }
    }
  }
};

const executionResponse = executeGraphQL(clientAst, resolvers);

console.log('Resolved user name:', executionResponse.user.name);
console.log('Resolved user role:', executionResponse.user.role);
console.log('Unrequested field salary is excluded:', executionResponse.user.salary === undefined);
console.log('Resolved orders count:', executionResponse.user.orders.length);
console.log('Resolved first order total:', executionResponse.user.orders[0].total);
console.log('Full response payload:', JSON.stringify(executionResponse));
