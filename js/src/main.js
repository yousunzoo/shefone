(function ($) {
  let mainHeader = $(".mainHeader");
  let mainSlide = $(".mainSlide");
  let sc = $(window).scrollTop();

  let mainBannerImg = $(".mainBannerSectionBg-img");
  let mainBannerImgT = mainBannerImg.offset().top;
  let mainBannerImgH = mainBannerImg.height();
  let mainProduct = $(".mainProduct");
  let mainProductImg = $(".mainProductBg-img");
  let mainProductImgT = mainProductImg.offset().top;
  let mainProductImgH = mainProductImg.height();
  let mainProductCont = $(".mainProductCont");
  let mainInquiry = $(".mainInquiry-container");
  let mainInquiryT = mainInquiry.offset().top;
  let mainInquiryH = mainInquiry.height();

  // 1. 스크롤이 해당 섹션에 도착할 때 AnimeBtn 클래스 있는 곳에 is-AniBtn 클래스 부여
  if ($(window).scrollTop() - mainHeader.offset().top < 0) {
    mainHeader.find(".AnimeBtn").addClass("is-AniBtn");
  }

  $(window).on("scroll", function () {
    // 2. 스크롤 이동 시 mainBannerBg img transform 기능
    mainBannerE();
    // 3. maniSlider 스크롤 도착했을 때 a-Clip 있는 요소에 is-Clip 클래스 추가
    mainSlideE();
    // 4. 스크롤 이동 시 mainProductBg transform, .is-Clip, .isAniBtn 기능
    mainProductE();
    // 5. mainInquiry 기능 구현 (is-Clip, is-View)
    mainInquiryE();
  });

  function mainBannerE() {
    let scrollStart = mainBannerImgT;
    let scrollEnd = mainBannerImgT + mainBannerImgH;
    if ($(window).scrollTop() < scrollStart) return;
    if ($(window).scrollTop() > scrollEnd) return;
    mainBannerImg.css({
      transform:
        "translateY(" +
        (30 / mainBannerImgH) * ($(window).scrollTop() - mainBannerImgT) +
        "%)",
    });
  }
  function mainSlideE() {
    let mainSlideH = mainSlide.height();
    if (mainSlide.offset().top - $(window).scrollTop() - mainSlideH <= 0) {
      let aClip = mainSlide.find(".a-Clip");
      aClip.addClass("is-Clip");
    }
  }
  function mainProductE() {
    let scrollStart = mainProductImgT;
    let scrollEnd = mainProductImgT + mainProductImgH;
    let viewportHeight = $(window).height();
    let sc = $(window).scrollTop();

    if (
      $(window).scrollTop() < scrollStart ||
      $(window).scrollTop() > scrollEnd
    )
      return;
    if (mainProduct.offset().top < viewportHeight + sc) {
      let aClip = mainProductCont.find(".a-Clip");
      let AnimeBtn = mainProductCont.find(".AnimeBtn");
      aClip.addClass("is-Clip");
      AnimeBtn.addClass("is-AniBtn");
    }
    mainProductImg.css({
      transform:
        "translateY(" +
        (30 / mainProductImgH) * ($(window).scrollTop() - mainProductImgT) +
        "%)",
    });
  }
  function mainInquiryE() {
    let scrollStart = mainInquiryT;
    let sc = $(window).scrollTop();

    if (scrollStart - sc <= mainProduct.height()) {
      let aClip = mainInquiry.find(".a-Clip");
      mainInquiry.addClass("is-View");
      aClip.addClass("is-Clip");
    }
  }

  // slide event 구현
  let swiperBtnN = $(".swiper-btn-next");
  let swiperBtnP = $(".swiper-btn-prev");
  let mainSlideWrapper = $(".mainServiceSlide-wrapper");
  let mainServiceSlideItem = $(".mainServiceSlide-item");
  let ItemW = mainServiceSlideItem.innerWidth();
  let i = 0;

  let slideActive = mainSlideWrapper.find(".swiper-slide-active");

  console.log(ItemW);
  mainServiceSlideItem.css({ width: ItemW + 20 + "px" });

  swiperBtnN.on("click", swiperNextFn);
  swiperBtnP.on("click", swiperPrevFn);
  function swiperNextFn() {
    if (i < 3) {
      i++;
      if (i == 3) {
        swiperBtnN.addClass("swiper-btn-disabled");
      }
      swiperBtnP.removeClass("swiper-btn-disabled");
      console.log(i);
      slideActive.removeClass("swiper-slide-active");
      slideActive.next().addClass("swiper-slide-active");
      slideActive = mainSlideWrapper.find(".swiper-slide-active");
      mainSlideWrapper.css({
        transform: "translateX(-" + ItemW * i + "px)",
      });
    }
  }
  function swiperPrevFn() {
    if (i > 0) {
      i--;
      if (i == 0) {
        swiperBtnP.addClass("swiper-btn-disabled");
      }
      swiperBtnN.removeClass("swiper-btn-disabled");
      console.log(i);
      slideActive.removeClass("swiper-slide-active");
      slideActive.prev().addClass("swiper-slide-active");
      slideActive = mainSlideWrapper.find(".swiper-slide-active");
      mainSlideWrapper.css({
        transform: "translateX(-" + ItemW * i + "px)",
      });
    }
  }
})(jQuery);
