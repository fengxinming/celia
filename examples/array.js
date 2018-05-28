'use strict';

const array = require('../lib/array');

const arr1 = [1, 2, 3, 4, 5];

const obj1 = {
  a: 'a',
  b: 'b',
  c: 'c'
};

function Obj() {
  this.a = 'a';
  this.b = 'b';
  this.c = 'c';
}

Obj.prototype.fn = () => {};

const obj2 = new Obj();

array.forEach(arr1, n => console.log(n));

array.forEach(obj1, (val, key) => console.log('forEach', `Key:${key}, Value:${val}`));

array.forEach(obj2, (val, key) => console.log('forEach', `Key:${key}, Value:${val}`));

array.each(arr1, (i, n) => console.log(n));

array.each(obj1, (key, val) => console.log('each', `Key:${key}, Value:${val}`));

array.each(obj2, (key, val) => console.log('each', `Key:${key}, Value:${val}`));

console.log('merge', array.merge(['a', 'b', 'c'], arr1));

console.log('makeArray', array.makeArray('test', [1, 2, 3]));

console.log('makeArray', array.makeArray(['test2'], [1, 2, 3]));

console.log('inArray', array.inArray(4, arr1));

console.log('inArray', array.inArray(4, arr1, 2));

console.log('grep', array.grep(arr1, (n, i) => {
  if (n === 3) {
    return true;
  }
}));

console.log('grep', array.grep(arr1, (n, i) => {
  if (n === 3) {
    return true;
  }
}, true));

console.log(array.map(arr1, (n, i) => n + 1));

console.log(array.map(obj1, (n, i) => n + 1));

console.log(array.includes(arr1, 4));

array.arrayRemove(arr1, 4)

console.log(arr1);

console.log(array.toArray(arr1));
