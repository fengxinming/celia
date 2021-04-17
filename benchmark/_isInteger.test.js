const _isInteger = require('../../dist/_isInteger');

const { isInteger } = Number;

// 测试 max
module.exports = {
  '【Number.isInteger】': function () {
    isInteger(2);
    isInteger(-2);
    isInteger(1.23);
    isInteger(-1.23);
    isInteger(null);
    isInteger(undefined);
    isInteger('2');
    isInteger(Infinity);
  },

  '【_isInteger】': function () {
    _isInteger(2);
    _isInteger(-2);
    _isInteger(1.23);
    _isInteger(-1.23);
    _isInteger(null);
    _isInteger(undefined);
    _isInteger('2');
    _isInteger(Infinity);
  },
};
