/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

function isValid (date) {
  return date.toString() !== 'Invalid Date';
}

exports.default = isValid;
