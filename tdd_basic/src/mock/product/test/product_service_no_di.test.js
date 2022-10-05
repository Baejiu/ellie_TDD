const ProductClient = require('../product_client.js');
const ProductService = require('../product_service_no_di.js');

// ProductService의 fetchAvailableItem를 테스트하고 싶은 상황
// - ProductClient에게 의존하고 있는 클래스로써, ProductClient를 mock으로 작성해 테스트함으로써 의존성 해결
// - 실제 fetchAvailableItem의 로직이 작동하는지 검증할 수 있음
// - 단위테스트! 서로 의존하지 않도록 테스트 코드 작성.

// - mock을 남용하는 사례로.. -> stub로 이동..!
//Mock을 이용하는 방법
jest.mock('../product_client');

describe('ProductService', () => {
  // 의존하지 않도록 fetchItems mock 함수 만들기
  const fetchItems = jest.fn(async () => [
    { name: 'milk', available: true },
    { name: 'cookie', available: true },
    { name: 'latte', available: false },
  ]);

  // ProductClient와 fetchItems mock 연결
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();

    // 기본적으로 jest.config.js에 clearMocks: true,로 설정되어 각각의 테스트가 실행될 때 목이 초기화 됨
    // 각각의 테스트 전 초기화 시켜주는 코드
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItem();
    expect(items.length).toBe(2);
    expect(items).toEqual([
      { name: 'milk', available: true },
      { name: 'cookie', available: true },
    ]);
  });

  it('test', async () => {
    const items = await productService.fetchAvailableItem();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
