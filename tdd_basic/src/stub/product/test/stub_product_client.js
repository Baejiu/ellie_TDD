// 재사용이 가능한 stub class 구현
class StubProductClient {
  async fetchItems() {
    return [
      { name: 'milk', available: true },
      { name: 'cookie', available: true },
      { name: 'latte', available: false },
    ];
  }
}

module.exports = StubProductClient;
