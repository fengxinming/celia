/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_2=require("./chunk-b17e0ab6.js"),__chunk_5=require("./chunk-24292794.js"),__chunk_8=require("./chunk-2723b541.js"),__chunk_11=require("./chunk-b84b8875.js");function isFunction(n){return"function"==typeof n}function isNumber(n){return"number"==typeof n}function isArrayLike(n){return!__chunk_8.isNil(n)&&isNumber(n.length)&&!isFunction(n)}function fragmentForList(n){var e=document.createDocumentFragment();return __chunk_5.forEach(n,function(n){1===n.nodeType?e.appendChild(n):!__chunk_2.isString(n)&&isArrayLike(n)?__chunk_5.forEach(n,function(n){e.appendChild(n)}):__chunk_11.fragment(n,null,function(n){e.appendChild(n)})}),e}function domManip(n,e,r,u){if(n){r&&document.body[r]&&(u=function(n,e){n[r](e)});var i=fragmentForList(e),t=n.length;if(t){for(var c=t-1,o=0,_=c;o<_;o++)u(n[o],i.cloneNode(!0));u(n[c],i)}else u(n,i)}return n}exports.domManip=domManip;
