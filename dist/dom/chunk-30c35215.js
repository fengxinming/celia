/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_6=require("./chunk-0a7dfc22.js"),__chunk_13=require("./chunk-132a4ff9.js"),__chunk_15=require("./chunk-1a25c08c.js"),__chunk_16=require("./chunk-b8c23555.js");function showHide(n,c){return __chunk_6.checkDom(n,function(n){var e=n.style.display||"",_=__chunk_16.expandoStore(n,"display");(__chunk_13.isUndefined(_)&&(__chunk_16.expandoStore(n,"display",e),_=e),c)?e?"none"===e&&(n.style.display="none"===_?"":_):"none"===__chunk_15.curCSS(n,"display")&&(n.style.display="block"):n.style.display="none"}),n}exports.showHide=showHide;
