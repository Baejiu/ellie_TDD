const check = require('../check.js');
describe('check', () => {
  // 변수 선언
  let onSuccess;
  let onFail;

  beforeEach(() => {
    // 각 테스트가 실행되기 전에 함수 mock 함수 생성
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('should call onSuccess when predicate is true', () => {
    check(() => true, onSuccess, onFail);

    // mock 함수가 적어도 1번, 0번은 실행되어야 한다
    expect(onSuccess.mock.calls.length).toBe(1);
    expect(onFail.mock.calls.length).toBe(0);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledTimes(0);

    // mock 함수의 첫번째 인자의 첫번째 값이 'yes'
    expect(onSuccess.mock.calls[0][0]).toBe('yes');
    expect(onSuccess).toHaveBeenLastCalledWith('yes');
  });

  it('should call onFail when predicate is false', () => {
    check(() => false, onSuccess, onFail);

    // mock 함수가 적어도 1번, 0번은 실행되어야 한다
    expect(onSuccess).toHaveBeenCalledTimes(0);
    expect(onFail).toHaveBeenCalledTimes(1);

    // mock 함수의 첫번째 인자의 첫번째 값이 'yes'
    expect(onFail).toHaveBeenLastCalledWith('no');
  });
});
