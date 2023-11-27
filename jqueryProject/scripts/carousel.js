// import { debouncing } from "./utils";

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

$(() => {
  handleHeader();
  $("#hero-banner").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  });

  //   const showDebounce = debouncing(() => {
  //     $(".header").show();
  //   });
  //   const hideDebounce = debouncing(() => {
  //     $(".header").hide();
  //   });

  function handleHeader() {
    var lastScrollTop = 0;

    $(window).scroll(function () {
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
        // Scroll down
        $(".header").hide();
      } else {
        // Scroll up
        $(".header").show();
      }
      lastScrollTop = st;
    });
  }
});
