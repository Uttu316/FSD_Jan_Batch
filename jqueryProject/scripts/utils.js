export const debouncing = function (callBack) {
  var timer;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callBack(...args);
    }, 1000);
  };
};
