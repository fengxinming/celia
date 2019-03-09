/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_6=require("./chunk-ccb7a15b.js"),__chunk_13=require("./chunk-2b061e9c.js"),__chunk_15=require("./chunk-fde033f8.js"),__chunk_16=require("./chunk-6597c236.js");function showHide(e,c){return __chunk_6.checkDom(e,function(e){var n=e.style.display||"",_=__chunk_16.expandoStore(e,"display");(__chunk_13.isUndefined(_)&&(__chunk_16.expandoStore(e,"display",n),_=n),c)?n?"none"===n&&(e.style.display="none"===_?"":_):"none"===__chunk_15.curCSS(e,"display")&&(e.style.display="block"):e.style.display="none"}),e}exports.showHide=showHide;
