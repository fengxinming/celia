import forNumber from '../src/_forNumber';

it('测试 forNumber 方法', () => {

  let i = 0;
  forNumber(5, () => {
    i++;
  });
  expect(i).toBe(5);

});
