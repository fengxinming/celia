/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_3=require("./chunk-e81b0eeb.js"),clone=require("./clone.js"),__chunk_6=require("./chunk-404b929f.js"),parse=require("./parse.js"),startOf=require("./startOf.js"),endOf=require("./endOf.js");function compare(e,r,n,c){if(r=parse(r),(n=__chunk_3.normalizeUnit(__chunk_6.isUndefined(n)?__chunk_3.MILLISECOND:n))===__chunk_3.MILLISECOND)switch(c){case"before":return+e<+r;case"after":return+r<+e;default:return+e==+r}else{var t=+r;switch(c){case"before":return+endOf(clone(e),n)<t;case"after":return+startOf(clone(e),n)>t;default:return+startOf(clone(e),n)<=t&&t<=+endOf(clone(e),n)}}}exports.compare=compare;
