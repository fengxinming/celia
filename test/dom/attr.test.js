import html from '../prepare/html';
import attr from '../../src/dom/attr';
import forEach from '../../src/forEach';

it('测试 attr', () => {
  document.body.innerHTML = html;

  const $div = document.querySelector('.test-attr');
  attr($div, 'name', 'myname');
  expect($div.outerHTML).toBe('<div class="test-attr" name="myname"></div>');

  expect(attr($div, 'name')).toBe('myname');

  const $div2 = document.querySelectorAll('.test-attr');
  forEach($div2, (el) => {
    expect($div.outerHTML).toBe('<div class="test-attr" name="myname"></div>');
  });
});
