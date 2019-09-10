import forEach from '../src/_forEach';
import forNumber from '../src/_forNumber';
import _isInteger from '../src/_isInteger';
import assign from '../src/_assign';

describe('测试私有方法', () => {

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

  it('测试 _forEach 方法', () => {
    const arr = [1, 2, 3];
    let count = 0;
    forEach(arr, () => {
      count++;
    });
    expect(count).toBe(3);

    count = 0;
    forEach(arr, () => {
      if (count === 2) {
        return false;
      }
      count++;
    });
    expect(count).toBe(2);
  });

  it('测试 _forNumber 方法', () => {

    let i = 0;
    forNumber(5, () => {
      i++;
    });
    expect(i).toBe(5);

    i = 0;
    forNumber(5, () => {
      if (i === 2) {
        return false;
      }
      i++;
    });
    expect(i).toBe(2);

  });

  const { isInteger } = Number;
  it('测试 _isInteger 方法', () => {
    // 兼容版本
    expect(_isInteger(2)).toBe(isInteger(2));
    expect(_isInteger(-2)).toBe(isInteger(-2));
    expect(_isInteger(1.23)).toBe(isInteger(1.23));
    expect(_isInteger(-1.23)).toBe(isInteger(-1.23));
    expect(_isInteger(null)).toBe(isInteger(null));
    expect(_isInteger(undefined)).toBe(isInteger(undefined));
    expect(_isInteger('2')).toBe(isInteger('2'));
    expect(_isInteger(Infinity)).toBe(isInteger(Infinity));
  });

});

// describe('测试首层函数', () => {

// });
