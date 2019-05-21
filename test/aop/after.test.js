import after from '../../src/aop/after';

class A {

  constructor() {
    this.counter = 0;
  }

  increment() {
    this.counter++;
  }

}

it('测试 after 方法', () => {
  const a = new A();
  expect(a.counter).toBe(0);

  after(a, 'increment', function () {
    this.counter = 1;
  });
  a.increment();
  expect(a.counter).toBe(1);
});
