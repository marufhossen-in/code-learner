// Test all 9 executable simulation scripts for caching lessons

// Sim 1: Hit rate average latency and origin queries reduction
function sim1() {
  const cacheLatencyMs = 1;
  const originLatencyMs = 100;
  const requestsPerSec = 10000;

  // 90% hit rate
  const hitRate90 = 0.90;
  const avgLatency90 = (hitRate90 * cacheLatencyMs) + ((1 - hitRate90) * (cacheLatencyMs + originLatencyMs));
  const originQps90 = requestsPerSec * (1 - hitRate90);

  // 99% hit rate
  const hitRate99 = 0.99;
  const avgLatency99 = (hitRate99 * cacheLatencyMs) + ((1 - hitRate99) * (cacheLatencyMs + originLatencyMs));
  const originQps99 = requestsPerSec * (1 - hitRate99);

  return {
    avgLatency90: Number(avgLatency90.toFixed(1)), // 11.0
    originQps90, // 1000
    avgLatency99: Number(avgLatency99.toFixed(1)), // 2.0
    originQps99 // 100
  };
}

// Sim 2: TTL Jitter dispersion simulation
function sim2() {
  const baseTtl = 3600; // 1 hour in seconds
  const jitterPercent = 0.10; // +/- 10%
  const minTtl = baseTtl * (1 - jitterPercent); // 3240
  const maxTtl = baseTtl * (1 + jitterPercent); // 3960
  const spreadSeconds = maxTtl - minTtl; // 720 seconds (12 minutes)
  return { baseTtl, minTtl, maxTtl, spreadSeconds };
}

// Sim 3: Multi-tier 5-layer latency chain
function sim3() {
  // Latencies per tier in milliseconds
  const tiers = {
    browser: 0.1,
    cdn: 15,
    gateway: 5,
    redis: 1,
    database: 80
  };
  const hitAtRedisTotalLatency = tiers.browser + tiers.cdn + tiers.gateway + tiers.redis; // 21.1 ms
  const fullMissTotalLatency = hitAtRedisTotalLatency + tiers.database; // 101.1 ms
  return { hitAtRedisTotalLatency, fullMissTotalLatency };
}

// Sim 4: Negative Caching saving database queries
function sim4() {
  const totalQueriesForMissingUser = 1000;
  const negativeCacheTtlSeconds = 60;
  // With negative caching, only 1 DB query is made during the 60s TTL window
  const dbQueriesWithNegativeCache = 1;
  const dbQueriesSaved = totalQueriesForMissingUser - dbQueriesWithNegativeCache; // 999
  const loadReductionPercent = ((dbQueriesSaved / totalQueriesForMissingUser) * 100); // 99.9%
  return { totalQueriesForMissingUser, dbQueriesSaved, loadReductionPercent };
}

// Sim 5: LRU Cache simulation (O(1) Hash Map + Doubly Linked List)
function sim5() {
  class Node {
    constructor(key, val) {
      this.key = key;
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }

  class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.map = new Map();
      this.head = new Node('HEAD', 0);
      this.tail = new Node('TAIL', 0);
      this.head.next = this.tail;
      this.tail.prev = this.head;
      this.hits = 0;
      this.misses = 0;
    }

    _remove(node) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }

    _addToHead(node) {
      node.next = this.head.next;
      node.prev = this.head;
      this.head.next.prev = node;
      this.head.next = node;
    }

    get(key) {
      if (this.map.has(key)) {
        const node = this.map.get(key);
        this._remove(node);
        this._addToHead(node);
        this.hits++;
        return node.val;
      }
      this.misses++;
      return null;
    }

    put(key, val) {
      if (this.map.has(key)) {
        const node = this.map.get(key);
        node.val = val;
        this._remove(node);
        this._addToHead(node);
      } else {
        if (this.map.size >= this.capacity) {
          const lru = this.tail.prev;
          this._remove(lru);
          this.map.delete(lru.key);
        }
        const newNode = new Node(key, val);
        this.map.set(key, newNode);
        this._addToHead(newNode);
      }
    }

    getKeys() {
      const keys = [];
      let curr = this.head.next;
      while (curr !== this.tail) {
        keys.push(curr.key);
        curr = curr.next;
      }
      return keys;
    }
  }

  const cache = new LRUCache(3);
  const sequence = ['A', 'B', 'C', 'A', 'D', 'E', 'A', 'B', 'C', 'D', 'E'];
  for (const k of sequence) {
    if (cache.get(k) === null) {
      cache.put(k, 1);
    }
  }

  return {
    capacity: 3,
    totalReferences: sequence.length,
    hits: cache.hits, // 2
    misses: cache.misses, // 9
    finalOrder: cache.getKeys() // ['E', 'D', 'C']
  };
}

// Sim 6: Mutex coalescing (Singleflight)
function sim6() {
  const concurrentClients = 100;
  // With mutex lock, exactly 1 request acquires the lock and queries DB
  const dbQueriesExecuted = 1;
  const callersServedFromLeader = concurrentClients - dbQueriesExecuted; // 99
  return { concurrentClients, dbQueriesExecuted, callersServedFromLeader };
}

// Sim 7: Redis memory overhead calculation
function sim7() {
  // Raw data: key = "user:1000", val = "Alice Johnson"
  const rawKeyBytes = 9;
  const rawValBytes = 13;
  const rawTotalBytes = rawKeyBytes + rawValBytes; // 22 bytes

  // Redis internal framing:
  // dictEntry = 24 bytes
  // robj for key = 16 bytes
  // robj for val = 16 bytes
  // sds header overhead = 3 + 3 = 6 bytes
  // allocator jemalloc alignment padding = 8 bytes
  const redisFramingOverhead = 24 + 16 + 16 + 6 + 8; // 70 bytes
  const totalRedisMemory = rawTotalBytes + redisFramingOverhead; // 92 bytes
  const overheadRatio = Number((totalRedisMemory / rawTotalBytes).toFixed(1)); // 4.2x
  return { rawTotalBytes, totalRedisMemory, overheadRatio };
}

// Sim 8: CRC16 Hash Slot calculation for Redis Cluster
function sim8() {
  // Poly: 0x1021
  function crc16(buf) {
    let crc = 0x0000;
    for (let i = 0; i < buf.length; i++) {
      crc ^= buf[i] << 8;
      for (let j = 0; j < 8; j++) {
        if ((crc & 0x8000) !== 0) {
          crc = ((crc << 1) ^ 0x1021) & 0xffff;
        } else {
          crc = (crc << 1) & 0xffff;
        }
      }
    }
    return crc;
  }

  function getSlot(key) {
    // If key contains {hashTag}, hash only the tag
    const s = key.indexOf('{');
    const e = key.indexOf('}');
    let strToHash = key;
    if (s !== -1 && e !== -1 && e > s + 1) {
      strToHash = key.substring(s + 1, e);
    }
    const buf = Buffer.from(strToHash, 'utf8');
    return crc16(buf) % 16384;
  }

  const slotProfile = getSlot('{user:100}:profile');
  const slotOrders = getSlot('{user:100}:orders');
  const slotGeneral = getSlot('global:config');

  return {
    totalClusterSlots: 16384,
    slotProfile,
    slotOrders,
    sameSlot: slotProfile === slotOrders,
    slotGeneral
  };
}

// Sim 9: End-to-end multi-tier latency and hit ratio
function sim9() {
  const totalRequests = 100000; // 100K rps
  const cdnHitRatio = 0.70; // 70%
  const redisHitRatio = 0.95; // 95% of remaining

  const cdnHits = totalRequests * cdnHitRatio; // 70,000
  const cdnMisses = totalRequests - cdnHits; // 30,000

  const redisHits = cdnMisses * redisHitRatio; // 28,500
  const originDbQueries = cdnMisses - redisHits; // 1,500

  const overallCacheOffloadPercent = Number((((totalRequests - originDbQueries) / totalRequests) * 100).toFixed(1)); // 98.5%

  return {
    totalRequests,
    cdnHits,
    redisHits,
    originDbQueries,
    overallCacheOffloadPercent // 98.5%
  };
}

console.log('Sim 1:', sim1());
console.log('Sim 2:', sim2());
console.log('Sim 3:', sim3());
console.log('Sim 4:', sim4());
console.log('Sim 5:', sim5());
console.log('Sim 6:', sim6());
console.log('Sim 7:', sim7());
console.log('Sim 8:', sim8());
console.log('Sim 9:', sim9());
