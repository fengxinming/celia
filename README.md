# celia

[![npm package](https://nodei.co/npm/celia.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/celia)

> Note:  A modern JavaScript utility library delivering modularity, performance, and extras.

[![NPM version](https://img.shields.io/npm/v/celia.svg?style=flat)](https://npmjs.org/package/celia)
[![NPM Downloads](https://img.shields.io/npm/dm/celia.svg?style=flat)](https://npmjs.org/package/celia)
[![](https://data.jsdelivr.com/v1/package/npm/celia/badge)](https://www.jsdelivr.com/package/npm/celia)

---

## Table of contents

  - [Installation](#Installation)
  - [Usage](#Usage)
    - [Manipulation](#Manipulation)
  - [Example](#Example)

---

## Installation

### Load `celia` via classical `<script>` tag

```html
<script src="https://cdn.jsdelivr.net/npm/celia/iife.min.js"></script>
<script>
  // window.celia
  celia.assign
  celia.each
  celia.getUid
  celia.hasOwn
  celia.isArrayLike
  celia.isAsyncFunction
  celia.isBoolean
  celia.isDate
  celia.isFalsy
  celia.isFunction
  celia.isInteger
  celia.isNil
  celia.isNumber
  celia.isObject
  celia.isPlainObject
  celia.isPromiseLike
  celia.isRegExp
  celia.isString
  celia.isUndefined
  celia.isWindow
  celia.looseEqual
  celia.map
  celia.noop
  celia.sleep
  celia.toString
  celia.type
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
import assign from 'celia/es/assign';
import each from 'celia/es/each';
import getUid from 'celia/es/getUid';
import hasOwn from 'celia/es/hasOwn';
import isArrayLike from 'celia/es/isArrayLike';
import isAsyncFunction from 'celia/es/isAsyncFunction';
import isBoolean from 'celia/es/isBoolean';
import isDate from 'celia/es/isDate';
import isFalsy from 'celia/es/isFalsy';
import isFunction from 'celia/es/isFunction';
import isInteger from 'celia/es/isInteger';
import isNil from 'celia/es/isNil';
import isNumber from 'celia/es/isNumber';
import isObject from 'celia/es/isObject';
import isPlainObject from 'celia/es/isPlainObject';
import isPromiseLike from 'celia/es/isPromiseLike';
import isRegExp from 'celia/es/isRegExp';
import isString from 'celia/es/isString';
import isUndefined from 'celia/es/isUndefined';
import isWindow from 'celia/es/isWindow';
import looseEqual from 'celia/es/looseEqual';
import map from 'celia/es/map';
import noop from 'celia/es/noop';
import sleep from 'celia/es/sleep';
import toString from 'celia/es/toString';
import type from 'celia/es/type';

// node
const { assign, each, getUid, hasOwn, isArrayLike, isUndefined, isWindow, looseEqual, map, noop, sleep, toString, type } = require('celia');
// or
const assign = require('celia/assign');
const each = require('celia/each');
const getUid = require('celia/getUid');
const hasOwn = require('celia/hasOwn');
const isArrayLike = require('celia/isArrayLike');
const isAsyncFunction = require('celia/isAsyncFunction');
const isBoolean = require('celia/isBoolean');
const isDate = require('celia/isDate');
const isFalsy = require('celia/isFalsy');
const isFunction = require('celia/isFunction');
const isInteger = require('celia/isInteger');
const isNil = require('celia/isNil');
const isNumber = require('celia/isNumber');
const isObject = require('celia/isObject');
const isPlainObject = require('celia/isPlainObject');
const isPromiseLike = require('celia/isPromiseLike');
const isRegExp = require('celia/isRegExp');
const isString = require('celia/isString');
const isUndefined = require('celia/isUndefined');
const isWindow = require('celia/isWindow');
const looseEqual = require('celia/looseEqual');
const map = require('celia/map');
const noop = require('celia/noop');
const sleep = require('celia/sleep');
const toString = require('celia/toString');
const type = require('celia/type');


```

## Usage

### Manipulation

- [Manipulate Object](https://github.com/fengxinming/object-utils)
- [Manipulate Array](https://github.com/fengxinming/array-utils)
- [Manipulate String](https://github.com/fengxinming/string-utils)
- [Manipulate Function](https://github.com/fengxinming/func-utils)
- [Manipulate Query String](https://github.com/fengxinming/qs)
- [Manipulate Properties Files](https://github.com/fengxinming/properties-like)
- [Browser Stuff](https://github.com/fengxinming/browser-stuff)

## Example

  - [Jest](test)
