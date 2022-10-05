const ProductService = require('../product_service_no_di.js');
const StubProductService = require('./stub_product_client.js');

describe('ProductService - Stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductService());
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItem();
    expect(items.length).toBe(2);
    expect(items).toEqual([
      { name: 'milk', available: true },
      { name: 'cookie', available: true },
    ]);
  });
});
