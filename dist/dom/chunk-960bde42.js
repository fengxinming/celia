/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_4=require("./chunk-c4f6194a.js");function siblings(i,s,n){if(s in i)for(;i=i[s];)n(i);else for(s=__chunk_4.siblingHooker[s];(i=i[s])&&1===i.nodeType;)n(i)}exports.siblings=siblings;
