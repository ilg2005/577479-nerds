'use strict';

var isMouseInSlider = false;
var sliderListElement = $('.slider-list');

sliderListElement.mouseenter(function () {
  isMouseInSlider = true;
  console.log(isMouseInSlider);
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

