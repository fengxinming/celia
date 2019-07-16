import set from '../src/set';
import get from '../src/get';

it('测试 set 方法', () => {
  const a = { 'a': [{ 'b': { 'c': 3 } }], 'key': 'value' };
  set(a, 'a[0].b.c', 1);
  expect(a).toEqual(
    expect.objectContaining({
      a: [{
        b: {
          c: 1
        }
      }]
    })
  );

  set(a, 'a["0"].b.c', 10);
  expect(a).toEqual(
    expect.objectContaining({
      a: [{
        b: {
          c: 10
        }
      }]
    })
  );

  set(a, 'a[1].b.c', 2);
  expect(get(a, 'a[1].b.c')).toBe(2);

  set(a, 'a["2"].b.c', 4);
  expect(get(a, 'a[2].b.c')).toBe(4);

  set(a, 'a.b.c', 4);
  expect(get(a, 'a.b.c')).toBe(4);

  set(a, 'value', 'a');
  expect(a).toEqual(
    expect.objectContaining({
      value: 'a'
    })
  );

  set(a, 'key', 'key');
  expect(a).toEqual(
    expect.objectContaining({
      key: 'key'
    })
  );

  const b = null;
  set(b, 'a.b');
  expect(b).toBe(null);

});
