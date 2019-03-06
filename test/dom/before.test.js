import html from '../prepare/html';
import before from '../../src/dom/before';

it('测试 before', () => {
  document.body.innerHTML = html;
  const $div = document.querySelector('.test-after');

  before($div.querySelector('.after'), '<div>123</div>');
  expect($div.innerHTML).toEqual(
    expect.stringContaining('<div>123</div>')
  );

  const dom = document.createElement('div');
  dom.innerHTML = '456';
  before($div.querySelector('.after'), dom);
  expect($div.innerHTML).toEqual(
    expect.stringContaining('<div>456</div>')
  );

  const dom2 = document.createElement('div');
  dom2.innerHTML = '789';
  before($div.querySelectorAll('.after'), dom2);
  expect($div.innerHTML).toEqual(
    expect.stringContaining('<div>789</div>')
  );
});
