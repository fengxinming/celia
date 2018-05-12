'use strict';

function newIterator(iterator, context) {
  return context ? iterator.bind(context) : iterator;
}

function objForEach(value, iterator, context) {
  const cb = newIterator(iterator, context);
  let key;
  for (key in value) {
    if (value.hasOwnProperty(key)) {
      cb(value[key], key);
    }
  }
  return value;
}

function arrForEach(value, iterator, context) {
  if (value.forEach) {
    value.forEach(iterator, context);
  } else {
    const cb = newIterator(iterator, context);
    for (let key = 0, len = value.length; key < len; key++) {
      cb(value[key], key);
    }
  }
}

function fnForEach(value, iterator, context) {
  const cb = newIterator(iterator, context);
  let key;
  for (key in value) {
    if (key !== 'prototype' && key !== 'length' && key !== 'name' && (!value.hasOwnProperty || value.hasOwnProperty(key))) {
      cb(value[key], key);
    }
  }
  return value;
}

module.exports = {
  objForEach: objForEach,
  arrForEach: arrForEach,
  fnforEach: fnforEach,
  newIterator: newIterator
};