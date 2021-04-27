// hreader
if (window.matchMedia("(min-width: 1200px)").matches) {
  $(".header__nav-item--dropdown").mouseenter(function () {
    $(this)
      .find(".header__nav-button")
      .toggleClass("header__nav-button--active");
    $(this).find(".header__sub-list").slideToggle(200);
  });

  $(".header__nav-item--dropdown").mouseleave(function () {
    $(this)
      .find(".header__nav-button")
      .toggleClass("header__nav-button--active");
    $(this).find(".header__sub-list").slideToggle(200);
  });

  $(".header__user").mouseenter(function () {
    $(this).find(".header__user-list").slideToggle(200);
  });

  $(".header__user").mouseleave(function () {
    $(this).find(".header__user-list").slideToggle(200);
  });
} else if (window.matchMedia("(min-width: 576px)").matches) {
  $(".header__nav-button--about").click(function () {
    $(this).toggleClass("header__nav-button--active");
    $(".header__sub-list").slideToggle(200);
  });
  $(".header__nav-button--catalog").click(function () {
    $(this).toggleClass("header__nav-button--active");
    $(".header__sort-navigation").slideToggle(200);
  });
  $(".header__menu-btn").click(function () {
    $(".header__vertical-menu").css("transform", "translateX(0)");
    $("body").append('<div class="overlay"></div>').css({ overflow: "hidden" });
    $(".overlay").click(function () {
      this.remove();
      $(".header__vertical-menu").css("transform", "translateX(100%)");
      $("body").removeAttr("style");
    });
  });
  $(".header__btn-close").click(function () {
    $(".header__vertical-menu").removeAttr("style");
    $(".overlay").remove();
    $("body").removeAttr("style");
  });
} else {
  $(".header__menu-btn").click(function () {
    $(".header__vertical-menu").toggleClass(
      "header__vertical-menu--mobile-active"
    );
    if (
      $(".header__vertical-menu").hasClass(
        "header__vertical-menu--mobile-active"
      )
    ) {
      $(".header__vertical-menu").css("transform", "translate(0, 70px)");
    } else {
      $(".header__vertical-menu").removeAttr("style");
    }
  });
  $(".header__nav-button--about").click(function () {
    $(this).toggleClass("header__nav-button--active");
    $(".header__sub-list").slideToggle(200);
  });
  $(".header__nav-button--catalog").click(function () {
    $(this).toggleClass("header__nav-button--active");
    $(".header__sort-navigation").slideToggle(200);
  });
}

// footer

if (window.matchMedia("(max-width: 576px)").matches) {
  $(".footer__title").click(function () {
    $(this).toggleClass("footer__title--active");
    $(this).next().slideToggle(200);
  });
}

//slider main

$(".slider.slider--main").slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 680,
      settings: {
        dots: false,
      },
    },
  ],
});

$(".slider--board").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".novetly__btns .slick-next").click(function () {
  $(".novetly__slider.slider--board").slick("slickNext");
});

$(".novetly__btns .slick-prev").click(function () {
  $(".novetly__slider.slider--board").slick("slickPrev");
});

$(".promotions__btns .slick-next").click(function () {
  $(".promotions__slider.slider--board").slick("slickNext");
});

$(".promotions__btns .slick-prev").click(function () {
  $(".promotions__slider.slider--board").slick("slickPrev");
});

$(".board__filters-dropdown-btn").click(function () {
  $(this).toggleClass("board__filters-dropdown-btn--active");
  $(this).next().slideToggle(200);
});

$(".card__btn").click(function (evt) {
  evt.preventDefault();
  $(this).fadeOut(0);
  $(this)
    .parent()
    .find(".card__counter")
    .fadeIn("200")
    .css({ display: "flex" });
});

if (window.matchMedia("(max-width: 576px)").matches) {
  $(".board__btn-show-filters").click(function () {
    $(".board__filters").css("transform", "translate(0, 70px)");
  });

  $(".board__filters-close-btn").click(function () {
    $(".board__filters").removeAttr("style");
  });

  $(document).ready(function () {
    $(".board__sort-select").select2({
      placeholder: "По названию",
      minimumResultsForSearch: -1,
    });
  });
} else if (window.matchMedia("(max-width: 1024px)").matches) {
  $(".board__btn-show-filters").click(function () {
    $("body").append('<div class="overlay"></div>').css({ overflow: "hidden" });
    $(".overlay").click(function () {
      this.remove();
      $(".board__filters").css("transform", "translateX(100%)");
      $("body").removeAttr("style");
      $(".board__filters").removeAttr("style");
    });
    $(".board__filters").css("transform", "translate(0, 0)");
  });

  $(".board__filters-close-btn").click(function () {
    $(this).parent().removeAttr("style");
    $(".overlay").remove();
    $("body").removeAttr("style");
  });

  $(document).ready(function () {
    $(".board__sort-select").select2({
      placeholder: "По названию",
      minimumResultsForSearch: -1,
    });
  });
}
