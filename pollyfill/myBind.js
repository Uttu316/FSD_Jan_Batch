Function.prototype.myBind = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not function`);
  }

  obj.fn = this;
  return function (...newArgs) {
    obj.fn(...args, ...newArgs);
  };
};

const arr = [1, 2, 3, 4, 5, 6];
Array.prototype.findAllOdd = function () {
  const array = this;
  const output = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      output.push(array[i]);
    }
  }
  return output;
};
const arr2 = [54, 43, 3, 232, 1, 2, 32];
const odds = arr2.findAllOdd();

console.log(odds);
