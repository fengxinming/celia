import html from '../prepare/html';
import wrap from '../../src/dom/wrap';

it('测试 wrap', () => {
  document.body.innerHTML = html;
  let $div = document.querySelector('.test-append');

  wrap($div, '<div class="parent"></div>');
  expect($div.parentNode.outerHTML).toBe('<div class="parent"><div class="test-append"></div></div>');
});
