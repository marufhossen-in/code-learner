// Simulation of TanStack Query Pagination & useInfiniteQuery behavior

class QueryCacheMock {
  constructor() {
    this.queries = new Map();
  }

  getQuery(keyStr) {
    return this.queries.get(keyStr);
  }

  setQuery(keyStr, data) {
    this.queries.set(keyStr, { data, updatedAt: Date.now() });
  }
}

// 1. Simulating Pagination with keepPreviousData
function simulatePagination() {
  const cache = new QueryCacheMock();
  const logs = [];

  // Page 1 is already cached
  cache.setQuery('["products",{"page":1}]', {
    items: ['Laptop', 'Mouse', 'Keyboard'],
    totalPages: 3,
    currentPage: 1
  });

  // User navigates from Page 1 to Page 2
  let currentPage = 2;
  const targetKey = JSON.stringify(['products', { page: currentPage }]);
  const previousKey = JSON.stringify(['products', { page: 1 }]);

  // TanStack Query v5 placeholderData: keepPreviousData logic
  let activeData = cache.getQuery(targetKey)?.data;
  let isPlaceholderData = false;

  if (!activeData) {
    const prevQuery = cache.getQuery(previousKey);
    if (prevQuery) {
      activeData = prevQuery.data;
      isPlaceholderData = true;
    }
  }

  logs.push({
    page: currentPage,
    isPlaceholder: isPlaceholderData,
    itemsCount: activeData ? activeData.items.length : 0,
    firstItem: activeData ? activeData.items[0] : null
  });

  // Now Page 2 arrives from the network
  cache.setQuery(targetKey, {
    items: ['Monitor', 'Headphones', 'Webcam'],
    totalPages: 3,
    currentPage: 2
  });

  activeData = cache.getQuery(targetKey).data;
  isPlaceholderData = false;

  logs.push({
    page: currentPage,
    isPlaceholder: isPlaceholderData,
    itemsCount: activeData.items.length,
    firstItem: activeData.items[0]
  });

  return logs;
}

// 2. Simulating useInfiniteQuery with maxPages
function simulateInfiniteQuery() {
  const allDatabasePosts = [
    { id: 101, title: 'Intro to React' },
    { id: 102, title: 'TanStack Query Basics' },
    { id: 103, title: 'Mutations & Invalidation' },
    { id: 104, title: 'Optimistic UI' },
    { id: 105, title: 'Query Key Factories' },
    { id: 106, title: 'Infinite Scroll Mastery' }
  ];

  const pageSize = 2;

  function fetchPostsPage({ pageParam = 0 }) {
    const start = pageParam * pageSize;
    const items = allDatabasePosts.slice(start, start + pageSize);
    const nextCursor = (start + pageSize < allDatabasePosts.length) ? pageParam + 1 : undefined;
    return {
      items,
      nextCursor
    };
  }

  // Infinite query state
  const infiniteData = {
    pages: [],
    pageParams: []
  };

  const maxPages = 2; // Keep at most 2 pages in memory
  let currentCursor = 0;

  // Fetch Page 0
  const page0 = fetchPostsPage({ pageParam: currentCursor });
  infiniteData.pages.push(page0);
  infiniteData.pageParams.push(currentCursor);
  currentCursor = page0.nextCursor;

  // Fetch Page 1
  const page1 = fetchPostsPage({ pageParam: currentCursor });
  infiniteData.pages.push(page1);
  infiniteData.pageParams.push(currentCursor);
  currentCursor = page1.nextCursor;

  // Fetch Page 2 (with maxPages = 2, oldest page drops out from memory window)
  const page2 = fetchPostsPage({ pageParam: currentCursor });
  infiniteData.pages.push(page2);
  infiniteData.pageParams.push(currentCursor);
  currentCursor = page2.nextCursor;

  if (infiniteData.pages.length > maxPages) {
    infiniteData.pages.shift();
    infiniteData.pageParams.shift();
  }

  const flattenedPostCount = infiniteData.pages.flatMap(p => p.items).length;
  const hasMore = currentCursor !== undefined;

  return {
    retainedPagesCount: infiniteData.pages.length,
    firstRetainedPostId: infiniteData.pages[0].items[0].id,
    lastRetainedPostId: infiniteData.pages[1].items[1].id,
    totalVisiblePosts: flattenedPostCount,
    hasMore
  };
}

const paginationResults = simulatePagination();
console.log('Pagination Step 1 (Loading Page 2 with placeholderData):');
console.log('isPlaceholderData:', paginationResults[0].isPlaceholder);
console.log('Rendered items count:', paginationResults[0].itemsCount);
console.log('Rendered first item:', paginationResults[0].firstItem);

console.log('\nPagination Step 2 (Page 2 resolved):');
console.log('isPlaceholderData:', paginationResults[1].isPlaceholder);
console.log('Rendered items count:', paginationResults[1].itemsCount);
console.log('Rendered first item:', paginationResults[1].firstItem);

const infiniteResults = simulateInfiniteQuery();
console.log('\nInfinite Query with maxPages 2:');
console.log('Retained pages in memory:', infiniteResults.retainedPagesCount);
console.log('First retained post ID:', infiniteResults.firstRetainedPostId);
console.log('Last retained post ID:', infiniteResults.lastRetainedPostId);
console.log('Total visible posts in memory window:', infiniteResults.totalVisiblePosts);
console.log('Has next page available:', infiniteResults.hasMore);
