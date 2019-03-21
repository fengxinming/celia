import forSlice from '../src/forSlice';

it('测试 forEach 方法', () => {
  forSlice(null, () => { });
  forSlice([1], 0, () => { });
  forSlice([1, 2, 3, 4], 0, 2, () => { });
  forSlice([1, 2, 3, 4], 0, 0, () => { });
  forSlice([1, 2, 3, 4], null, 0, () => { });
});
