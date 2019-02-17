/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

function toArray (arrLike) {
  return arrLike && [].concat( arrLike );
  // return arrLike && slice.call(arrLike, 0);
}

module.exports = toArray;
