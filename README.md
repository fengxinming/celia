# celia

[![npm package](https://nodei.co/npm/celia.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/celia)

> Note:  A modern JavaScript utility library delivering modularity, performance, & extras.

[![NPM version](https://img.shields.io/npm/v/celia.svg?style=flat)](https://npmjs.org/package/celia) [![NPM Downloads](https://img.shields.io/npm/dm/celia.svg?style=flat)](https://npmjs.org/package/celia)

---

## Table of contents

  - [Installation](#Installation)
  - [Usage](#Usage)
    - [Manipulation](#Manipulation)
    - [API](#API)
  - [Release History](#Release-History)

---

## Installation

### Load `celia` via classical `<script>` tag

```html
<script src="https://cdn.jsdelivr.net/npm/celia/dist/celia.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/celia/dist/aop.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/celia/dist/browser.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/celia/dist/object.min.js"></script>
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
import each from 'celia/each';
import isDate from 'celia/isDate';
import stringify from 'celia/qs/stringify';
import join from 'celia/url/join';

// node
const celia = require('celia');
const { each } = celia;
const { isDate } = celia;
const { stringify } = celia.qs;
const { join } = celia.url;

```

## Usage

### Manipulation

  - [manipulate Array](https://www.npmjs.com/package/kick-array)
  - [manipulate DOM](https://www.npmjs.com/package/kick-dom)
  - [manipulate Date](https://www.npmjs.com/package/kick-date)

### API

  - camelCase
  - debounce
  - each
  - forEach
  - forNumber
  - forOwn
  - get
  - getUid
  - hasOwn
  - isArrayLike
  - isAsyncFunction
  - isBoolean
  - isDate
  - isFunction
  - isInteger
  - isNil
  - isNumber
  - isObject
  - isPlainObject
  - isPromiseLike
  - isRegExp
  - isString
  - isUndefined
  - isWindow
  - map
  - sleep
  - type
  - aop/after
  - aop/around
  - aop/before
  - browser/msie
  - browser/os
  - number/forNumber
  - number/map
  - object/assign
  - object/forIn
  - object/forOwn
  - object/get
  - object/map
  - qs/parse
  - qs/prefix
  - qs/stringify
  - url/isAbsolute
  - url/join
  
## Release History
