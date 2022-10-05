class ProductClient {
  fetchItems() {
    return fetch('http://example.com/login/id+password').then((response) =>
      responce.json()
    );
  }
}

module.exports = ProductClient;
