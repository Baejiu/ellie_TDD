const Calculator = require('../calculator.js');


//테스트를 묶을 수 있음
//- 각각의 테스트는 독립적이어야 함(서로 영향을 주지 않도록)

describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    //각각의 테스트가 시작되기 전 실행
    cal = new Calculator();
  });

  afterEach(() => {
    //각각의 테스트가 종료되기 전 실행
  });

  beforeAll(() => {
    //모든 테스트가 시작하기 전 한번만 실행
  });

  afterAll(() => {
    //모든 테스트가 종료되기 전 한번만 실행
  });

  //it() = Calculator를 칭함
  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('clear', () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('add', () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it('add should throw an error if value is greater than 100', () => {
    //에러 잡는 방법은 expact(() => {실행문}).toThrow('에러내용")
    expect(() => {
      cal.add(101);
    }).toThrow('Value can not be greater than 100');
  });
  it('subtracts', () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });

  it('multiplies', () => {
    cal.set(4);
    cal.multiply(5);
    expect(cal.value).toBe(20);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it('4 / 4 === 1', () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
