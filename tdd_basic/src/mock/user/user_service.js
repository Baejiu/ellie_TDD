class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      // 함수와 네트워크를 분리한 이유는 단위테스트를 할 수 있기 위해. 별도의 client class를 생성함
      //return fetch('http://example.com/login/id+password') //
      // .then((response) => response.json());
      return this.userClient
        .login(id, password) //
        .then((data) => (this.isLogedIn = true));
    }
  }
}

module.exports = UserService;
