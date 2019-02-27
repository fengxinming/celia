/*!
 * celia.js v2.1.0-0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_3=require("./chunk-1af9fb56.js"),__chunk_4=require("./chunk-55ad1914.js"),clone=require("./clone.js"),__chunk_7=require("./chunk-d01286bf.js"),parse=require("./parse.js"),startOf=require("./startOf.js"),endOf=require("./endOf.js");function compare(e,r,n,c){if(r=parse(r),(n=__chunk_4.normalizeUnit(__chunk_7.isUndefined(n)?__chunk_3.MILLISECOND:n))===__chunk_3.MILLISECOND)switch(c){case"before":return+e<+r;case"after":return+r<+e;default:return+e==+r}else{var u=+r;switch(c){case"before":return+endOf(clone(e),n)<u;case"after":return+startOf(clone(e),n)>u;default:return+startOf(clone(e),n)<=u&&u<=+endOf(clone(e),n)}}}exports.compare=compare;
