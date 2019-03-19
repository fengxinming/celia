import forOwn from '../src/forOwn';

it('测试 forOwn 方法', () => {
  class A {

    constructor() {
      this.a = '111';
      this.d = '222';
    }
    b() {

    }

    c() {

    }

  }

  const instance = new A();
  expect(forOwn(null, () => { })).toBe(false);
  let i = 0;
  forOwn(instance, () => {
    i++;
  });
  expect(i).toBe(2);
  const ctx = {};
  forOwn(instance, function () {
    expect(this).toBe(ctx);
  }, ctx);
});
