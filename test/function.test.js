import sleep from '../src/sleep';
import beforeCall from '../src/fn/beforeCall';
import afterCall from '../src/fn/afterCall';
import aroundCall from '../src/fn/aroundCall';
import debounce from '../src/fn/debounce';
import A from './A';

it('测试 beforeCall 方法', () => {
  beforeCall();

  const a = new A();
  expect(a.counter).toBe(0);

  beforeCall(a, 'increment', function () {
    this.counter = 1;
  });
  a.increment();
  expect(a.counter).toBe(2);
});

it('测试 afterCall 方法', () => {
  afterCall();

  const a = new A();
  expect(a.counter).toBe(0);

  afterCall(a, 'increment', function () {
    this.counter = 2;
  });
  a.increment();
  expect(a.counter).toBe(2);
});

it('测试 aroundCall 方法', () => {
  aroundCall();

  const a = new A();
  expect(a.counter).toBe(0);

  aroundCall(a, 'increment', function (args, fn) {
    this.counter = 2;
    fn.apply(this, args);
    this.counter = 2;
  });
  a.increment();
  expect(a.counter).toBe(2);
});

it('测试 debounce 方法', async () => {

  let i = 0;
  const counter = debounce(() => {
    i++;
  }, 200);
  counter();
  await sleep(100);
  counter();
  await sleep(100);
  counter();
  await sleep(200);
  await expect(i).toBe(1);
});
