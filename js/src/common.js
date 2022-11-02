(function ($) {
  // 변수
  let wrap = $("#wrap");
  let menuBtn = $("header").find(".menuBtn");
  let didScroll;
  let lastScrollTop = 0;
  let delta = 5; // 동작의 구현이 시작되는 위치
  let navbarHeight = $("header").outerHeight();
  let siteFamily = $("header").find(".siteFamily");
  let siteFamilySelect = siteFamily.find(".siteFamilySelect");
  let navigation = $("#navigation");
  let primaryMenu = navigation.find("#primary-menu-container");
  let menuItem = primaryMenu.children(".menu_item");

  // 1. 스크롤에 따라 .is-Up, .is-Down 클래스 부여
  // 스크롤 움직임 파악
  $(window).scroll(function (e) {
    didScroll = true;
  });

  // 스크롤 움직일 때마다 하지 않도록 셋팅 (부하 막음)
  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  // 클래스 부여 함수
  function hasScrolled() {
    // 현재 스크롤 위치
    let st = $(this).scrollTop();

    // 설정한 delta 값보다 더 스크롤되었는지를 확인
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // 헤더의 높이보다 더 스크롤 되었는지 확인
    // 현재 스크롤 위치가 이전 스크롤 위치보다 클 때, 헤더높이보다 클 때 is-Up
    if (st > lastScrollTop && st > navbarHeight) {
      $("header").addClass("is-Up").removeClass("is-Down");
    } else {
      // 현재 스크롤 위치 + 윈도우 높이 < 문서 높이 일 때 is-Down
      if (st + $(window).height() < $(document).height()) {
        $("header").removeClass("is-Up").addClass("is-Down");
      }
    }
    lastScrollTop = st;
  }

  // 2. familySite slideDown, slideUp 기능 구현
  siteFamily.on("click", function (e) {
    siteFamilySelect.slideToggle(200);
  });

  // 3. menuBtn 누르면 헤더 고정 및 siteHeaderMenu 등장 (#wrap에 is-NavOpen 클래스 부여)
  menuBtn.on("click", function (e) {
    e.preventDefault();
    if (wrap.hasClass("is-NavOpen")) {
      wrap.removeClass("is-NavOpen");
      menuItem.removeClass("is-Subview");
    } else {
      wrap.addClass("is-NavOpen");
    }
  });

  // 4. siteHeaderMenu menu_item 클릭시 submenu 등장 (menu_item에 .is-Subview 클래스 부여)
  menuItem.on("click", function (e) {
    $(this).addClass("is-Subview");
    $(this).siblings().removeClass("is-Subview");
  });
})(jQuery);
