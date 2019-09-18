window.ydoc_plugin_search_json = {
  "Guide": [
    {
      "title": "celia",
      "content": "Note:  A modern JavaScript utility library delivering modularity, performance, and extras.\n\n",
      "url": "/guide/index.html",
      "children": [
        {
          "title": "Installation",
          "url": "/guide/index.html#installation",
          "content": "Installation"
        },
        {
          "title": "In a browser",
          "url": "/guide/index.html#installation-in-a-browser",
          "content": "In a browser\n  // window.celia\n  celia.each\n  celia.isArrayLike\n  celia.isAsyncFunction\n  celia.isDate\n  celia.isFalsy\n  celia.looseEqual\n  celia.sleep\n  // ...\n  // ...\n\n\n"
        },
        {
          "title": "Using npm",
          "url": "/guide/index.html#installation-using-npm",
          "content": "Using npmnpm install celia --save// es6\nimport { assign, each, getUid, hasOwn, isArrayLike, isUndefined, isWindow, looseEqual, map, noop, sleep, toString, type } from 'celia');\n\n// modularity\nimport each from 'celia/each';\nimport isArrayLike from 'celia/isArrayLike';\nimport isAsyncFunction from 'celia/isAsyncFunction';\nimport isDate from 'celia/isDate';\nimport isFalsy from 'celia/isFalsy';\nimport looseEqual from 'celia/looseEqual';\nimport sleep from 'celia/sleep';\n// ...\n// ...\n\n// node\nconst { assign, each, getUid, hasOwn, isArrayLike, isUndefined, isWindow, looseEqual, map, noop, sleep, toString, type } = require('celia');\n// or\nconst each = require('celia/each');\nconst isArrayLike = require('celia/isArrayLike');\nconst isAsyncFunction = require('celia/isAsyncFunction');\nconst isDate = require('celia/isDate');\nconst isFalsy = require('celia/isFalsy');\nconst looseEqual = require('celia/looseEqual');\nconst sleep = require('celia/sleep');\n// ...\n// ...\n\n"
        }
      ]
    }
  ],
  "API": [
    {
      "title": "API",
      "content": "",
      "url": "/api/index.html",
      "children": [
        {
          "title": "Lang Methods",
          "url": "/api/index.html#lang-methods",
          "content": "Lang Methods"
        },
        {
          "title": "assert",
          "url": "/api/index.html#lang-methods-assert",
          "content": "assert\nassert(condition, msg)\n\ncondition \nmsg  error message\n\n\n\nThrows\n\n throws Error if condition is false\n\n\nassert(1 !== 1, 'assertion error');// => throw Error: assertion error\n\n"
        },
        {
          "title": "getEasyHash",
          "url": "/api/index.html#lang-methods-geteasyhash",
          "content": "getEasyHash\ngetEasyHash(value)\n\nvalue'`\n\n\n\nReturns\n\n returns an easy hash value\n\n\ngetEasyHash('abc')// => 'sabc'\n\ngetEasyHash(1)\n// => 'n1'\n\ngetEasyHash({})\n// => 'o1'\n\n"
        },
        {
          "title": "isAbsoluteURL",
          "url": "/api/index.html#lang-methods-isabsoluteurl",
          "content": "isAbsoluteURL\nisAbsoluteURL(url)\n\nurl  a request url\n\n\n\nReturns\n\n returns true if the url is a absolute request url\n\n\nisAbsoluteURL('/src/isAbsoluteURL.js'))// => false\n  \nisAbsoluteURL('https://github.com'))\n// => true\n\n"
        },
        {
          "title": "isArrayLike",
          "url": "/api/index.html#lang-methods-isarraylike",
          "content": "isArrayLike\nisArrayLike(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nisArrayLike('123')// => true\n\nisArrayLike(() => { })\n// => false\n\nisArrayLike([])\n// => true\n\nisArrayLike([1, 2, 3])\n// => true\n\nisArrayLike({ 0: 1, length: 1 })\n// => true\n\n"
        },
        {
          "title": "isAsyncFunction",
          "url": "/api/index.html#lang-methods-isasyncfunction",
          "content": "isAsyncFunction\nisAsyncFunction(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nisAsyncFunction(async () => { })// => true\n\nisAsyncFunction(() => { })\n// => false\n\n"
        },
        {
          "title": "isBoolean",
          "url": "/api/index.html#lang-methods-isboolean",
          "content": "isBoolean\nisBoolean(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nisBoolean(() => { })// => false\n\nisBoolean(true)\n// => true\n\n"
        },
        {
          "title": "isDate",
          "url": "/api/index.html#lang-methods-isdate",
          "content": "isDate\nisDate(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nisDate(new Date())// => true\n  \nisDate({})\n// => false\n\n"
        },
        {
          "title": "isFalsy",
          "url": "/api/index.html#lang-methods-isfalsy",
          "content": "isFalsy\nisFalsy(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nisFalsy(false)// => true\n\nisFalsy(null)\n// => true\n\nisFalsy(undefined)\n// => true\n\nisFalsy(0)\n// => true\n\nisFalsy(NaN)\n// => true\n\nisFalsy('')\n// => true\n\nisFalsy({})\n// => false\n\n"
        },
        {
          "title": "isFunction",
          "url": "/api/index.html#lang-methods-isfunction",
          "content": "isFunction\nisFunction(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nisFunction(async () => { })// => true\n\nisFunction(() => { })\n// => true\n\nisFunction({})\n// => false\n\n"
        },
        {
          "title": "isInteger",
          "url": "/api/index.html#lang-methods-isinteger",
          "content": "isInteger\nisInteger(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nisInteger(2)// => true\n\nisInteger(-2)\n// => true\n\nisInteger(1.23)\n// => false\n\nisInteger(-1.23)\n// => false\n\nisInteger(null)\n// => false\n\nisInteger(undefined)\n// => false\n\nisInteger('2'));\n// => false\n\nisInteger(Infinity)\n// => false\n\n"
        },
        {
          "title": "isNil",
          "url": "/api/index.html#lang-methods-isnil",
          "content": "isNil\nisNil(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nisNil(null)// => true\n\nisNil(undefined)\n// => true\n\nisNil({})\n// => false\n\n"
        },
        {
          "title": "isNumber",
          "url": "/api/index.html#lang-methods-isnumber",
          "content": "isNumber\nisNumber(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nisNumber(1)// => true\n\nisNumber(undefined)\n// => false\n\nisNumber({})\n// => false\n\n"
        },
        {
          "title": "isObject",
          "url": "/api/index.html#lang-methods-isobject",
          "content": "isObject\nisObject(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nisObject(1)// => false\n\nisObject(undefined)\n// => false\n\nisObject({})\n// => true\n\n"
        },
        {
          "title": "isPlainObject",
          "url": "/api/index.html#lang-methods-isplainobject",
          "content": "isPlainObject\nisPlainObject(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nisPlainObject(new Date())// => false\n\nisPlainObject({})\n// => true\n\n"
        },
        {
          "title": "isPromiseLike",
          "url": "/api/index.html#lang-methods-ispromiselike",
          "content": "isPromiseLike\nisPromiseLike(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nisPromiseLike(null)// => false\n\nisPromiseLike(undefined)\n// => false\n\nisPromiseLike({})\n// => false\n\nisPromiseLike(new Promise(() => { }))\n// => true\n\nisPromiseLike({ then: () => { }, catch: () => { } })\n// => true\n\n"
        },
        {
          "title": "isRegExp",
          "url": "/api/index.html#lang-methods-isregexp",
          "content": "isRegExp\nisRegExp(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nisRegExp(null)// => false\n  \nisRegExp(undefined)\n// => false\n\nisRegExp({})\n// => false\n\nisRegExp(Object.create(null))\n// => false\n\nisRegExp(/\\d+/)\n// => true\n\n"
        },
        {
          "title": "isString",
          "url": "/api/index.html#lang-methods-isstring",
          "content": "isString\nisString(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nisString(null)// => false\n  \nisString({})\n// => false\n\nisString(1)\n// => false\n\nisString(true)\n// => false\n  \nisString('')\n// => true\n\n"
        },
        {
          "title": "isUndefined",
          "url": "/api/index.html#lang-methods-isundefined",
          "content": "isUndefined\nisUndefined(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nisUndefined(null)// => false\n\nisUndefined(undefined)\n// => true\n\n"
        },
        {
          "title": "isWindow",
          "url": "/api/index.html#lang-methods-iswindow",
          "content": "isWindow\nisWindow(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nisWindow(null)// => false\n\nisWindow(undefined)\n// => false\n\nisWindow(window)\n// => true\n\n"
        },
        {
          "title": "looseEqual",
          "url": "/api/index.html#lang-methods-looseequal",
          "content": "looseEqual\nlooseEqual(a, b)\n\na \nb  ，用于跟 a 比较\n\n\n\nReturns\n\n\n\n\nlooseEqual(null, undefined)// => false\n\nlooseEqual(null, null)\n// => true\n\nlooseEqual({ a: 1, b: 2 }, { a: 1, b: 2 })\n// => true\n\nlooseEqual([1, 2], [1, 2])\n// => true\n\nlooseEqual(/\\d+/, /\\d+/)\n// => true\n  \nlooseEqual(new Date(2019, 0, 1, 9, 9, 9), new Date(2019, 0, 1, 9, 9, 9))\n// => true\n\n"
        },
        {
          "title": "noop",
          "url": "/api/index.html#lang-methods-noop",
          "content": "noop\nnoop(value)\n\n\nReturns\n\n\n\n\nnoop()// => function() {}\n\n"
        },
        {
          "title": "sleep",
          "url": "/api/index.html#lang-methods-sleep",
          "content": "sleep\nsleep(value)\n\nvalue  milliseconds\n\n\n\nReturns\n\n\n\n\nasync function foo() {  await sleep(3000);\n}\n\n"
        },
        {
          "title": "toString",
          "url": "/api/index.html#lang-methods-tostring",
          "content": "toString\ntoString(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\ntoString({})// => '[object Object]'\n\ntoString([])\n// => '[object Array]'\n\n"
        },
        {
          "title": "type",
          "url": "/api/index.html#lang-methods-type",
          "content": "type\ntype(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\ntype([2018, 7, 5])// => 'array'\n\ntype()\n// => 'undefined'\n\ntype(() => { })\n// => 'function'\n\ntype({})\n// => 'object'\n\ntype(1)\n// => 'number'\n\ntype(new A())\n// => 'object'\n\ntype(true)\n// => 'boolean'\n\ntype('string')\n// => 'string'\n\ntype(new Date())\n// => 'date'\n\ntype(/\\d+/)\n// => 'regexp'\n\ntype(new Error())\n// => 'error'\n\ntype(Symbol('111'))\n// => 'symbol'\n\ntype(new Map())\n// => 'object'\n\ntype(new Set())\n// => 'object'\n\n"
        },
        {
          "title": "Collection Methods",
          "url": "/api/index.html#collection-methods",
          "content": "Collection Methods"
        },
        {
          "title": "each",
          "url": "/api/index.html#collection-methods-each",
          "content": "eacheach(value, callback[, context])\n\nvalue \ncallback \ncontext  optional\n\n\neach([1, 2], (val, index)=> {\n})\n\neach({ a: 1, b: 2 }, (val, key)=> {\n\n})\n\neach(5, (index, index)=> {\n\n})\n\neach('hello', (c, index)=> {\n\n})\n\n"
        },
        {
          "title": "map",
          "url": "/api/index.html#collection-methods-map",
          "content": "map\nmap(value, callback[, context])\n\nvalue \ncallback \ncontext  optional\n\n\n\nReturns\n\n\n\n\nmap([1, 2, 3, 4, 5], n => n + 1)// => [2, 3, 4, 5, 6]\n\nmap([1, null, 2, undefined, 3, 4, 5], n => n && (n + 1))\n// => [2, 3, 4, 5, 6]\n\nmap({ a: 1, b: 2 }, n => n && (n + 1))\n// => [2, 3]\n\n"
        },
        {
          "title": "transform",
          "url": "/api/index.html#collection-methods-transform",
          "content": "transform\ntransform(value, iterater, accumulator)\n\nvalue \niterater \naccumulator  initial value\n\n\n\nReturns\n\n\n\n\nconst obj = { a: 1, b: 2 };const newObj = transform(obj, (newObj, value, key) => {\n  newObj[key] = value + 1;\n}, {});\n// => { a: 2, b: 3 }\n\nconst arr = [1, 2];\nconst newArr = transform(arr, (newArr, value, key) => {\n  newArr[key] = value + 1;\n}, []);\n// => [2, 3]\n\n"
        },
        {
          "title": "Object Methods",
          "url": "/api/index.html#object-methods",
          "content": "Object Methods"
        },
        {
          "title": "alias",
          "url": "/api/index.html#object-methods-alias",
          "content": "aliasalias()\n\nobj \nmappings\n\n\nalias({ a: 1, b: 2 }, {  a: 'c',\n  b: ['e', 'f']\n});\n// => { a: 1, b: 2, c: 1, e: 2, f: 2 }\n\n"
        },
        {
          "title": "assign",
          "url": "/api/index.html#object-methods-assign",
          "content": "assign\nassign(value, value2[, ...args])\n\nvalue \nvalue2 \nargs \n\n\n\nReturns\n\n\n\n\nconst a = { a: 1 };const b = { b: 2 };\nconst c = { c: 3 };\nassign(a, b, c);\n// => { a: 1, b: 2, c: 3 }\n\n"
        },
        {
          "title": "assignDeep",
          "url": "/api/index.html#object-methods-assigndeep",
          "content": "assignDeep\nassignDeep(value, value2[, ...args])\n\nvalue \nvalue2 \nargs \n\n\n\nReturns\n\n\n\n\nconst a = { a: 1 };const b = { b: {bb: 11} };\nassign(a, b);\n// => a.b !== b.b\n\n"
        },
        {
          "title": "forIn",
          "url": "/api/index.html#object-methods-forin",
          "content": "forInforIn(value, callback[, context])\n\nvalue \ncallback \ncontext  optional\n\n\nforIn({ a: 1, b: 2 }, (val, key) => {  \n});\n\n"
        },
        {
          "title": "forOwn",
          "url": "/api/index.html#object-methods-forown",
          "content": "forOwnforOwn(value, callback[, context])\n\nvalue \ncallback \ncontext  optional\n\n\nforOwn({ a: 1, b: 2 }, (val, key) => {  \n});\n\n"
        },
        {
          "title": "get",
          "url": "/api/index.html#object-methods-get",
          "content": "get\nget(object, path[, defaultValue])\n\nobject \npath \ndefaultValue  optional\n\n\n\nReturns\n\n\n\n\nconst a = { a: [{ b: { c: 3 } }], key: 'value' };get(null, 'a[0].b.c', 3)\n// => 3\n\nget(a, 'a[0].b.c')\n// => 3\n\nget(a, 'a[\"0\"].b.c')\n// => 3\n\nget(a, 'a.b.c')\n// => undefined\n\nget(a, 'a.b.c', 'default')\n// => 'default'\n\nget(a, 'key')\n// => 'value'\n\nget({ key: null }, 'key')\n// => null\n\n"
        },
        {
          "title": "getUid",
          "url": "/api/index.html#object-methods-getuid",
          "content": "getUid\ngetUid(obj)\n\nobj \n\n\n\nReturns\n\n\n\n\ngetUid({})// => 1\n\ngetUid({})\n// => 2\n\n"
        },
        {
          "title": "hasOwn",
          "url": "/api/index.html#object-methods-hasown",
          "content": "hasOwn\nhasOwn(obj, key)\n\nobj \nkey \n\n\n\nReturns\n\n\n\n\nconst obj = { aaa: 111 };hasOwn(obj, 'test')\n// => false\n\nhasOwn(obj, 'aaa')\n// => true\n\n"
        },
        {
          "title": "looseClone",
          "url": "/api/index.html#object-methods-looseclone",
          "content": "looseClone\nlooseClone(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\nconst a = { a: 1 };const b = looseClone(a);\n// => a !== b\n\n"
        },
        {
          "title": "mapObject",
          "url": "/api/index.html#object-methods-mapobject",
          "content": "mapObject\nmapObject(value, callback[, context])\n\nvalue \ncallback \ncontext  optional\n\n\n\nReturns\n\n\n\n\nmapObject({ a: 1, b: 2 }, n => n + 1)// => { a: 2, b: 3 }\n\n"
        },
        {
          "title": "set",
          "url": "/api/index.html#object-methods-set",
          "content": "setset(object, path, value)\n\nobject \npath \nvalue \n\n\nconst a = { a: [{ b: { c: 3 } }], key: 'value' };set(a, 'a[0].b.c', 1);\n// => { a: [{ b: { c: 1 } }], key: 'value' }\n\n"
        },
        {
          "title": "Array Methods",
          "url": "/api/index.html#array-methods",
          "content": "Array Methods"
        },
        {
          "title": "flatten",
          "url": "/api/index.html#array-methods-flatten",
          "content": "flatten\nflatten(arr[, depth])\n\narr \ndepth  Default: 1\n\n\n\nReturns\n\n\n\n\nconst arr1 = [1, [2], [], 3, 4, 5];flatten(arr1)\n// => [1, 2, 3, 4, 5]\n\nconst arr2 = [1, 2, 3, [2, 3, 4], [[1, 2, 3], [3, 4, 5]], 1, 3, 4];\nflatten(arr2)\n// => [1, 2, 3, 2, 3, 4, [1, 2, 3], [3, 4, 5], 1, 3, 4]\n\n"
        },
        {
          "title": "flattenDeep",
          "url": "/api/index.html#array-methods-flattendeep",
          "content": "flattenDeep\nflattenDeep(arr)\n\narr \n\n\n\nReturns\n\n\n\n\nconst arr1 = [1, [2], [], 3, 4, 5];flattenDeep(arr1)\n// => [1, 2, 3, 4, 5]\n\nconst arr2 = [1, [2, [1, 2, [2, 3]], 3], [], 3, [[1, 2], [[1, 2, 3], 3], [1, 2]], 4, 5];\nflattenDeep(arr2)\n// => [1, 2, 1, 2, 2, 3, 3, 3, 1, 2, 1, 2, 3, 3, 1, 2, 4, 5]\n\n"
        },
        {
          "title": "remove",
          "url": "/api/index.html#array-methods-remove",
          "content": "remove\nremove(arr, value)\n\narr \nvalue \n\n\n\nReturns\n\n returns something being removed\n\n\nconst arr = [1, 2, 3, 4, 5];remove(arr, 2)\n// => 2\n\nremove(arr, 9)\n// => null\n\n"
        },
        {
          "title": "removeAt",
          "url": "/api/index.html#array-methods-removeat",
          "content": "removeAt\nremoveAt(arr, index)\n\narr \nindex \n\n\n\nReturns\n\n returns something being removed\n\n\nconst arr = [1, 2, 3, 4, 5];removeAt(arr, 2)\n// => 3\n\nremoveAt(arr, 9)\n// => null\n\n"
        },
        {
          "title": "String Methods",
          "url": "/api/index.html#string-methods",
          "content": "String Methods"
        },
        {
          "title": "camelize",
          "url": "/api/index.html#string-methods-camelize",
          "content": "camelize\ncamelize(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\ncamelize('-value')// => 'Value'\n\ncamelize('data-value')\n// =>  'dataValue'\n\ncamelize('data-------value')\n// => 'dataValue'\n\ncamelize('data-attr-value')\n// => 'dataAttrValue'\n\ncamelize('data--attr--value')\n// => 'dataAttrValue'\n\ncamelize('data_value')\n// => 'dataValue'\n\ncamelize('data_______value')\n// => 'dataValue'\n\ncamelize('data_attr_value')\n// => 'dataAttrValue'\n\ncamelize('data__attr__value')\n// => 'dataAttrValue'\n\ncamelize('data value')\n// => 'dataValue'\n\ncamelize('data       value')\n// => 'dataValue'\n\ncamelize('data attr value')\n// => 'dataAttrValue'\n\ncamelize('data  attr  value')\n// => 'dataAttrValue'\n\ncamelize('data.value')\n// => 'dataValue'\n\ncamelize('data.......value')\n// => 'dataValue'\n\ncamelize('data.attr.value')\n// => 'dataAttrValue'\n\ncamelize('data..attr..value')\n// => 'dataAttrValue'\n\n"
        },
        {
          "title": "capitalize",
          "url": "/api/index.html#string-methods-capitalize",
          "content": "capitalize\ncapitalize(value)\n\nvalue \n\n\n\nReturns\n\n\n\n\ncapitalize('value')// => 'Value'\n\n"
        },
        {
          "title": "formatString",
          "url": "/api/index.html#string-methods-formatstring",
          "content": "formatString\nformatString(val, obj)\n\nval \nobj \n\n\n\nformatString(val, arg[, arg2, arg3])\n\nval \narg \n\n\nformatString('共{0}条记录', 2)// => '共2条记录'\n\nformatString('共{ page }条记录', {})\n// => '共{ page }条记录'\n\nformatString('共{ page }条记录', { page: 2 })\n// => '共2条记录'\n\n"
        },
        {
          "title": "joinPath",
          "url": "/api/index.html#string-methods-joinpath",
          "content": "joinPathjoinPath(base, arg[, arg2, arg3])\n\nbase \narg \n\n\njoinPath('https://www.baidu.com', 'path1')// => 'https://www.baidu.com/path1'\n\njoinPath('https://www.baidu.com/', 'path1')\n// => 'https://www.baidu.com/path1'\n\njoinPath('https://www.baidu.com', 'path1', 'path2)\n// => 'https://www.baidu.com/path1/path2'\n\n"
        },
        {
          "title": "Function Methods",
          "url": "/api/index.html#function-methods",
          "content": "Function Methods"
        },
        {
          "title": "afterCall",
          "url": "/api/index.html#function-methods-aftercall",
          "content": "afterCallafterCall(obj, methodName, after)\n\nobj \nmethodName \nafter \n\n\nconst obj = {  counter: 2,\n  increment() {\n    this.counter++;\n  }\n};\nafterCall(obj, 'increment', function (args, ret) {\n  this.counter = 1;\n});\nobj.increment();\n// 1\n\n"
        },
        {
          "title": "aroundCall",
          "url": "/api/index.html#function-methods-aroundcall",
          "content": "aroundCallaroundCall(obj, methodName, after)\n\nobj \nmethodName \nafter \n\n\nconst obj = {  counter: 2,\n  increment() {\n    this.counter++;\n  }\n};\naroundCall(obj, 'increment', function (fn, args) {\n  this.counter = 2;\n  fn.apply(this, args);\n  this.counter = 2;\n});\nobj.increment();\n// 2\n\n"
        },
        {
          "title": "beforeCall",
          "url": "/api/index.html#function-methods-beforecall",
          "content": "beforeCallbeforeCall(obj, methodName, after)\n\nobj \nmethodName \nafter \n\n\nconst obj = {  counter: 2,\n  increment() {\n    this.counter++;\n  }\n};\nbeforeCall(obj, 'increment', function () {\n  this.counter = 1;\n});\nobj.increment();\n// 2\n\n"
        },
        {
          "title": "debounce",
          "url": "/api/index.html#function-methods-debounce",
          "content": "debounce\ndebounce(func, wait)\n\nfunc \nwait \n\n\n\nReturns\n\n\n\n\nasync function() {  let i = 0;\n  const counter = debounce(() => {\n    i++;\n  }, 200);\n  counter();\n  await sleep(100);\n  counter();\n  await sleep(100);\n  counter();\n  await sleep(200);\n  //=> 1 === 1\n}\n\n"
        }
      ]
    }
  ]
}