/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-e37cb146.js");var __chunk_4=require("./chunk-619deb81.js");require("./chunk-7ad506f8.js");var __chunk_6=require("./chunk-cf5dc476.js");require("./chunk-56b022d1.js"),require("./chunk-f2d50846.js");var __chunk_11=require("./chunk-8a200498.js");require("./chunk-baef53ec.js"),console.log("firstElementChildSupported",__chunk_4.firstElementChildSupported);var firstElementChild=__chunk_4.firstElementChildSupported?function(e){return e.firstElementChild}:function(e){var r=e.firstChild;return r&&1===r.nodeType?r:null};function wrap(i,t){return t&&(__chunk_11.fragment(t,null,function(e){return t=e,!1}),__chunk_6.checkDom(i,function(e,r){var n,u=r?t.cloneNode(!0):t,c=e.parentNode;for(c&&c.replaceChild(u,i);n=firstElementChild(e);)u=n;u.appendChild(e)})),i}module.exports=wrap;
