/*!
 * celia.js v2.0.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var NotImplementedError=function(e){function t(t){var r=t+"() is not implemented";e.call(this,r),this.name="NotImplementedError",this.code="ERR_METHOD_NOT_IMPLEMENTED"}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t}(Error);module.exports=NotImplementedError;
