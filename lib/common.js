'use strict';

const exps = require('../_internal/exp');

const {
  EXP_MS_PREFIX,
  EXP_DASH_ALPHA
} = exps;

function valueFn(value) {
  return () => {
    return value;
  };
}

function camelCase(value) {
  return value.replace(EXP_DASH_ALPHA, (all, letter) => {
    return letter.toUpperCase();
  });
}

module.exports = {
  valueFn,
  camelCase
};
