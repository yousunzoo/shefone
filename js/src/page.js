(function ($) {
  // onlyBannerBg-img translateX
  let onlyBannerBgImg = $(".onlyBannerBg-img");
  let bgImgH = onlyBannerBgImg.height();
  let bgImgT = onlyBannerBgImg.offset().top;

  $(window).on("scroll", function () {
    imgTrans();
    opacityFn();
  });
  function imgTrans() {
    let scroll = $(window).scrollTop();
    if (scroll < bgImgT || scroll > bgImgT + bgImgH) return;
    onlyBannerBgImg.css({
      transform: "translateY(" + (35 / bgImgH) * (scroll - bgImgT) + "%)",
    });
  }
  // a-Opacity 에 is-OpacityTop 부여
  let aOpacityTop = $(".a-OpacityTop");
  let aOpacityTopT = aOpacityTop.offset().top;

  function opacityFn() {
    let sc = $(window).scrollTop();
    let viewportHeight = $(window).height();

    if (aOpacityTopT < viewportHeight + sc) {
      aOpacityTop.addClass("is-OpacityTop");
    }
  }

  let brandHeader = $(".brandHeader");
  let brandHeaderT = brandHeader.offset().top;
  function brandHeaderFn() {
    let sc = $(window).scrollTop();
    let viewportHeight = $(window).height();

    if (brandHeaderT < viewportHeight + sc) {
      let aClip = brandHeader.find(".a-Clip");
      aClip.addClass("is-Clip");
    }
  }
})(jQuery);
