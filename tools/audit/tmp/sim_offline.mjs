// Simulation of TanStack Query persistQueryClient, dehydrate/hydrate & maxAge

class StorageMock {
  constructor() {
    this.store = new Map();
  }
  getItem(k) { return this.store.get(k) ?? null; }
  setItem(k, v) { this.store.set(k, v); }
  removeItem(k) { this.store.delete(k); }
}

function dehydrateCache(queries) {
  return {
    timestamp: Date.now(),
    buster: 'v2.1',
    queries: queries.map(q => ({
      queryKey: q.queryKey,
      data: q.data,
      dataUpdatedAt: q.dataUpdatedAt
    }))
  };
}

function hydrateCache(storage, key, maxAge, currentBuster) {
  const raw = storage.getItem(key);
  if (!raw) return { success: false, reason: 'empty_storage' };

  const parsed = JSON.parse(raw);
  if (parsed.buster !== currentBuster) {
    storage.removeItem(key);
    return { success: false, reason: 'buster_mismatch' };
  }

  const age = Date.now() - parsed.timestamp;
  if (age > maxAge) {
    storage.removeItem(key);
    return { success: false, reason: 'max_age_expired' };
  }

  return {
    success: true,
    rehydratedCount: parsed.queries.length,
    queries: parsed.queries
  };
}

const storage = new StorageMock();
const storageKey = 'TQ_OFFLINE_CACHE';
const maxAge = 1000 * 60 * 60 * 24; // 24 hours

// 1. Initial queries in memory
const activeQueries = [
  { queryKey: ['user', 'profile'], data: { name: 'Sarah', role: 'engineer' }, dataUpdatedAt: Date.now() },
  { queryKey: ['settings', 'theme'], data: { darkMode: true, fontSize: 16 }, dataUpdatedAt: Date.now() }
];

// 2. Persist to storage
const serialized = dehydrateCache(activeQueries);
storage.setItem(storageKey, JSON.stringify(serialized));

// 3. Hydrate with matching buster 'v2.1'
const goodHydration = hydrateCache(storage, storageKey, maxAge, 'v2.1');

// 4. Simulate deployment with buster bump 'v2.2'
storage.setItem(storageKey, JSON.stringify(serialized));
const bumpedHydration = hydrateCache(storage, storageKey, maxAge, 'v2.2');

// 5. Offline network mode simulation
let isOnline = false;
function executeQueryWithNetworkMode(networkMode) {
  if (!isOnline && networkMode === 'online') {
    return 'paused';
  }
  return 'fetching';
}

console.log('Hydration with matching buster success:', goodHydration.success);
console.log('Rehydrated queries count:', goodHydration.rehydratedCount);
console.log('Hydration with bumped buster reason:', bumpedHydration.reason);
console.log('Storage wiped after buster mismatch:', storage.getItem(storageKey) === null);
console.log('Query fetch status while offline under online mode:', executeQueryWithNetworkMode('online'));
