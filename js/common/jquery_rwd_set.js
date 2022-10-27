// jquery_rwd_set.js
/** 기능 설명
 * = 각 디바이스 환경을 확인하여 필요시 그에 따른 기능을 수행할 수 있는 기본 셋팅
 * 기준 디바이스 가이드 불러오기 (getJSON)
 * 기존 크기를 확인 및 디바이스 크기 기준 디바이스 설정
 * 브라우저 크기 변경되면 변경된 크기를 파악하여 기존 디바이스 환경과 다른 환경일 경우 변경할 처리 체크
 */

(function($){
let jsonData = '../data/device_type.json';
$.getJSON(jsonData, function(data){
  let deviceGuide = data;

  // 변수
  let win = $(window);
  let winW = win.width();
  let checkType, deviceResult;

  // 함수
  let deviceCheckFn = function(){
    let guideLen = deviceGuide.length;
    let i = guideLen - 1;

    for(; i >=0; i-=1){
      if(winW >= deviceGuide[i].size){
        checkType = deviceGuide[i].type;
        break;
      }else{
        checkType = deviceGuide[i].type;
      }
    } // for
    return $.CheckType = checkType;
  } // deviceCheckFn()

  let beforeDevice = deviceCheckFn();
  // console.log(beforeDevice);
  
  // 이벤트
  win.on('resize', function(){
    winW = win.width();
    let afterDevice = deviceCheckFn();
    if(beforeDevice !== afterDevice){
      beforeDevice = afterDevice;
      deviceResult = beforeDevice;
      location.reload();
      // console.log(deviceResult);
      
    }
  }); win.on('resize')

}); // $.getJSON();

})(jQuery);