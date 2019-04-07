import html from '../prepare/html';
import addClass from '../../src/dom/addClass';
import forEach from '../../src/array/forEach';
import { addClassLegacy } from '../prepare/legacy';

describe('测试 addClass', () => {

  beforeAll(() => {
    document.body.innerHTML = html;
  });

  it('测试支持classList', () => {

    const $div = document.querySelector('.test-after');
    addClass($div, 'class2');
    expect($div.className).toBe('test-after class2');

    const $div2 = document.querySelectorAll('.test-after');
    addClass($div2, 'class1 class2');
    forEach($div2, (el) => {
      expect(el.className).toEqual(
        expect.stringMatching(/class1|class2/)
      );
    });
  });

  it('测试不支持classList', () => {
    addClassLegacy();

    const $div = document.querySelector('.test-after2');
    addClass($div, 'class2');
    expect($div.className).toBe('test-after2 class2');

    addClass($div, 'class1');
    expect($div.className).toBe('test-after2 class2 class1');

    const $div2 = document.querySelectorAll('.test-after2');
    forEach($div2, (el) => {
      addClass(el, 'class1 class2');
      expect(el.className).toEqual(
        expect.stringMatching(/class1|class2/)
      );
    });
  });

});
