const isDate = require('../dist/isDate');

const { toString } = Object.prototype;

function isDate2(value) {
  return toString.call(value) === '[object RegExp]';
}
// 测试 max
module.exports = {
  '【isDate#toString】': function () {
    isDate2(new Date());
    isDate2({});
  },

  '【isDate#instanceof】': function () {
    isDate(new Date());
    isDate({});
  }
};
