class A {

  constructor() {
    this.a = '111';
    this.d = '222';
    this.counter = 0;
  }

  b() { }
  c() { }
  increment() {
    this.counter++;
  }

  toString() {
    return '[object A]';
  }

}

export default A;
