# celia

[![npm package](https://nodei.co/npm/celia.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/celia)

> Note:  A modern JavaScript utility library delivering modularity, performance, and extras.

[![NPM version](https://img.shields.io/npm/v/celia.svg?style=flat)](https://npmjs.org/package/celia)
[![NPM Downloads](https://img.shields.io/npm/dm/celia.svg?style=flat)](https://npmjs.org/package/celia)
[![](https://data.jsdelivr.com/v1/package/npm/celia/badge)](https://www.jsdelivr.com/package/npm/celia)

## [Full Documentation](https://fengxinming.github.io/celia/index.html)

---

## Installation

### In a browser

```html
<script src="https://cdn.jsdelivr.net/npm/celia/celia.min.js"></script>
<script>
  // window.celia
  celia.each
  celia.isArrayLike
  celia.isAsyncFunction
  celia.isDate
  celia.isFalsy
  celia.looseEqual
  celia.sleep
  // ...
  // ...
</script>

```

### Using npm

```bash
npm install celia --save
```

```javascript

// es6
import { assign, each, getUid, hasOwn, isArrayLike, isUndefined, isWindow, looseEqual, map, noop, sleep, toString, type } from 'celia');

// modularity
import each from 'celia/each';
import isArrayLike from 'celia/isArrayLike';
import isAsyncFunction from 'celia/isAsyncFunction';
import isDate from 'celia/isDate';
import isFalsy from 'celia/isFalsy';
import looseEqual from 'celia/looseEqual';
import sleep from 'celia/sleep';
// ...
// ...

// node
const { assign, each, getUid, hasOwn, isArrayLike, isUndefined, isWindow, looseEqual, map, noop, sleep, toString, type } = require('celia');
// or
const each = require('celia/each');
const isArrayLike = require('celia/isArrayLike');
const isAsyncFunction = require('celia/isAsyncFunction');
const isDate = require('celia/isDate');
const isFalsy = require('celia/isFalsy');
const looseEqual = require('celia/looseEqual');
const sleep = require('celia/sleep');
// ...
// ...

```

## API

### assert

- assert(condition, msg)
  - `condition` `<Boolean>`
  - `msg` `<String>` error message

- Throws
  - `<Error>` throws Error if `condition` is `false`

```js
assert(1 !== 1, 'assertion error');
// => throw Error: assertion error

```

### each

- each(value, callback[, context])
  - `value` `<Array|ArrayLike|String|Number|Object>`
  - `callback` `<Function>`
  - `context` `<any>` optional

```js
each([1, 2], (val, index)=> {

})

each({ a: 1, b: 2 }, (val, key)=> {

})

each(5, (index, index)=> {

})

each('hello', (c, index)=> {

})

```

### easyHash

- easyHash(value)
  - `value` `<any>`

- Returns
  - `<String>` returns an easy hash value

```js
easyHash('abc')
// => 'sabc'

easyHash(1)
// => 'n1'

easyHash({})
// => 'o1'

```

### hasOwn

- hasOwn(obj, key)
  - `obj` `<Object>`
  - `key` `<any>`

- Returns
  - `<Boolean>`

```js
const obj = { aaa: 111 };
hasOwn(obj, 'test')
// => false

hasOwn(obj, 'aaa')
// => true

```

### looseClone

- looseClone(value)
  - `value` `<Object>`

- Returns
  - `<Object>`

```js
const a = { a: 1 };
const b = looseClone(a);
// => a !== b

```

### looseEqual

- looseEqual(a, b)
  - `a` `<any>` 
  - `b` `<any>` ，用于跟 a 比较

- Returns
  - `<Boolean>`

```js
looseEqual(null, undefined)
// => false

looseEqual(null, null)
// => true

looseEqual({ a: 1, b: 2 }, { a: 1, b: 2 })
// => true

looseEqual([1, 2], [1, 2])
// => true

looseEqual(/\d+/, /\d+/)
// => true
  
looseEqual(new Date(2019, 0, 1, 9, 9, 9), new Date(2019, 0, 1, 9, 9, 9))
// => true

```

### noop

- noop(value)

- Returns
  - `<Function>`

```js
noop()
// => function() {}

```

### sleep

- sleep(value)
  - `value` `<Number>` milliseconds

- Returns
  - `<Promise>`

```js
async function foo() {
  await sleep(3000);
}

```

### toString

- toString(value)
  - `value` `<any>` 

- Returns
  - `<String>`

```js
toString({})
// => '[object Object]'

toString([])
// => '[object Array]'

```

### isAbsoluteURL

- isAbsoluteURL(url)
  - `url` `<String>` a request url

- Returns
  - `<Boolean>` returns true if the `url` is a absolute request url

```js
isAbsoluteURL('/src/isAbsoluteURL.js'))
// => false
  
isAbsoluteURL('https://github.com'))
// => true

```

### isArrayLike

- isArrayLike(value)
  - `value` `<any>` 

- Returns
  - `<Boolean>`

```js
isArrayLike('123')
// => true

isArrayLike(() => { })
// => false

isArrayLike([])
// => true

isArrayLike([1, 2, 3])
// => true

isArrayLike({ 0: 1, length: 1 })
// => true

```

### isAsyncFunction

- isAsyncFunction(value)
  - `value` `<any>` 

- Returns
  - `<Boolean>`

```js
isAsyncFunction(async () => { })
// => true

isAsyncFunction(() => { })
// => false

```

### isBoolean

- isBoolean(value)
  - `value` `<any>` 

- Returns
  - `<Boolean>`

```js
isBoolean(() => { })
// => false

isBoolean(true)
// => true

```

### isDate

- isDate(value)
  - `value` `<any>` 

- Returns
  - `<Boolean>`

```js
isDate(new Date())
// => true
  
isDate({})
// => false

```

### isFalsy

- isFalsy(value)
  - `value` `<any>` 

- Returns
  - `<Boolean>`

```js
isFalsy(false)
// => true

isFalsy(null)
// => true

isFalsy(undefined)
// => true

isFalsy(0)
// => true

isFalsy(NaN)
// => true

isFalsy('')
// => true

isFalsy({})
// => false

```

### isFunction

- isFunction(value)
  - `value` `<any>` 

- Returns
  - `<Boolean>`

```js
isFunction(async () => { })
// => true

isFunction(() => { })
// => true

isFunction({})
// => false

```

### isInteger

- isInteger(value)
  - `value` `<any>` 

- Returns
  - `<Boolean>`

```js
isInteger(2)
// => true

isInteger(-2)
// => true

isInteger(1.23)
// => false

isInteger(-1.23)
// => false

isInteger(null)
// => false

isInteger(undefined)
// => false

isInteger('2'));
// => false

isInteger(Infinity)
// => false

```

### isNil

- isNil(value)
  - `value` `<any>` 

- Returns
  - `<Boolean>`

```js
isNil(null)
// => true

isNil(undefined)
// => true

isNil({})
// => false

```

### isNumber

- isNumber(value)
  - `value` `<any>` 

- Returns
  - `<Boolean>`

```js
isNumber(1)
// => true

isNumber(undefined)
// => false

isNumber({})
// => false

```

### isObject

- isObject(value)
  - `value` `<any>` 

- Returns
  - `<Boolean>`

```js
isObject(1)
// => false

isObject(undefined)
// => false

isObject({})
// => true

```

### isPlainObject

- isPlainObject(value)
  - `value` `<any>` 

- Returns
  - `<Boolean>`

```js
isPlainObject(new Date())
// => false

isPlainObject({})
// => true

```

### isPromiseLike

- isPromiseLike(value)
  - `value` `<any>` 

- Returns
  - `<Boolean>`

```js
isPromiseLike(null)
// => false

isPromiseLike(undefined)
// => false

isPromiseLike({})
// => false

isPromiseLike(new Promise(() => { }))
// => true

isPromiseLike({ then: () => { }, catch: () => { } })
// => true

```

### isRegExp

- isRegExp(value)
  - `value` `<any>` 

- Returns
  - `<Boolean>`

```js
isRegExp(null)
// => false
  
isRegExp(undefined)
// => false

isRegExp({})
// => false

isRegExp(Object.create(null))
// => false

isRegExp(/\d+/)
// => true

```

### isString

- isString(value)
  - `value` `<any>` 

- Returns
  - `<Boolean>`

```js
isString(null)
// => false
  
isString({})
// => false

isString(1)
// => false

isString(true)
// => false
  
isString('')
// => true

```

### isUndefined

- isUndefined(value)
  - `value` `<any>` 

- Returns
  - `<Boolean>`

```js
isUndefined(null)
// => false

isUndefined(undefined)
// => true

```

### isWindow

- isWindow(value)
  - `value` `<any>` 

- Returns
  - `<Boolean>`

```js
isWindow(null)
// => false

isWindow(undefined)
// => false

isWindow(window)
// => true

```

## Collection Methods


### map

- map(value, callback[, context])
  - `value` `<Array|ArrayLike|String|Number|Object>`
  - `callback` `<Function>`
  - `context` `<any>` optional

- Returns
  - `<Array>`

```js
map([1, 2, 3, 4, 5], n => n + 1)
// => [2, 3, 4, 5, 6]

map([1, null, 2, undefined, 3, 4, 5], n => n && (n + 1))
// => [2, 3, 4, 5, 6]

map({ a: 1, b: 2 }, n => n && (n + 1))
// => [2, 3]

```

### transform

- transform(value, iterater, accumulator)
  - `value` `<any>`
  - `iterater` `<Function>`
  - `accumulator` `<any>` initial value

- Returns
  - `<any>`

```js
const obj = { a: 1, b: 2 };
const newObj = transform(obj, (newObj, value, key) => {
  newObj[key] = value + 1;
}, {});
// => { a: 2, b: 3 }

const arr = [1, 2];
const newArr = transform(arr, (newArr, value, key) => {
  newArr[key] = value + 1;
}, []);
// => [2, 3]

```

### uid

- uid(obj)
  - `obj` `<Object>`

- Returns
  - `<Number>`

```js
uid({})
// => 1

uid({})
// => 2

```

### alias

- alias()
  - `obj` `<Object>`
  - `mappings`

```js
alias({ a: 1, b: 2 }, {
  a: 'c',
  b: ['e', 'f']
});
// => { a: 1, b: 2, c: 1, e: 2, f: 2 }

```

### assign

- assign(value, value2[, ...args])
  - `value` `<Object>`
  - `value2` `<Object>`
  - `args` `<...Object>`

- Returns
  - `<Object>`

```js
const a = { a: 1 };
const b = { b: 2 };
const c = { c: 3 };
assign(a, b, c);
// => { a: 1, b: 2, c: 3 }

```

### deepAssign

- deepAssign(value, value2[, ...args])
  - `value` `<Object>`
  - `value2` `<Object>`
  - `args` `<...Object>`

- Returns
  - `<Object>`

```js
const a = { a: 1 };
const b = { b: {bb: 11} };
deepAssign(a, b);
// => a.b !== b.b

```

### forIn

- forIn(value, callback[, context])
  - `value` `<Object>`
  - `callback` `<Function>`
  - `context` `<any>` optional

```js
forIn({ a: 1, b: 2 }, (val, key) => {
  
});

```

### forOwn

- forOwn(value, callback[, context])
  - `value` `<Object>`
  - `callback` `<Function>`
  - `context` `<any>` optional

```js
forOwn({ a: 1, b: 2 }, (val, key) => {
  
});

```

### get

- get(object, path[, defaultValue])
  - `object` `<Object>`
  - `path` `<String>`
  - `defaultValue` `<any>` optional

- Returns
  - `<any>`

```js
const a = { a: [{ b: { c: 3 } }], key: 'value' };
get(null, 'a[0].b.c', 3)
// => 3

get(a, 'a[0].b.c')
// => 3

get(a, 'a["0"].b.c')
// => 3

get(a, 'a.b.c')
// => undefined

get(a, 'a.b.c', 'default')
// => 'default'

get(a, 'key')
// => 'value'

get({ key: null }, 'key')
// => null

```

### set

- set(object, path, value)
  - `object` `<Object>`
  - `path` `<String>`
  - `value` `<any>`

```js
const a = { a: [{ b: { c: 3 } }], key: 'value' };
set(a, 'a[0].b.c', 1);
// => { a: [{ b: { c: 1 } }], key: 'value' }

```

### deepFlat

- deepFlat(arr)
  - `arr` `<Array>`

- Returns
  - `<Array>`

```js
const arr1 = [1, [2], [], 3, 4, 5];
deepFlat(arr1)
// => [1, 2, 3, 4, 5]

const arr2 = [1, [2, [1, 2, [2, 3]], 3], [], 3, [[1, 2], [[1, 2, 3], 3], [1, 2]], 4, 5];
deepFlat(arr2)
// => [1, 2, 1, 2, 2, 3, 3, 3, 1, 2, 1, 2, 3, 3, 1, 2, 4, 5]

```

### flat

- flat(arr[, depth])
  - `arr` `<Array>`
  - `depth` `<Number>` <strong>Default: 1</strong>

- flat
  - `<Array>`

```js
const arr1 = [1, [2], [], 3, 4, 5];
flat(arr1)
// => [1, 2, 3, 4, 5]

const arr2 = [1, 2, 3, [2, 3, 4], [[1, 2, 3], [3, 4, 5]], 1, 3, 4];
flat(arr2)
// => [1, 2, 3, 2, 3, 4, [1, 2, 3], [3, 4, 5], 1, 3, 4]

```

### forEach

- forEach(arr, callback[, context])
  - `arr` `<Array>`
  - `callback` `<Function>`
  - `context` `<any>` Optional

- forEach(arr, start, callback[, context])
  - `arr` `<Array>`
  - `start` `<Number>`
  - `callback` `<Function>`
  - `context` `<any>` Optional

- forEach(arr, start, end, callback[, context])
  - `arr` `<Array>`
  - `start` `<Number>`
  - `end` `<Number>`
  - `callback` `<Function>`
  - `context` `<any>` Optional

```js
let i = 0;
forEach([1, 2, 3], function(num) {
  if (num === 1) {
    return false;
  }
  i++;
});
// i === 0

i = 0;
forEach([1, 2, 3, 4, 5], 1, function(num) {
  if (num === 3) {
    return false;
  }
  i++;
});
// i === 1

i = 0;
forEach([1, 2, 3, 4, 5], 1, -1, function(num) {
  i++;
});
// i === 3

```

### remove

- remove(arr, value)
  - `arr` `<Array>`
  - `value` `<any>`

- Returns
  - `<any>` returns something being removed

```js
const arr = [1, 2, 3, 4, 5];
remove(arr, 2)
// => 2

remove(arr, 9)
// => null

```

### removeAt

- removeAt(arr, index)
  - `arr` `<Array>`
  - `index` `<Number>`

- Returns
  - `<any>` returns something being removed

```js
const arr = [1, 2, 3, 4, 5];
removeAt(arr, 2)
// => 3

removeAt(arr, 9)
// => null

```

### camelize

- camelize(value)
  - `value` `<String>`

- Returns
  - `<String>`

```js
camelize('-value')
// => 'Value'

camelize('data-value')
// =>  'dataValue'

camelize('data-------value')
// => 'dataValue'

camelize('data-attr-value')
// => 'dataAttrValue'

camelize('data--attr--value')
// => 'dataAttrValue'

camelize('data_value')
// => 'dataValue'

camelize('data_______value')
// => 'dataValue'

camelize('data_attr_value')
// => 'dataAttrValue'

camelize('data__attr__value')
// => 'dataAttrValue'

camelize('data value')
// => 'dataValue'

camelize('data       value')
// => 'dataValue'

camelize('data attr value')
// => 'dataAttrValue'

camelize('data  attr  value')
// => 'dataAttrValue'

camelize('data.value')
// => 'dataValue'

camelize('data.......value')
// => 'dataValue'

camelize('data.attr.value')
// => 'dataAttrValue'

camelize('data..attr..value')
// => 'dataAttrValue'

```

### capitalize

- capitalize(value)
  - `value` `<String>`

- Returns
  - `<String>`

```js
capitalize('value')
// => 'Value'

```

### pathJoin

- pathJoin(base, arg[, arg2, arg3])
  - `base` `<String>`
  - `arg` `<String|Number|Boolean>`

```js
pathJoin('https://www.baidu.com', 'path1')
// => 'https://www.baidu.com/path1'

pathJoin('https://www.baidu.com/', 'path1')
// => 'https://www.baidu.com/path1'

pathJoin('https://www.baidu.com', 'path1', 'path2)
// => 'https://www.baidu.com/path1/path2'

```

### stringFormat

- stringFormat(val, obj)
  - `val` `<String>`
  - `obj` `<Object>`

```js

stringFormat('共{ page }条记录', {})
// => '共{ page }条记录'

stringFormat('共{ page }条记录', { page: 2 })
// => '共2条记录'

```

### afterCall

- afterCall(obj, methodName, after)
  - `obj` `<Object>`
  - `methodName` `<String>`
  - `after` `<Function>`

```js
const obj = {
  counter: 2,
  increment() {
    this.counter++;
  }
};
afterCall(obj, 'increment', function (args, ret) {
  this.counter = 1;
});
obj.increment();
// 1

```

### aroundCall

- aroundCall(obj, methodName, after)
  - `obj` `<Object>`
  - `methodName` `<String>`
  - `after` `<Function>`

```js
const obj = {
  counter: 2,
  increment() {
    this.counter++;
  }
};
aroundCall(obj, 'increment', function (args, fn) {
  this.counter = 2;
  fn.apply(this, args);
  this.counter = 2;
});
obj.increment();
// 2

```

### beforeCall

- beforeCall(obj, methodName, after)
  - `obj` `<Object>`
  - `methodName` `<String>`
  - `after` `<Function>`

```js
const obj = {
  counter: 2,
  increment() {
    this.counter++;
  }
};
beforeCall(obj, 'increment', function () {
  this.counter = 1;
});
obj.increment();
// 2

```

### debounce

- debounce(func, wait)
  - `func` `<Function>`
  - `wait` `<Number>`

- Returns
  - `<Function>`

```js
async function() {
  let i = 0;
  const counter = debounce(() => {
    i++;
  }, 200);
  counter();
  await sleep(100);
  counter();
  await sleep(100);
  counter();
  await sleep(200);
  //=> 1 === 1
}

```

