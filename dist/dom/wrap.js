/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-59a4e7e2.js");var __chunk_4=require("./chunk-c4f6194a.js");require("./chunk-479d732e.js");var __chunk_6=require("./chunk-0a7dfc22.js");require("./chunk-b5694aee.js"),require("./chunk-25fdb641.js");var __chunk_11=require("./chunk-7eb269d7.js");require("./chunk-f630e37c.js");var firstElementChild=__chunk_4.firstElementChildSupported?function(e){return e.firstElementChild}:function(e){var r=e.firstChild;return r&&1===r.nodeType?r:null};function wrap(i,t){return t&&(__chunk_11.fragment(t,null,function(e){return t=e,!1}),__chunk_6.checkDom(i,function(e,r){var n,u=r?t.cloneNode(!0):t,c=e.parentNode;for(c&&c.replaceChild(u,i);n=firstElementChild(e);)u=n;u.appendChild(e)})),i}module.exports=wrap;
