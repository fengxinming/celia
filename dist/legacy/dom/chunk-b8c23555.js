/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_13=require("./chunk-132a4ff9.js"),expandoSequence=1,expandoKey="expando9527",cache={};function nextId(){return++expandoSequence}function expandoStore(e,n,a){var o=e[expandoKey],c=cache[o||-1];if(__chunk_13.isUndefined(a))return c&&c[n];c||(e[expandoKey]=o=nextId(),c=cache[o]={}),c[n]=a}exports.expandoStore=expandoStore;
