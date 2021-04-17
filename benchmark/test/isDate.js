const isDate = require('../../dist/isDate');

const { toString } = Object.prototype;

function _isDate(value) {
  return toString.call(value) === '[object RegExp]';
}
// 测试 max
module.exports = {
  '【isDate#toString】': function () {
    _isDate(new Date());
    _isDate({});
  },

  '【isDate#instanceof】': function () {
    isDate(new Date());
    isDate({});
  },
};
