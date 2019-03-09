/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_4=require("./chunk-4e3c1e04.js");function siblings(i,s,e){if(s in i)for(;i=i[s];)e(i);else for(s=__chunk_4.siblingHooker[s];(i=i[s])&&1===i.nodeType;)e(i)}exports.siblings=siblings;
