/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var isNil = require('./isNil.js');
var isFunction = require('./isFunction.js');
require('./isLeapYear.js');
var __chunk_2 = require('./chunk-63c0b947.js');
var isObject = require('./isObject.js');

var RAW_DATA_TYPES = {};
'Boolean,Number,String,Function,Array,Date,RegExp,Object,Error,Symbol'.split(',').forEach(function (name) {
  RAW_DATA_TYPES[("[object " + name + "]")] = name.toLowerCase();
});

function type (value) {
  if (isNil.default(value)) {
    return value + '';
  }
  return (isObject.default(value) || isFunction.default(value)) ? (RAW_DATA_TYPES[__chunk_2.getRawType(value)] || 'object') : typeof value;
}

exports.default = type;
