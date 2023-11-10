const debouncing = function (callBack) {
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

const throttling = (callBack) => {
  var timer;

  return (...args) => {
    if (timer) return null;
    callBack(...args);
    timer = setTimeout(() => {
      timer = null;
    }, 2000);
  };
};

const debounce = debouncing((value) => {
  console.log(value);
});

const input = document.getElementById("input");

input.addEventListener("input", (e) => {
  debounce(e.target.value);
});

const throttle = throttling((value) => {
  console.log(value);
});

window.addEventListener("scroll", (e) => {
  throttle(e);
});

/*


const throttle = throttling(scrollHandler);


container.addEventListener("scroll", throttle);

*/
