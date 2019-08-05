import each from '../src/each';

describe('测试 each 方法', () => {

  it('遍历空对象', () => {
    let i = 0;
    each(null, () => i++);
    expect(i).toBe(0);
  });

  it('遍历数组', () => {
    let i = 0;
    each([1, 2], () => i++);
    expect(i).toBe(2);

    i = 0;
    each([1, 2], () => {
      i++;
      if (i === 1) {
        return false;
      }
    });
    expect(i).toBe(1);
  });

  it('遍历数字', () => {
    let i = 0;
    each(10, () => i++);
    expect(i).toBe(10);

    i = 0;
    each(10, () => {
      i++;
      if (i === 2) {
        return false;
      }
    });
    expect(i).toBe(2);

  });

  it('遍历类数组', () => {
    let i = 0;
    each({
      0: 1,
      1: 2,
      length: 2
    }, () => i++);
    expect(i).toBe(2);

  });

  it('遍历对象', () => {
    let i = 0;
    each({
      a: 'a',
      b: 'b'
    }, () => i++);
    expect(i).toBe(2);

    i = 0;
    each({
      a: 'a',
      b: 'b'
    }, () => {
      return false;
    });
    expect(i).toBe(0);
  });

});
