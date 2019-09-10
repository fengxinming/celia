import alias from '../src/alias';
import assignDeep from '../src/assignDeep';
import looseClone from '../src/looseClone';
import get from '../src/get';
import getUid from '../src/getUid';
import hasOwn from '../src/hasOwn';
import set from '../src/set';
import mapObject from '../src/mapObject';
import forIn from '../src/forIn';
import forOwn from '../src/forOwn';
import A from './A';

it('测试 forIn 方法', () => {
  const obj = { 1: 1, 2: 2, 3: 3 };
  let i = 0;
  forIn(obj, () => {
    i++;
    if (i === 2) {
      return false;
    }
  });
  expect(i).toBe(2);
  const a = {};
  forIn({ 1: 1, 2: 2 }, function () {
    expect(this).toBe(a);
  }, a);

  i = 0;
  forIn(null, () => {
    i++;
  });
  expect(i).toBe(0);
});

it('测试 forOwn 方法', () => {
  const instance = new A();
  let i = 0;
  forOwn(instance, (val) => {
    if (val === '111') {
      i++;
      return false;
    }
  });
  expect(i).toBe(1);
  const ctx = {};
  forOwn(instance, function () {
    expect(this).toBe(ctx);
  }, ctx);

  i = 0;
  forOwn(null, () => {
    i++;
  });
  expect(i).toBe(0);
});

it('测试 alias 方法', () => {
  alias();

  const obj1 = { a: 1, b: 2 };
  alias(obj1, {
    a: 'c',
    b: ['e', 'f']
  });

  expect(obj1.c).toBe(1);
  expect(obj1.e).toBe(2);
});

it('测试 assignDeep 方法', () => {
  let a = { a: 1 };
  const b = { b: 2 };
  const c = { c: 3 };
  assignDeep(a, b, c);
  expect(a).toEqual(
    expect.objectContaining({
      a: 1,
      c: 3,
      b: 2
    })
  );

  expect(() => {
    assignDeep(null);
  }).toThrow();

  assignDeep(a, null);
  expect(a.a).toBe(1);

  const d = { a: { aa: { aaa: 1 } }, b: { bb: 2 }, arr: ['a', 'b'], arr2: [1, 2, 3] };
  const e = { a: 1, b: { bb: 1111 }, c: { cc: { ccc: 1 } }, d: { dd: 2 }, arr2: ['a', 'b'] };
  assignDeep(d, e);
  expect(d).toEqual(
    expect.objectContaining({
      a: 1,
      arr: ['a', 'b'],
      arr2: ['a', 'b', 3],
      b: {
        bb: 1111
      },
      c: {
        cc: {
          ccc: 1
        }
      },
      d: {
        dd: 2
      }
    })
  );
});

describe('测试 looseClone 方法', () => {
  it('浅复制', () => {
    const a = { a: 1 };
    const b = looseClone(a);
    expect(a).not.toBe(b);
    expect(a).toEqual(
      expect.objectContaining({
        a: 1
      })
    );

    const c = 1;
    expect(looseClone(c)).toBe(c);
  });

  it('深复制', () => {

    const d = { a: { aa: { aaa: 1 } }, b: { bb: 2 }, arr: ['a', 'b'], arr2: [1, 2, 3] };
    const cp = looseClone(d, true);
    expect(d).not.toBe(cp);
    expect(d.a).not.toBe(cp.a);
    expect(d.b).not.toBe(cp.b);
    expect(cp).toEqual(
      expect.objectContaining({
        a: {
          aa: {
            aaa: 1
          }
        },
        arr: ['a', 'b'],
        arr2: [1, 2, 3],
        b: {
          bb: 2
        }
      })
    );
  });

  it('深复制2', () => {
    const e = { a: 1, b: { bb: 1111 }, c: { cc: { ccc: 1 } }, d: { dd: 2 }, arr2: ['a', 'b'] };
    const cp2 = looseClone(e, true);
    expect(e).not.toBe(cp2);
    expect(cp2).toEqual(
      expect.objectContaining({
        a: 1,
        arr2: ['a', 'b'],
        b: {
          bb: 1111
        },
        c: {
          cc: {
            ccc: 1
          }
        },
        d: {
          dd: 2
        }
      })
    );
  });
});

it('测试 get 方法', () => {
  const a = { a: [{ b: { c: 3 } }], key: 'value' };
  expect(get(null, 'a[0].b.c', 3)).toBe(3);
  expect(get(a, 'a[0].b.c')).toBe(3);
  expect(get(a, 'a["0"].b.c')).toBe(3);
  expect(get(a, 'a.b.c')).toBe(undefined);
  expect(get(a, 'a.b.c', 'default')).toBe('default');
  expect(get(a, 'key')).toBe('value');
  expect(get({ key: null }, 'key')).toBe(null);
});

it('测试 getUid 方法', () => {
  const a = {};
  const b = {};
  expect(getUid(a)).not.toBe(getUid(b));
  expect(getUid(a)).toBe(getUid(a));
});

it('测试 hasOwn 方法', () => {
  const obj = { aaa: 111 };
  expect(hasOwn(obj, 'test')).toBe(false);
  expect(hasOwn(obj, 'aaa')).toBe(true);
});

it('测试 set 方法', () => {
  const a = { a: [{ b: { c: 3 } }], key: 'value' };
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

it('测试 mapObject 方法', () => {
  expect(mapObject({
    a: 1,
    b: 2
  }, (val, key) => {
    return val + 1;
  })).toEqual({
    a: 2,
    b: 3
  });
});
