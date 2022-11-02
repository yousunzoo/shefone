const aOpacityTop = document.querySelectorAll(".a-OpacityTop");
const aOpacity = document.querySelectorAll(".a-Opacity");
const aClip = document.querySelectorAll(".a-Clip");
aOpacityTop.forEach(function (opT) {
  new ScrollMagic.Scene({
    triggerElement: opT,
    triggerHook: 0.8,
  })
    .setClassToggle(opT, "is-OpacityTop")
    .addTo(new ScrollMagic.Controller());
});
aOpacity.forEach(function (opT) {
  new ScrollMagic.Scene({
    triggerElement: opT,
    triggerHook: 0.8,
  })
    .setClassToggle(opT, "is-Opacity")
    .addTo(new ScrollMagic.Controller());
});
aClip.forEach(function (clip) {
  new ScrollMagic.Scene({
    triggerElement: clip,
    triggerHook: 0.8,
  })
    .setClassToggle(clip, "is-Clip")
    .addTo(new ScrollMagic.Controller());
});
