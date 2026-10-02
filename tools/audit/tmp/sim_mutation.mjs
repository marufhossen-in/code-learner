// Lightweight Simulation of GraphQL Serial Mutations & Idempotency in Node.js

class MutationEngine {
  constructor() {
    this.database = [];
    this.idempotencyStore = new Map();
    this.dbInsertCount = 0;
  }

  // Simulating atomic mutation with idempotency check
  async createPost({ title, content, idempotencyKey }) {
    // 1. Check idempotency store
    if (idempotencyKey && this.idempotencyStore.has(idempotencyKey)) {
      return {
        ...this.idempotencyStore.get(idempotencyKey),
        wasCached: true
      };
    }

    // 2. Business validation
    const userErrors = [];
    if (!title || title.length < 5) {
      userErrors.push({ field: 'title', message: 'Title must be at least 5 characters' });
      return { post: null, userErrors, wasCached: false };
    }

    // 3. Database write
    this.dbInsertCount++;
    const post = { id: String(this.database.length + 1), title, content };
    this.database.push(post);

    const payload = {
      post,
      userErrors: [],
      wasCached: false
    };

    if (idempotencyKey) {
      this.idempotencyStore.set(idempotencyKey, payload);
    }

    return payload;
  }

  // Simulating strict serial execution of multiple root mutations in a single document
  async executeDocument(mutations) {
    const results = {};
    for (const { name, input } of mutations) {
      // Must await each sequentially!
      results[name] = await this.createPost(input);
    }
    return results;
  }
}

async function run() {
  const engine = new MutationEngine();

  // 1. Invalid input: title too short
  const invalidRes = await engine.createPost({ title: 'Hi', content: 'Short test' });

  // 2. Valid input with idempotency key
  const validKey = 'idem_key_999';
  const firstCall = await engine.createPost({
    title: 'Mastering GraphQL Mutations',
    content: 'Full deep dive into serial writes',
    idempotencyKey: validKey
  });

  // 3. Retrying the same valid call with same idempotency key (network retry)
  const retryCall = await engine.createPost({
    title: 'Mastering GraphQL Mutations',
    content: 'Full deep dive into serial writes',
    idempotencyKey: validKey
  });

  console.log('Invalid mutation errors count:', invalidRes.userErrors.length);
  console.log('Invalid mutation error field:', invalidRes.userErrors[0].field);
  console.log('First call wasCached:', firstCall.wasCached);
  console.log('First call created post ID:', firstCall.post.id);
  console.log('Retry call wasCached:', retryCall.wasCached);
  console.log('Retry call post ID identical:', retryCall.post.id === firstCall.post.id);
  console.log('Total database inserts executed:', engine.dbInsertCount);
}

run();
