/*!
 * celia.js v2.0.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";function isUndefined(e){return void 0===e}var expandoSequence=1,expandoKey="expando9527",cache={};function nextId(){return++expandoSequence}function expandoStore(e,n,d){var o=e[expandoKey],t=cache[o||-1];if(isUndefined(d))return t&&t[n];t||(e[expandoKey]=o=nextId(),t=cache[o]={}),t[n]=d}exports.expandoStore=expandoStore,exports.isUndefined=isUndefined;
