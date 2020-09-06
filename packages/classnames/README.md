# celia.classnames

> Note: A simple JavaScript utility for conditionally joining classNames together.

[![NPM version](https://img.shields.io/npm/v/celia.classnames.svg?style=flat)](https://npmjs.org/package/celia.classnames)
[![NPM Downloads](https://img.shields.io/npm/dm/celia.classnames.svg?style=flat)](https://npmjs.org/package/celia.classnames)

---

## Install

```bash
npm install celia.classnames --save
```

---

## Api

* classnames( arg )
* classnames.concat( arg1, arg2, ...args )

## Usage

```js
import classnames from 'celia.classnames';

classnames([]); 
// ''

classnames(''); 
// ''

classnames(null); 
// ''

classnames({
  class1: false,
  class2: true
}); 
// 'class2'

classnames([
  { class2: true },
  [],
  null,
  '',
  true,
  false,
  'class3',
  'class4'
]);
// 'class2 class3 class4'

classnames([
  'class3',
  'class4'
]);
// 'class3 class4'

classnames('class5');
// 'class5'

classnames.concat(
  { class1: false, class2: true },
  '',
  true,
  ['class3', 'class4'],
  'class5'
);
// 'class2 class3 class4 class5'

```