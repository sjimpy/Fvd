// JavaScript Document
var carouselItem = document.getElementsByClassName('item');

for (var i = 0; i < carouselItem.length; i++) {
  console.log(carouselItem[i]);

  carouselItem[i].addEventListener("click", function() {
    // console.log(this.classList);
  })
}
