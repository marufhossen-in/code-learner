// Test simulations for all 8 DOM lessons

// Sim 1: DOM Node Types & Children vs ChildNodes
export function sim1() {
  const nodeTypeElement = 1; // Node.ELEMENT_NODE
  const nodeTypeText = 3;    // Node.TEXT_NODE
  const nodeTypeComment = 8; // Node.COMMENT_NODE
  const nodeTypeDoc = 9;     // Node.DOCUMENT_NODE
  const elementCount = 2;    // <h2> and <p>
  const textCount = 3;       // 3 newline/whitespace text nodes
  const totalChildNodes = elementCount + textCount; // 5
  return { nodeTypeElement, nodeTypeText, nodeTypeComment, nodeTypeDoc, elementCount, totalChildNodes };
}

// Sim 2: Static NodeList vs Live Collection
export function sim2() {
  const initialElements = 3;
  let liveCollectionCount = initialElements;
  const staticNodeListCount = initialElements; // Snapshot remains 3
  // A 4th element is added to DOM
  liveCollectionCount += 1; // Becomes 4 automatically
  return { initialElements, staticNodeListCount, liveCollectionCount };
}

// Sim 3: DocumentFragment Batch Reflow
export function sim3() {
  const itemsToAdd = 1000;
  const directAppendReflows = itemsToAdd; // 1000 reflows
  const fragmentReflows = 1;             // 1 single reflow mount
  return { itemsToAdd, directAppendReflows, fragmentReflows };
}

// Sim 4: Event Flow & Delegation Listener Savings
export function sim4() {
  const phaseCapture = 1;
  const phaseTarget = 2;
  const phaseBubble = 3;
  const listItems = 100;
  const individualListeners = listItems; // 100 listeners
  const delegatedListeners = 1;          // 1 listener on parent
  return { phaseCapture, phaseTarget, phaseBubble, listItems, individualListeners, delegatedListeners };
}

// Sim 5: FormData Field Extraction
export function sim5() {
  const totalFields = 4;
  const validFields = 4;
  const invalidFields = 0;
  return { totalFields, validFields, invalidFields };
}

// Sim 6: Layout Thrashing Reflow Reduction
export function sim6() {
  const loopElements = 10;
  const thrashedReflows = loopElements; // 10 reflows
  const batchedReflows = 1;             // 1 reflow
  return { loopElements, thrashedReflows, batchedReflows };
}

// Sim 7: IntersectionObserver Visibility Threshold
export function sim7() {
  const viewportHeight = 800;
  const visiblePixels = 400;
  const threshold = 0.5; // 50%
  const ratio = Number((visiblePixels / viewportHeight).toFixed(2)); // 0.5
  return { viewportHeight, visiblePixels, threshold, ratio };
}

// Sim 8: Virtual Scrolling Active Node Pool
export function sim8() {
  const totalRecords = 10000;
  const viewportHeight = 400;
  const rowHeight = 40;
  const bufferRows = 2;
  const visibleRows = Math.ceil(viewportHeight / rowHeight); // 10
  const activeNodes = visibleRows + bufferRows; // 12
  return { totalRecords, viewportHeight, rowHeight, visibleRows, activeNodes };
}
