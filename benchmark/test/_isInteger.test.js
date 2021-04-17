const isInteger2 = require('../../dist/isInteger2');

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

  '【isInteger2】': function () {
    isInteger2(2);
    isInteger2(-2);
    isInteger2(1.23);
    isInteger2(-1.23);
    isInteger2(null);
    isInteger2(undefined);
    isInteger2('2');
    isInteger2(Infinity);
  }
};
