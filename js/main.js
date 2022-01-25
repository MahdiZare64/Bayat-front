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
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
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

    $(".home__reasons__slider").owlCarousel({
      loop: true,
      margin: 30,
      smartSpeed: 700,
      autoplay: true,
      autoplayTimeout: 3000,
      rtl: true,
      nav: true,
      autoplayHoverPause: true,
      dots: false,
      items: 4,
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
    });

    $(".home__our_team__slider").owlCarousel({
      loop: true,
      margin: 30,
      smartSpeed: 700,
      autoplay: true,
      autoplayTimeout: 3000,
      rtl: true,
      nav: false,
      autoplayHoverPause: true,
      dots: false,
      items: 3.5,
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

          // slider swap
          const wrapper = tabWrapper.parentElement;
          const target = item.dataset.target;
          const activeSlider = wrapper.querySelector("." + target);

          const preActive = wrapper.querySelector(".active-tab");
          preActive.classList.remove("active-tab");
          activeSlider.classList.add("active-tab");

        });
      });
    }
  } catch (e) {
    console.log(`Error on Bayat.sliderTab.init - ${e}`);
  }
};

Bayat.fixedHeader = Bayat.fixedHeader || {};
Bayat.fixedHeader.init = function () {
  try {
    const header = document.querySelector(".home__header");

    if (header) {
      window.addEventListener(
        "scroll",
        function () {
          var st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > 1000) {
            if (!header.classList.contains("header__fixed")) {
              header.classList.add("header__fixed");
              setTimeout(function () {
                header.classList.add("header__fixed__shown");
              }, 500);
            }
          } else {
            if (header.classList.contains("header__fixed")) {
              header.classList.remove("header__fixed__shown");
              setTimeout(function () {
                header.classList.remove("header__fixed");
              }, 500);
            }
          }
        },
        false
      );
    }
  } catch (e) {
    console.log(`Error on Bayat.fixedHeader.init - ${e}`);
  }
};

window.addEventListener("DOMContentLoaded", function () {
  Bayat.slider.init();
  Bayat.sliderTab.init();
  Bayat.fixedHeader.init();
});
