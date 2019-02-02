/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var isUndefined = require('./isUndefined.js');
var __chunk_7 = require('./chunk-0e93d1f3.js');
var clone = require('./clone.js');
var parse = require('./parse.js');
var startOf = require('./startOf.js');
var endOf = require('./endOf.js');

function compare (date, input, units, type) {
  input = parse.default(input);
  units = __chunk_7.normalizeUnit(!isUndefined.default(units) ? units : __chunk_7.MILLISECOND);
  if (units === __chunk_7.MILLISECOND) {
    switch (type) {
      case 'before':
        return +date < +input;
      case 'after':
        return +date > +input;
      default:
        return +date === +input;
    }
  } else {
    var inputMs = +input;
    switch (type) {
      case 'before':
        return +endOf.default(clone.default(date), units) < inputMs;
      case 'after':
        return +startOf.default(clone.default(date), units) > inputMs;
      default:
        return +startOf.default(clone.default(date), units) <= inputMs && inputMs <= +endOf.default(clone.default(date), units);
    }
  }
}

exports.compare = compare;
