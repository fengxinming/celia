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
import stringify from 'celia/qs/stringify';
import join from 'celia/url/join';

// node
const celia = require('celia');
const { isDate } = celia;
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
  - isRegExp
  - isString
  - isUndefined
  - isWindow
  - map
  - sleep
  - type
  - browser/msie
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
