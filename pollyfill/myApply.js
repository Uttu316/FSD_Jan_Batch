Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not function`);
  }
  if (!Array.isArray(args)) {
    throw new TypeError(`${args} should be Array`);
  }

  let x = this;

  return function () {
    x.apply(context, args);
  };
};
