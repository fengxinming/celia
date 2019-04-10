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
<script src="https://cdn.jsdelivr.net/npm/celia/dist/celia.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/celia/dist/date.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/celia/dist/dom.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/celia/dist/array.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/celia/dist/qs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/celia/dist/url.min.js"></script>
```

### CommonJS style with npm

```bash
npm install celia --save
```

```javascript

// es6
import celia from 'celia';
// or
import celia from 'celia/dist/celia.es';

// modularity
import isDate from 'celia/isDate';
import append from 'celia/dom/append';
import add from 'celia/date/add';
import remove from 'celia/array/remove';
import stringify from 'celia/qs/stringify';
import join from 'celia/url/join';

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
  - isWindow
  - map
  - sleep
  - type
  - array/append
  - array/append.proto
  - array/combine
  - array/forEach
  - array/forEach.proto
  - array/forSlice
  - array/forSlice.proto
  - array/grep
  - array/includes
  - array/indexOf
  - array/makeArray
  - array/map
  - array/map.proto
  - array/remove
  - array/remove.proto
  - array/removeAt
  - array/removeAt.proto
  - array/toArray
  - array/toArray.proto
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
  - dom/createElement
  - dom/css
  - dom/data
  - dom/empty
  - dom/find
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
  - number/forNumber
  - number/map
  - object/assign
  - object/forIn
  - object/forOwn
  - object/map
  - qs/parse
  - qs/prefix
  - qs/stringify
  - url/isAbsolute
  - url/join

## Release History
