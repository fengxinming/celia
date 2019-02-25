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
```

### Load `celia` via AMD (requirejs)

```javascript
define(['celia'], function(corieDate) {
  // your code
});
```

### CommonJS style with npm

```bash
npm install celia --save
```

```javascript

// es6
import celia from 'celia';
// or
import celia from 'celia/src';

// node
const celia = require('celia');

// modularity
const isDate = require('celia/isDate');

```

## Usage

### API



## Release History

### 2.0.1

  - added unit tests
  - renamed `merge` to `join`
  - modularity `remove` will return null when anything can be removed
