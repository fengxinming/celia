import forIn from '../src/forIn';

it('测试 forIn 方法', () => {
  forIn(null, () => { });
  forIn({ 1: 1, 2: 2 }, () => { });
  forIn({ 1: 1, 2: 2 }, () => { }, {});
});
