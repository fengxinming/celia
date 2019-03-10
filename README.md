# celia

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

// node
const celia = require('celia');
const { isDate } = celia;
const { append } = celia.dom;
const { add } = celia.date;
const { remove } = celia.array;

```

## Usage

### API

  - camelCase
  - each
  - forEach
  - forIn
  - forNumber
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
  - date/isAfter
  - date/isBefore
  - date/isBetween
  - date/isLeapYear
  - date/isSame
  - date/isSameOrAfter
  - date/isSameOrBefore
  - date/isValid
  - date/parse
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

## Release History

### 3.0.0

  - finished all functions for manipulating DOM

### 3.0.1

  - performance optimization

### 3.0.2

  - added `get` and `set` two functions for manipulating Date

### 3.0.3

  - return `Date` when `set` is called for manipulating Date
