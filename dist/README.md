# celia

[![npm package](https://nodei.co/npm/celia.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/celia)

> Note:  A modern JavaScript utility library delivering modularity, performance, & extras.

---

## Table of contents

  - [Installation](#Installation)
  - [Usage](#Usage)
    - [API](#API)
  - [Release History](#Release-History)

---

## Installation

### Load `celia` via classical `<script>` tag

```html
<script src="https://cdn.jsdelivr.net/npm/celia/celia.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/celia/date.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/celia/dom.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/celia/array.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/celia/qs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/celia/url.min.js"></script>
```

### CommonJS style with npm

```bash
npm install celia --save
```

```javascript

// es6
import celia from 'celia';
// or
import celia from 'celia/celia.es';

// modularity
import isDate from 'celia/es/isDate';
import append from 'celia/es/dom/append';
import add from 'celia/es/date/add';
import remove from 'celia/es/array/remove';
import stringify from 'celia/es/qs/stringify';
import join from 'celia/es/url/join';

// node
const celia = require('celia');
const { isDate } = celia;
const { append } = celia.dom;
const { add } = celia.date;
const { remove } = celia.array;
const { stringify } = celia.qs;
const { join } = celia.url;

```

## Usage

### API

  - camelCase
  - each
  - forEach
  - forIn
  - forNumber
  - forOwn
  - forSlice
  - isArrayLike
  - isAsyncFunction
  - isBoolean
  - isDate
  - isFunction
  - isNil
  - isNumber
  - isObject
  - isPromiseLike
  - isString
  - isUndefined
  - map
  - sleep
  - type
  - array/append
  - array/forEach
  - array/grep
  - array/inArray
  - array/includes
  - array/join
  - array/makeArray
  - array/map
  - array/remove
  - array/removeAt
  - array/toArray
  - date/add
  - date/clone
  - date/dayOfYear
  - date/daysInMonth
  - date/diff
  - date/endOf
  - date/format
  - date/get
  - date/isAfter
  - date/isBefore
  - date/isBetween
  - date/isLeapYear
  - date/isSame
  - date/isSameOrAfter
  - date/isSameOrBefore
  - date/isValid
  - date/parse
  - date/set
  - date/startOf
  - date/subtract
  - dom/addClass
  - dom/after
  - dom/append
  - dom/attr
  - dom/before
  - dom/children
  - dom/css
  - dom/data
  - dom/empty
  - dom/hasClass
  - dom/hide
  - dom/html
  - dom/next
  - dom/nextAll
  - dom/off
  - dom/on
  - dom/parent
  - dom/prepend
  - dom/prev
  - dom/prevAll
  - dom/prop
  - dom/remove
  - dom/removeAttr
  - dom/removeClass
  - dom/removeData
  - dom/removeProp
  - dom/show
  - dom/wrap
  - qs/parse
  - qs/prepend
  - qs/stringify
  - url/isAbsolute
  - url/join

## Release History

### 3.0.0

  - finished all functions for manipulating DOM

### 3.0.1

  - performance optimization

### 3.0.5

  - added `get` and `set` two functions for manipulating Date

### 3.0.6

  - added functions for manipulating querystring

### 3.0.7

  - added functions `map` and `forSlice`
  - added functions for manipulating url

### 3.0.8

  - fixed an underlying bug for function `join` in array

### 3.0.9

  - fixed an underlying bug for function `map`

### 3.0.10

  - fixed an underlying bug for function `forSlice`
