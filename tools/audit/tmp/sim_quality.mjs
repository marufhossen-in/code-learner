// Simulation of TanStack Query Structural Sharing & Selector Optimization

function deepStructuralSharing(oldData, newData) {
  if (oldData === newData) return oldData;
  if (typeof oldData !== 'object' || oldData === null || typeof newData !== 'object' || newData === null) {
    return newData;
  }

  if (Array.isArray(oldData) && Array.isArray(newData)) {
    if (oldData.length === newData.length && oldData.every((item, i) => item === newData[i])) {
      return oldData;
    }
    let hasChanges = false;
    const result = newData.map((newItem, i) => {
      const sharedItem = deepStructuralSharing(oldData[i], newItem);
      if (sharedItem !== oldData[i]) {
        hasChanges = true;
      }
      return sharedItem;
    });
    return (hasChanges || result.length !== oldData.length) ? result : oldData;
  }

  const oldKeys = Object.keys(oldData);
  const newKeys = Object.keys(newData);

  let hasChanges = oldKeys.length !== newKeys.length;
  const result = {};

  for (const key of newKeys) {
    const sharedVal = deepStructuralSharing(oldData[key], newData[key]);
    result[key] = sharedVal;
    if (sharedVal !== oldData[key]) {
      hasChanges = true;
    }
  }

  return hasChanges ? result : oldData;
}

// 1. Initial State
const stateV1 = {
  user: { id: 7, name: 'Alice', role: 'admin' },
  notifications: [
    { id: 101, text: 'Welcome', read: true },
    { id: 102, text: 'Invoice ready', read: false }
  ]
};

// 2. Incoming refetch with identical values (new wire reference)
const wireV2 = JSON.parse(JSON.stringify(stateV1));
const stateV2 = deepStructuralSharing(stateV1, wireV2);

// 3. Incoming refetch where only 1 notification changed
const wireV3 = JSON.parse(JSON.stringify(stateV1));
wireV3.notifications[1].read = true; // marked read
const stateV3 = deepStructuralSharing(stateV2, wireV3);

// 4. Selector: Select only user
const selectUser = (state) => state.user;
const userFromV1 = selectUser(stateV1);
const userFromV3 = selectUser(stateV3);

console.log('Wire V2 identical payload reference match:', stateV1 === stateV2);
console.log('Wire V3 modified user object identity preserved:', stateV1.user === stateV3.user);
console.log('Wire V3 unchanged notification [0] identity preserved:', stateV1.notifications[0] === stateV3.notifications[0]);
console.log('Wire V3 changed notification [1] identity updated:', stateV1.notifications[1] === stateV3.notifications[1]);
console.log('Selector user identity preserved despite notification change:', userFromV1 === userFromV3);
