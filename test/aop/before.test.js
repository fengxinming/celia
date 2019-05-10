import before from '../../src/aop/before';

class A {

  constructor() {
    this.counter = 0;
  }

  increment() {
    this.counter++;
  }

}

it('测试 before 方法', () => {
  const a = new A();
  expect(a.counter).toBe(0);

  before(a, 'increment', function () {
    this.counter = 1;
  });
  a.increment();
  expect(a.counter).toBe(2);
});
