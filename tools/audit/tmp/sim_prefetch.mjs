// Simulation of TanStack Query prefetchQuery, ensureQueryData & initialData

class QueryCacheMock {
  constructor() {
    this.store = new Map();
  }

  get(key) {
    return this.store.get(JSON.stringify(key));
  }

  set(key, data, updatedAt = Date.now()) {
    this.store.set(JSON.stringify(key), { data, updatedAt, state: 'success' });
  }

  isFresh(entry, staleTime) {
    if (!entry) return false;
    return (Date.now() - entry.updatedAt) < staleTime;
  }
}

class QueryClientMock {
  constructor() {
    this.cache = new QueryCacheMock();
    this.fetchCount = 0;
  }

  async prefetchQuery({ queryKey, queryFn, staleTime = 0 }) {
    const existing = this.cache.get(queryKey);
    if (existing && this.cache.isFresh(existing, staleTime)) {
      return; // Already fresh, skip
    }
    this.fetchCount++;
    const data = await queryFn();
    this.cache.set(queryKey, data);
  }

  async ensureQueryData({ queryKey, queryFn, staleTime = 0 }) {
    const existing = this.cache.get(queryKey);
    if (existing && this.cache.isFresh(existing, staleTime)) {
      return existing.data;
    }
    this.fetchCount++;
    const data = await queryFn();
    this.cache.set(queryKey, data);
    return data;
  }

  seedInitialData(detailKey, listKey, id, staleTime) {
    const listEntry = this.cache.get(listKey);
    if (!listEntry) return null;

    const matchedItem = listEntry.data.find(item => item.id === id);
    if (!matchedItem) return null;

    // Seed into cache with the list's historical updatedAt
    this.cache.set(detailKey, matchedItem, listEntry.updatedAt);
    const isStillFresh = this.cache.isFresh(this.cache.get(detailKey), staleTime);

    return {
      seededItem: matchedItem,
      listUpdatedAt: listEntry.updatedAt,
      isFresh: isStillFresh
    };
  }
}

async function run() {
  const client = new QueryClientMock();
  const listKey = ['articles', 'list'];
  const detailKey = ['articles', 'detail', 42];

  // 1. Populate list cache
  client.cache.set(listKey, [
    { id: 41, title: 'React Server Components' },
    { id: 42, title: 'TanStack Query Prefetching' },
    { id: 43, title: 'Next.js App Router' }
  ], Date.now() - 5000); // Fetched 5 seconds ago

  // 2. prefetchQuery on hover with staleTime 30s
  await client.prefetchQuery({
    queryKey: ['articles', 'detail', 43],
    queryFn: async () => ({ id: 43, title: 'Next.js App Router', views: 1200 }),
    staleTime: 30000
  });

  const prefetchedEntry = client.cache.get(['articles', 'detail', 43]);

  // 3. ensureQueryData in route loader for article 43
  const ensureResult = await client.ensureQueryData({
    queryKey: ['articles', 'detail', 43],
    queryFn: async () => ({ id: 43, title: 'Next.js App Router (Network)', views: 1250 }),
    staleTime: 30000
  });

  // 4. Seeding initialData from list cache for article 42
  const seeded = client.seedInitialData(detailKey, listKey, 42, 10000);

  console.log('Prefetch fetch count after first run:', client.fetchCount);
  console.log('Prefetched article ID 43 views:', prefetchedEntry.data.views);
  console.log('ensureQueryData re-used cache (views):', ensureResult.views);
  console.log('ensureQueryData did NOT increment fetchCount:', client.fetchCount);
  console.log('Seeded article 42 title:', seeded.seededItem.title);
  console.log('Seeded article 42 is fresh (staleTime 10s > 5s elapsed):', seeded.isFresh);
}

run();
