/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_3=require("./chunk-d2dca2a0.js"),clone=require("./clone.js"),parse=require("./parse.js"),startOf=require("./startOf.js"),endOf=require("./endOf.js");function compare(e,r,t,s){if(r=parse(r),"ms"===(t=__chunk_3.normalizeUnit(t,"ms")))switch(s){case"before":return+e<+r;case"after":return+r<+e;default:return+e==+r}else{var a=+r;switch(s){case"before":return+endOf(clone(e),t)<a;case"after":return+startOf(clone(e),t)>a;default:return+startOf(clone(e),t)<=a&&a<=+endOf(clone(e),t)}}}exports.compare=compare;
