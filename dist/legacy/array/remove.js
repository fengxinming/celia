/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var inArray=require("./inArray.js"),removeAt=require("./removeAt.js");function remove(r,e){var o=inArray(e,r);return 0<=o?(removeAt(r,o),e):null}module.exports=remove;
