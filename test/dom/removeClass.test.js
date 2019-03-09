import html from '../prepare/html';
import addClass from '../../src/dom/addClass';
import removeClass from '../../src/dom/removeClass';
import forEach from '../../src/forEach';

it('测试 removeClass', () => {
  document.body.innerHTML = html;

  const $div = document.querySelector('.test-after');
  addClass($div, 'class2');
  expect($div.className).toBe('test-after class2');

  const $div2 = document.querySelectorAll('.test-after');
  addClass($div2, 'class1 class2');
  forEach($div2, (el) => {
    expect(el.className).toEqual(
      expect.stringContaining('class1'),
      expect.stringContaining('class2')
    );
  });

  removeClass($div, 'class2 class1');
  expect($div.outerHTML).toBe('<div class="test-after"><div class="after"></div><div class="after"></div></div>');
});
