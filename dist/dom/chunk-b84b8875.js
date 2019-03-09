/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_1=require("./chunk-ee0a2fc7.js"),__chunk_4=require("./chunk-4e3c1e04.js"),__chunk_10=require("./chunk-674f953c.js"),__chunk_12=require("./chunk-8dd5cece.js");function forIn(e,n,_){return e&&__chunk_10.forIn(e,n,_)}function fragment(e,n,_){var c=e.match(__chunk_1.singleTagRE);if(c){var t=document.createElement(c[1]);forIn(n,function(e,n){t.setAttribute(n,e)}),_(t)}else __chunk_1.fragmentRE.test(e)?(__chunk_4.testEl.innerHTML=e,__chunk_12.childNodes(__chunk_4.testEl,_)):_(document.createTextNode(e))}exports.fragment=fragment;
