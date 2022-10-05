const fetchProduct = require('../async.js');

//비동기 코드는 프로미스 결과에 상관하지 않고, it이 종료됨. 프로미스의 검증이 완료된 후 테스트 완료가 되도록 해야함.
describe('Async', () => {
  //1. async-done, 콜백으로 done을 인자로 받아온 뒤 코드가 완료되어야 테스트가 종료되게 함
  // - 더 오래걸림
  it('async-done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
      done();
    });
  });

  //2. it의 콜백함수 내부에서 테스트 결과를 return 받는 방법
  it('async-return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
    });
  });

  //3. async - await방법. 함수를 실행 후 결과를 확인하는 방법
  it('async-await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  //4-1. resolves를 이용한 비동기 성공 확인
  it('async-resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: 'Milk',
      price: 200,
    });
  });

  //4-2. rejects를 이용한 비동기 실패 확인
  it('async-reject', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });
});
