fadeElements = [
  "#main-head div, #main-head img",
  "#main-landing h2",
  "#main-landing h3",
  "#main-landing h4, #contact a, #copyright"
];

var delayedFade = function(item, time) {
  $(item).fadeIn(time);
};

$( document ).ready( function() {
  for(var i = 0; i<fadeElements.length; i++) {
    delayedFade(fadeElements[i], (i+2)*1000)
  };
});
