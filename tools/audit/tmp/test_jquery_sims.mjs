// Test simulations for all 8 jQuery lessons

// Sim 1: jQuery Wrapper & Chaining
export function sim1() {
  const matchedElements = 3;
  let chainDepth = 0;
  // Chain: $('div').addClass().css().attr()
  chainDepth += 1; // .addClass()
  chainDepth += 1; // .css()
  chainDepth += 1; // .attr()
  return { matchedElements, chainDepth };
}

// Sim 2: Selectors & Even/Odd Filters
export function sim2() {
  const totalItems = 6; // indices 0 to 5
  const evenCount = Math.ceil(totalItems / 2); // 3 (indices 0, 2, 4)
  const oddCount = Math.floor(totalItems / 2); // 3 (indices 1, 3, 5)
  return { totalItems, evenCount, oddCount };
}

// Sim 3: Batch DOM Style Updates
export function sim3() {
  const elements = 5;
  const properties = 2; // color, fontSize
  const totalStyleUpdates = elements * properties; // 10 updates in 1 call
  return { elements, properties, totalStyleUpdates };
}

// Sim 4: Namespaced Event Delegation
export function sim4() {
  const initialListeners = 3; // click.modal, click.tooltip, click.analytics
  const remainingListeners = 2; // after .off('click.modal')
  const removedListeners = 1;
  return { initialListeners, remainingListeners, removedListeners };
}

// Sim 5: Animation Queue & stop()
export function sim5() {
  const initialQueue = 3; // 3 animations queued
  const remainingQueue = 0; // after .stop(true, true)
  const clearedAnimations = 2;
  return { initialQueue, remainingQueue, clearedAnimations };
}

// Sim 6: $.ajax() Status Code Handling
export function sim6() {
  const statusSuccess = 200;
  const statusNotFound = 404;
  const statusServerError = 500;
  return { statusSuccess, statusNotFound, statusServerError };
}

// Sim 7: $.Deferred() State Transitions
export function sim7() {
  const statePending = 'pending';
  const stateResolved = 'resolved';
  const callbacksFired = 1;
  return { statePending, stateResolved, callbacksFired };
}

// Sim 8: Bundle Size Migration Savings
export function sim8() {
  const jqueryBundleKB = 88; // ~88 KB minified
  const vanillaBundleKB = 0; // Native browser APIs
  const kbSaved = jqueryBundleKB - vanillaBundleKB; // 88 KB saved
  return { jqueryBundleKB, vanillaBundleKB, kbSaved };
}

console.log('Sim 1:', sim1());
console.log('Sim 2:', sim2());
console.log('Sim 3:', sim3());
console.log('Sim 4:', sim4());
console.log('Sim 5:', sim5());
console.log('Sim 6:', sim6());
console.log('Sim 7:', sim7());
console.log('Sim 8:', sim8());
