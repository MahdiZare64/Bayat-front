var Bayat = Bayat || {};

Bayat.slider = Bayat.slider || {};
Bayat.slider.init = function () {
  try {
    $(".immigration__slider__main").owlCarousel({
      loop: true,
      margin: 30,
      smartSpeed: 700,
      autoplay: true,
      autoplayTimeout: 3000,
      rtl: true,
      nav: true,
      autoplayHoverPause: true,
      dots: true,
      items: 3,
      
    });

    $(".immigration__countries__slider").owlCarousel({
      loop: true,
      margin: 30,
      smartSpeed: 700,
      autoplay: true,
      autoplayTimeout: 3000,
      rtl: true,
      nav: false,
      autoplayHoverPause: true,
      dots: false,
      items: 11,
    });
  } catch (e) {
    console.log(`Error on Bayat.slider.init - ${e}`);
  }
};

Bayat.sliderTab = Bayat.sliderTab || {};
Bayat.sliderTab.init = function () {
  try {
    const tabs = document.querySelectorAll(".immigration__slider__tabs__btn");

    if (tabs.length) {
      tabs.forEach(function (item, index) {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          const tabWrapper = item.parentElement;

          const activeItem = tabWrapper.querySelector(
            ".immigration__slider__tabs__btn.active"
          );
          activeItem.classList.remove("active");
          item.classList.add("active");

          tabWrapper.classList = `immigration__slider__tabs active-${
            (index + 1) % 3
          }`;
        });
      });
    }
  } catch (e) {
    console.log(`Error on Bayat.sliderTab.init - ${e}`);
  }
};

window.addEventListener("DOMContentLoaded", function () {
  Bayat.slider.init();
  Bayat.sliderTab.init();
});
