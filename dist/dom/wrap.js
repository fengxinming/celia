/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-ee0a2fc7.js");var __chunk_4=require("./chunk-4e3c1e04.js");require("./chunk-24292794.js");var __chunk_6=require("./chunk-ccb7a15b.js");require("./chunk-45cbd768.js"),require("./chunk-674f953c.js");var __chunk_11=require("./chunk-b84b8875.js");require("./chunk-8dd5cece.js"),console.log("firstElementChildSupported",__chunk_4.firstElementChildSupported);var firstElementChild=__chunk_4.firstElementChildSupported?function(e){return e.firstElementChild}:function(e){var r=e.firstChild;return r&&1===r.nodeType?r:null};function wrap(i,t){return t&&(__chunk_11.fragment(t,null,function(e){return t=e,!1}),__chunk_6.checkDom(i,function(e,r){var n,u=r?t.cloneNode(!0):t,c=e.parentNode;for(c&&c.replaceChild(u,i);n=firstElementChild(e);)u=n;u.appendChild(e)})),i}module.exports=wrap;
