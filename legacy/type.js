/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_1=require("./chunk-bdd0d3b2.js"),isNil=require("./isNil.js"),isFunction=require("./isFunction.js"),isObject=require("./isObject.js"),RAW_DATA_TYPES={};function type(e){return isNil(e)?e+"":isObject(e)||isFunction(e)?RAW_DATA_TYPES[__chunk_1.getRawType(e)]||"object":typeof e}"Boolean,Number,String,Function,Array,Date,RegExp,Object,Error,Symbol".split(",").forEach(function(e){RAW_DATA_TYPES["[object "+e+"]"]=e.toLowerCase()}),module.exports=type;
