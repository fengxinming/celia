import classnames from '../src/index';

it('测试 classnames 方法', () => {
  expect(classnames({ class1: false, class2: true })).toBe('class2');
  expect(classnames([{ class2: true }, [], null, '', 'class3', 'class4'])).toBe('class2 class3 class4');
  expect(classnames(['class3', 'class4'])).toBe('class3 class4');
  expect(classnames('class5')).toBe('class5');
  expect(classnames([])).toBe('');
});

it('测试 classnames.concat 方法', () => {
  expect(classnames.concat({ class1: false, class2: true }, '', true, ['class3', 'class4'], 'class5')).toBe('class2 true class3 class4 class5');
});
