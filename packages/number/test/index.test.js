import forNumber from '../src/forNumber';

it('测试 forNumber 方法', () => {

  let i = 0;
  forNumber(5, () => {
    i++;
  });
  expect(i).toBe(5);

  i = 0;
  forNumber(5, () => {
    if (i === 2) {
      return false;
    }
    i++;
  });
  expect(i).toBe(2);


  forNumber(null, () => {
    if (i === 2) {
      return false;
    }
    i++;
  });
  expect(i).toBe(2);
});