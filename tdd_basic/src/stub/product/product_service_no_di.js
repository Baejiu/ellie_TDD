class ProductService {
  // 의존성 없애기 외부로부터 받아오기 - 의존성 역전시키기
  constructor(productClient) {
    this.productClient = productClient;
  }

  fetchAvailableItem() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
