const _isNaN = require('../../dist/_isNaN');

const { isNaN } = Number;

// 测试 max
module.exports = {
  '【Number.isNaN】': function () {
    isNaN('100F');
    isNaN(NaN);
    isNaN('NaN');
  },

  '【isNaN】': function () {
    _isNaN('100F');
    _isNaN(NaN);
    _isNaN('NaN');
  },
};
