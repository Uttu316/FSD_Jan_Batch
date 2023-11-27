import { debouncing } from "./utils.js";

$(() => {
  handleHeader();
  $("#hero-banner").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  });

  // use these function to see deboncing effect
  const showDebounce = debouncing(() => {
    $(".header").show();
  });
  const hideDebounce = debouncing(() => {
    $(".header").hide();
  });

  function handleHeader() {
    var lastScrollTop = 0;

    $(window).scroll(function () {
      var st = $(this).scrollTop();
      if (st > lastScrollTop && st > 66) {
        // Scroll down
        $(".header").slideUp();
      } else {
        // Scroll up
        $(".header").slideDown();
      }
      lastScrollTop = st;
    });
  }
});
