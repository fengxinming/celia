/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_1 = require('./chunk-f7046d4d.js');
var isNil = require('./isNil.js');
var isFunction = require('./isFunction.js');
var isObject = require('./isObject.js');

var RAW_DATA_TYPES = {};
'Boolean,Number,String,Function,Array,Date,RegExp,Object,Error,Symbol'.split(',').forEach(function (name) {
  RAW_DATA_TYPES[("[object " + name + "]")] = name.toLowerCase();
});

function type (value) {
  if (isNil(value)) {
    return value + '';
  }
  return (isObject(value) || isFunction(value)) ? (RAW_DATA_TYPES[__chunk_1.getRawType(value)] || 'object') : typeof value;
}

module.exports = type;
