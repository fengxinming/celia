import content from '../prepare/html';
import next from '../../src/dom/next';

it('测试 next', () => {
  document.body.innerHTML = content;
  let $div = document.querySelector('.after');

  expect(next($div)[0].outerHTML).toBe('<div class="after"></div>');
});
