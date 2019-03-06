import html from '../prepare/html';
import css from '../../src/dom/css';

it('测试 css', () => {
  document.body.innerHTML = html;
  const $div = document.querySelector('.test-after > .after');

  css($div, 'display', 'none');
  expect($div.outerHTML).toBe('<div class="after" style="display: none;"></div>');

  const display = css($div, 'display');
  expect(display).toBe('none');

  expect(css(null, 'display')).toBe('');
});
