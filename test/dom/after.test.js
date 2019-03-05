import html from '../prepare/html';
import after from '../../src/dom/after';

it('测试 after', () => {
  document.body.innerHTML = html;
  const $div = document.querySelector('.test-after');

  after($div.querySelector('.after'), '<div>123</div>');
  expect($div.innerHTML).toEqual(
    expect.stringContaining('<div>123</div>')
  );

  const dom = document.createElement('div');
  dom.innerHTML = '456';
  after($div.querySelector('.after'), dom);
  expect($div.innerHTML).toEqual(
    expect.stringContaining('<div>456</div>')
  );

  const dom2 = document.createElement('div');
  dom2.innerHTML = '789';
  after($div.querySelectorAll('.after'), dom2);
  expect($div.innerHTML).toEqual(
    expect.stringContaining('<div>789</div>')
  );
});
