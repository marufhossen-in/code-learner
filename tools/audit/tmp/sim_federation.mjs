// Lightweight Simulation of Apollo Federation Router & Subgraph Entity Resolution in Node.js

// Subgraph 1: Products Service (Owns Product entity)
class ProductsSubgraph {
  constructor() {
    this.products = [
      { id: '101', name: 'Mechanical Keyboard', price: 120 },
      { id: '102', name: 'Ergonomic Mouse', price: 80 }
    ];
  }

  getProducts() {
    return this.products;
  }
}

// Subgraph 2: Reviews Service (Extends Product entity with reviews field)
class ReviewsSubgraph {
  constructor() {
    this.reviews = [
      { productId: '101', comment: 'Super tactile switches', rating: 5 },
      { productId: '101', comment: 'Great build quality', rating: 4 },
      { productId: '102', comment: 'Fits palm comfortably', rating: 5 }
    ];
  }

  // Resolves entities passed by the Router via representations array
  resolveEntities(representations) {
    return representations.map(rep => {
      if (rep.__typename === 'Product') {
        const productReviews = this.reviews.filter(r => r.productId === rep.id);
        return {
          id: rep.id,
          reviews: productReviews
        };
      }
      return null;
    });
  }
}

// Apollo Gateway / Router: Decomposes query into execution plan and merges subgraphs
class FederationRouter {
  constructor(productsSub, reviewsSub) {
    this.productsSub = productsSub;
    this.reviewsSub = reviewsSub;
  }

  async executeQuery() {
    // Step 1: Query Products Subgraph
    const products = this.productsSub.getProducts();

    // Step 2: Build representations for boundary entity resolution
    const representations = products.map(p => ({
      __typename: 'Product',
      id: p.id
    }));

    // Step 3: Fetch extension fields from Reviews Subgraph via _entities batch call
    const entityExtensions = this.reviewsSub.resolveEntities(representations);

    // Step 4: Stitch and merge unified response
    const unifiedProducts = products.map(p => {
      const extension = entityExtensions.find(e => e.id === p.id);
      return {
        ...p,
        reviews: extension ? extension.reviews : []
      };
    });

    return { data: { products: unifiedProducts } };
  }
}

async function run() {
  const prodSub = new ProductsSubgraph();
  const revSub = new ReviewsSubgraph();
  const router = new FederationRouter(prodSub, revSub);

  const result = await router.executeQuery();
  const products = result.data.products;

  console.log('Total products stitched:', products.length);
  console.log('First product ID:', products[0].id);
  console.log('First product reviews count:', products[0].reviews.length);
  console.log('First product price:', products[0].price);
  console.log('Second product reviews count:', products[1].reviews.length);
}

run();
