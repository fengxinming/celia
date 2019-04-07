import html from '../prepare/html';
import removeClass from '../../src/dom/removeClass';

import forEach from '../../src/array/forEach';
import { removeClassLegacy } from '../prepare/legacy';

describe('测试 removeClass', () => {

  beforeAll(() => {
    document.body.innerHTML = html;
  });

  it('测试支持classList', () => {

    const $div = document.querySelector('.test-remove-class');
    removeClass($div, 'class2');
    expect($div.className).toBe('test-remove-class class1');

    const $div2 = document.querySelectorAll('.test-remove-class');
    removeClass($div2, 'class1 class2');
    forEach($div2, (el) => {
      expect(el.className).toBe('test-remove-class');
    });
  });

  it('测试不支持classList', () => {
    removeClassLegacy();

    const $div = document.querySelector('.test-remove-class2');
    removeClass($div, 'class2');
    expect($div.className).toBe('test-remove-class2 class1');

    const $div2 = document.querySelectorAll('.test-remove-class2');
    forEach($div2, (el) => {
      removeClass(el, 'class1 class2');
      expect(el.className).toBe('test-remove-class2');
    });

  });

  it('移除所有', () => {

    const $div = document.querySelector('.test-remove-class2');
    removeClass($div);
    expect($div.outerHTML).toBe('<div class=""></div>');

  });

});
