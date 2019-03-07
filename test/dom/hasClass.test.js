import html from '../prepare/html';
import hasClass from '../../src/dom/hasClass';

it('测试 hasClass', () => {
  document.body.innerHTML = html;
  let $div = document.querySelector('.test-empty');

  expect(hasClass($div, 'test-empty')).toBe(true);
  expect(hasClass($div, 'test-after')).toBe(false);
});
