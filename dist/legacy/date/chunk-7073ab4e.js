/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_3=require("./chunk-6fce3905.js"),clone=require("./clone.js"),parse=require("./parse.js"),startOf=require("./startOf.js"),endOf=require("./endOf.js");function compare(e,r,t,s){if(r=parse(r),"ms"===(t=__chunk_3.normalizeUnit(t,"ms")))switch(s){case"before":return+e<+r;case"after":return+r<+e;default:return+e==+r}else{var n=+r;switch(s){case"before":return+endOf(clone(e),t)<n;case"after":return+startOf(clone(e),t)>n;default:return+startOf(clone(e),t)<=n&&n<=+endOf(clone(e),t)}}}exports.compare=compare;
