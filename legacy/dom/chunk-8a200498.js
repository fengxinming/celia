/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_1=require("./chunk-e37cb146.js"),__chunk_4=require("./chunk-619deb81.js"),__chunk_10=require("./chunk-f2d50846.js"),__chunk_12=require("./chunk-baef53ec.js");function forIn(e,n,_){return e&&__chunk_10.forIn(e,n,_)}function fragment(e,n,_){var t=e.match(__chunk_1.singleTagRE);if(t){var c=document.createElement(t[1]);forIn(n,function(e,n){c.setAttribute(n,e)}),_(c)}else __chunk_1.fragmentRE.test(e)?(__chunk_4.testEl.innerHTML=e,__chunk_12.childNodes(__chunk_4.testEl,_)):_(document.createTextNode(e))}exports.fragment=fragment;
