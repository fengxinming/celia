import alias from '../src/alias';
import assign from '../src/_assign';
import deepAssign from '../src/deepAssign';
import forIn from '../src/forIn';
import forOwn from '../src/forOwn';
import get from '../src/get';
import looseClone from '../src/looseClone';
import set from '../src/set';
import transform from '../src/transform';
import uid from '../src/uid';
import hasOwn from '../src/hasOwn';
import A from './A';

it('测试 _assign 方法', () => {
  const a = { a: 1 };
  const b = { b: 2 };
  const c = { c: 3 };
  assign(a, b, c);
  expect(a).toEqual(
    expect.objectContaining({
      c: 3,
      b: 2
    })
  );
  expect(() => {
    assign(null);
  }).toThrow();

  assign(a, null);
  expect(a.a).toBe(1);
});

it('测试 hasOwn 方法', () => {
  const obj = { aaa: 111 };
  expect(hasOwn(obj, 'test')).toBe(false);
  expect(hasOwn(obj, 'aaa')).toBe(true);
});


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

  i = 0;
  forOwn(null, () => {
    i++;
  });
  expect(i).toBe(0);

  i = 0;
  const obj = Object.create(null);
  obj.a = 1;
  obj.b = 2;
  forOwn(obj, () => {
    i++;
  });
  expect(i).toBe(2);
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

it('测试 deepAssign 方法', () => {
  const a = { a: 1 };
  const b = { b: 2 };
  const c = { c: 3 };
  deepAssign(a, b, c);
  expect(a).toEqual(
    expect.objectContaining({
      a: 1,
      c: 3,
      b: 2
    })
  );

  expect(() => {
    deepAssign(null);
  }).toThrow();

  deepAssign(a, null);
  expect(a.a).toBe(1);

  const d = { a: { aa: { aaa: 1 } }, b: { bb: 2 }, arr: ['a', 'b'], arr2: [1, 2, 3] };
  const e = { a: 1, b: { bb: 1111 }, c: { cc: { ccc: 1 } }, d: { dd: 2 }, arr2: ['a', 'b'] };
  deepAssign(d, e);
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

it('测试 transform 方法', () => {
  const obj = { a: 1, b: 2 };
  const newObj = transform(obj, (newObj, value, key) => {
    newObj[key] = value + 1;
  }, {});
  expect(newObj).toEqual({
    a: 2,
    b: 3
  });

  const arr = [1, 2];
  const newArr = transform(arr, (newArr, value, key) => {
    newArr[key] = value + 1;
  }, []);
  expect(newArr).toEqual([2, 3]);
});

it('测试 uid 方法', () => {
  const a = {};
  const b = {};
  expect(uid(a)).not.toBe(uid(b));
  expect(uid(a)).toBe(uid(a));
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
