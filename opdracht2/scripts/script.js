// JavaScript Document
window.scrollTo(0,0);

var carouselItem = document.getElementsByClassName('item');

for (var i = 0; i < carouselItem.length; i++) {
  console.log(carouselItem[i]);

  carouselItem[i].addEventListener("click", function() {
    // console.log(this.classList);
  })
}




var banen = document.getElementsByClassName('baan');
var scorecontainer = document.getElementsByClassName('scorecontainer')[0];
var close = document.getElementsByClassName('close')[0];

for (var i = 0; i < banen.length; i++) {
  banen[i].addEventListener("click", function() {
    showScore(true);
  })
}

close.addEventListener("click", function() {
  showScore(false);
})


function showScore(i) {
  if (i) {
    scorecontainer.style.top = 0;
    document.body.style.overflow = "auto";
  }
  else {
    scorecontainer.style.top = "60%";
    document.body.style.overflow = "hidden";
    window.scrollTo(0,0);
  }
}

//
// var c
// let cars = [
//   {
//     "color": "purple",
//     "type": "minivan",
//     "registration": new Date('2017-01-03'),
//     "capacity": 7
//   },
//   {
//     "color": "red",
//     "type": "station wagon",
//     "registration": new Date('2018-03-03'),
//     "capacity": 5
//   },
//   {
//     ...
//   },
//   ...
// ]
