Array.prototype.myMap = function (cb) {
  // Complete the implementation of myMap
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    const value = cb(this[i], i, this);
    temp.push(value);
  }

  return temp;
};

Array.prototype.myReduce = function (cb, initialValue) {
  // Complete the implementation of myReduce
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = cb(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }

  return accumulator;
};

Array.prototype.myFilter = function (cb) {
  // Complete the implementation of myFilter
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    const o = cb(this[i], i, this);
    if (o) {
      temp.push(this[i]);
    }
  }

  return temp;
};
