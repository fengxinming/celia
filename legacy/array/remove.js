/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var inArray=require("./inArray.js");function remove(r,e){var i=inArray(e,r);return 0<=i&&r.splice(i,1),e}module.exports=remove;
