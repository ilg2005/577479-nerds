'use strict';

var isSliderClicked = false;
var sliderListElement = $('.slider-list');

sliderListElement.click(function () {
  isSliderClicked = true;
});

var slideIDs = $('input[type="radio"]').map(function () {
  return this.id;
}).get();

function clickSlide(slideId) {
  $('#' + slideId).trigger('click');
}

slideIDs.forEach(function (id, i) {
  setTimeout(function () {
    clickSlide(id);
  }, 1000 * ++i)
});

