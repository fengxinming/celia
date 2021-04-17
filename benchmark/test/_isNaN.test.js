const isNaN2 = require('../../dist/isNaN2');

const { isNaN } = Number;

// 测试 max
module.exports = {
  '【Number.isNaN】': function () {
    isNaN('100F');
    isNaN(NaN);
    isNaN('NaN');
  },

  '【isNaN】': function () {
    isNaN2('100F');
    isNaN2(NaN);
    isNaN2('NaN');
  }
};
