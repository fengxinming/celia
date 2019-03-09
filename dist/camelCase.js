/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var DASH_ALPHA_REGEX=/-([a-z])/g;function camelCase(e){return e.replace(DASH_ALPHA_REGEX,function(e,r){return r.toUpperCase()})}module.exports=camelCase;
