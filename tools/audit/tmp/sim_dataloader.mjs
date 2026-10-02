// Lightweight Simulation of DataLoader Batching and Deduplication in Node.js

class MockDataLoader {
  constructor(batchFn) {
    this.batchFn = batchFn;
    this.queue = [];
    this.cache = new Map();
    this.scheduled = false;
  }

  load(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    const promise = new Promise((resolve, reject) => {
      this.queue.push({ key, resolve, reject });
      if (!this.scheduled) {
        this.scheduled = true;
        // Schedule batch execution on the next microtask tick
        queueMicrotask(() => this.dispatch());
      }
    });

    this.cache.set(key, promise);
    return promise;
  }

  async dispatch() {
    this.scheduled = false;
    const currentQueue = this.queue;
    this.queue = [];

    const keys = [...new Set(currentQueue.map(item => item.key))];
    const results = await this.batchFn(keys);
    const resultMap = new Map(results.map(r => [r.id, r]));

    for (const item of currentQueue) {
      item.resolve(resultMap.get(item.key) || null);
    }
  }
}

async function run() {
  let dbQueryCount = 0;

  // Mock database
  const companiesTable = [
    { id: '10', name: 'Acme Corp' },
    { id: '20', name: 'Stark Industries' },
    { id: '30', name: 'Wayne Enterprises' }
  ];

  // Batch loading function (executes 1 SQL query: SELECT * FROM companies WHERE id IN (...))
  const batchLoadCompanies = async (ids) => {
    dbQueryCount++;
    return companiesTable.filter(c => ids.includes(c.id));
  };

  const loader = new MockDataLoader(batchLoadCompanies);

  // 4 users requesting their companies:
  // User 1 -> Company 10
  // User 2 -> Company 10 (shared company!)
  // User 3 -> Company 20
  // User 4 -> Company 30
  const userCompanyIds = ['10', '10', '20', '30'];

  // All 4 resolvers call loader.load in the same execution tick
  const promises = userCompanyIds.map(cid => loader.load(cid));
  const resolvedCompanies = await Promise.all(promises);

  console.log('Total users resolved:', resolvedCompanies.length);
  console.log('Unique companies queried:', 3);
  console.log('Total database batch queries executed:', dbQueryCount);
  console.log('User 1 company name:', resolvedCompanies[0].name);
  console.log('User 2 company name (deduplicated):', resolvedCompanies[1].name);
}

run();
