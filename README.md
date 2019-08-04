# celia

[![npm package](https://nodei.co/npm/celia.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/celia)

> Note:  A modern JavaScript utility library delivering modularity, performance, and extras.

[![NPM version](https://img.shields.io/npm/v/celia.svg?style=flat)](https://npmjs.org/package/celia)
[![NPM Downloads](https://img.shields.io/npm/dm/celia.svg?style=flat)](https://npmjs.org/package/celia)
[![](https://data.jsdelivr.com/v1/package/npm/celia/badge)](https://www.jsdelivr.com/package/npm/celia)

---

## Table of contents

  - [Manipulation](#Manipulation)
  - [Installation](#Installation)
  - [API](#API)
  - [Example](#Example)

---

## Manipulation

- [Manipulate Object](https://github.com/fengxinming/object-utils)
- [Manipulate Array](https://github.com/fengxinming/array-utils)
- [Manipulate String](https://github.com/fengxinming/string-utils)
- [Manipulate Function](https://github.com/fengxinming/func-utils)
- [Manipulate Query String](https://github.com/fengxinming/qs)
- [Manipulate Properties Files](https://github.com/fengxinming/properties-like)
- [Browser Stuff](https://github.com/fengxinming/browser-stuff)

---

## Installation

### Load `celia` via classical `<script>` tag

```html
<script src="https://cdn.jsdelivr.net/npm/celia/iife.min.js"></script>
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

### CommonJS style with npm

```bash
npm install celia --save
```

```javascript

// es6
import { assign, each, getUid, hasOwn, isArrayLike, isUndefined, isWindow, looseEqual, map, noop, sleep, toString, type } from 'celia');

// modularity
import each from 'celia/es/each';
import isArrayLike from 'celia/es/isArrayLike';
import isAsyncFunction from 'celia/es/isAsyncFunction';
import isDate from 'celia/es/isDate';
import isFalsy from 'celia/es/isFalsy';
import looseEqual from 'celia/es/looseEqual';
import sleep from 'celia/es/sleep';
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

---

## API

  - assign
  - each
  - getEasyHash
  - getUid
  - hasOwn
  - isAbsoluteURL
  - isArrayLike
  - isAsyncFunction
  - isBoolean
  - isDate
  - isFalsy
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
  - looseEqual
  - map
  - noop
  - sleep
  - toString
  - type

---

## Example

  - [Jest](test)
