/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_13=require("./chunk-2b061e9c.js"),expandoSequence=1,expandoKey="expando9527",cache={};function nextId(){return++expandoSequence}function expandoStore(e,n,c){var o=e[expandoKey],a=cache[o||-1];if(__chunk_13.isUndefined(c))return a&&a[n];a||(e[expandoKey]=o=nextId(),a=cache[o]={}),a[n]=c}exports.expandoStore=expandoStore;
