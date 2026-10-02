// Lightweight Simulation of GraphQL Normalized Cache in Node.js

class NormalizedCache {
  constructor() {
    this.entities = new Map();
  }

  // Normalizes an incoming tree into flat entity records keyed by __typename:id
  write(data) {
    if (data === null || typeof data !== 'object') return data;

    if (Array.isArray(data)) {
      return data.map(item => this.write(item));
    }

    const { __typename, id } = data;
    const normalizedRecord = {};

    for (const [key, value] of Object.entries(data)) {
      if (value !== null && typeof value === 'object') {
        normalizedRecord[key] = this.write(value);
      } else {
        normalizedRecord[key] = value;
      }
    }

    if (__typename && id !== undefined) {
      const entityKey = `${__typename}:${id}`;
      const existing = this.entities.get(entityKey) || {};
      const merged = { ...existing, ...normalizedRecord };
      this.entities.set(entityKey, merged);
      return { __ref: entityKey };
    }

    return normalizedRecord;
  }

  // Reads an entity by reference
  readRef(refObj) {
    if (!refObj || !refObj.__ref) return null;
    return this.entities.get(refObj.__ref) || null;
  }

  // Direct entity update (e.g. from a mutation payload)
  updateEntity(typename, id, patch) {
    const key = `${typename}:${id}`;
    if (!this.entities.has(key)) return false;
    const current = this.entities.get(key);
    this.entities.set(key, { ...current, ...patch });
    return true;
  }
}

const cache = new NormalizedCache();

// 1. Ingesting query 1: User Profile query
const queryResponse1 = {
  user: {
    __typename: 'User',
    id: '7',
    name: 'Alice',
    role: 'Editor'
  }
};
const ref1 = cache.write(queryResponse1);

// 2. Ingesting query 2: Team Members query (contains same user Alice)
const queryResponse2 = {
  team: {
    __typename: 'Team',
    id: 'team_alpha',
    members: [
      { __typename: 'User', id: '7', name: 'Alice', role: 'Editor' },
      { __typename: 'User', id: '8', name: 'Bob', role: 'Viewer' }
    ]
  }
};
const ref2 = cache.write(queryResponse2);

// 3. User updates their name via mutation from 'Alice' to 'Alice Walker'
cache.updateEntity('User', '7', { name: 'Alice Walker' });

// 4. Verify that reading from User:7 reflects the change everywhere
const userRecord = cache.entities.get('User:7');
const totalStoredEntities = cache.entities.size;

console.log('Total normalized entities in store:', totalStoredEntities);
console.log('User 7 name updated in central store:', userRecord.name);
console.log('User 7 role preserved:', userRecord.role);
console.log('Reference pointer exists:', ref1.user.__ref === 'User:7');
