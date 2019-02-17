/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_3 = require('./chunk-e81b0eeb.js');
var clone = require('./clone.js');
var __chunk_6 = require('./chunk-404b929f.js');
var parse = require('./parse.js');
var startOf = require('./startOf.js');
var endOf = require('./endOf.js');

function compare (date, input, units, type) {
  input = parse(input);
  units = __chunk_3.normalizeUnit(!__chunk_6.isUndefined(units) ? units : __chunk_3.MILLISECOND);
  if (units === __chunk_3.MILLISECOND) {
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
        return +endOf(clone(date), units) < inputMs;
      case 'after':
        return +startOf(clone(date), units) > inputMs;
      default:
        return +startOf(clone(date), units) <= inputMs && inputMs <= +endOf(clone(date), units);
    }
  }
}

exports.compare = compare;
