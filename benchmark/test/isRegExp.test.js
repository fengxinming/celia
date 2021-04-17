const isRegExp = require('../../dist/isRegExp');

const { toString } = Object.prototype;

function _isRegExp(value) {
  return toString.call(value) === '[object RegExp]';
}
// 测试 max
module.exports = {
  '【isRegExp#toString】': function () {
    _isRegExp(null);
    _isRegExp(undefined);
    _isRegExp({});
    _isRegExp(Object.create(null));
    _isRegExp(/\d+/);
  },

  '【isRegExp#instanceof】': function () {
    isRegExp(null);
    isRegExp(undefined);
    isRegExp({});
    isRegExp(Object.create(null));
    isRegExp(/\d+/);
  },
};
