(function ($) {
  // 탭메뉴 기능 구현
  let pageSubTabItem = $(".pageSubTab-item");
  let pageSubTabContSec = $(".pageSubTabContSec");

  pageSubTabItem.on("click", function (e) {
    let i = $(this).index();
    $(this).siblings().removeClass("is-Current");
    $(this).addClass("is-Current");
    pageSubTabContSec.siblings().removeClass("is-Current");
    pageSubTabContSec.eq(i).addClass("is-Current");
  });
})(jQuery);
