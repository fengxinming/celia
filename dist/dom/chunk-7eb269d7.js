/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_1=require("./chunk-59a4e7e2.js"),__chunk_4=require("./chunk-c4f6194a.js"),__chunk_10=require("./chunk-25fdb641.js"),__chunk_12=require("./chunk-f630e37c.js");function forIn(e,n,_){return e&&__chunk_10.forIn(e,n,_)}function fragment(e,n,_){var t=e.match(__chunk_1.singleTagRE);if(t){var c=document.createElement(t[1]);forIn(n,function(e,n){c.setAttribute(n,e)}),_(c)}else __chunk_1.fragmentRE.test(e)?(__chunk_4.testEl.innerHTML=e,__chunk_12.childNodes(__chunk_4.testEl,_)):_(document.createTextNode(e))}exports.fragment=fragment;
