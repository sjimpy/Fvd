// JavaScript Document
window.scrollTo(0,0);

var parcours = [
  {
    "name": "Mushroom Cup",
    "course1": "Mario Kart Stadium",
    "course2": "Water Park",
    "course3": "Sweet Sweet Canyon",
    "course4": "Thwomp Ruins"
  },
  {
    "name": "Flower Cup",
    "course1": "Mario Circuit",
    "course2": "Toad Harbor",
    "course3": "Twisted Mansion",
    "course4": "Shy Guy Falls"
  },
  {
    "name": "Star Cup",
    "course1": "Sunshine Airport",
    "course2": "Dolphin Shoals",
    "course3": "Electrodrome",
    "course4": "Mount Wario"
  },
  {
    "name": "Special Cup",
    "course1": "Cloudtop Cruise",
    "course2": "Bone Dry Dunes",
    "course3": "Bowser's Castle",
    "course4": "Rainbow Road"
  },
  {
    "name": "Shell Cup",
    "course1": "Moo Moo Meadows",
    "course2": "Mario Circuit",
    "course3": "Cheep Cheep Beach",
    "course4": "Toad's Turnpike"
  },
  {
    "name": "Banana Cup",
    "course1": "Dry Dry Desert",
    "course2": "Donut Plains 3",
    "course3": "Royal Raceway ",
    "course4": "DK Jungle"
  },
  {
    "name": "Leaf Cup",
    "course1": "Wario Stadium",
    "course2": "Sherbet Land",
    "course3": "Music Park",
    "course4": "Yoshi Valley"
  },
  {
    "name": "Lightning Cup",
    "course1": "Tick-Tock Clock",
    "course2": "Piranha Plant Slide",
    "course3": "Grumble Volcano",
    "course4": "Rainbow Road"
  },
  {
    "name": "Egg Cup",
    "course1": "Yoshi Circuit",
    "course2": "Excitebike Arena",
    "course3": "Dragon Driftway",
    "course4": "Mute City"
  },
  {
    "name": "Triforce Cup",
    "course1": "Wario's Gold Mine",
    "course2": "Rainbow Road",
    "course3": "Ice Ice Outpost",
    "course4": "Hyrule Circuit"
  },
  {
    "name": "Crossing Cup",
    "course1": "Baby Park",
    "course2": "Cheese Land",
    "course3": "Wild Woods",
    "course4": "Animal Crossing"
  },
  {
    "name": "Bell Cup",
    "course1": "Neo Bowser City",
    "course2": "Ribbon Road",
    "course3": "Super Bell Subway",
    "course4": "Big Blue"
  }
];
var cups;
if (getCookie('speedRecords')) {
  cups = JSON.parse(getCookie('speedRecords'));
}
else {
  cups = [
    {course:[
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]}
    ]},
    {course:[
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]}
    ]},
    {course:[
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]}
    ]},
    {course:[
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]}
    ]},
    {course:[
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]}
    ]},
    {course:[
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]}
    ]},
    {course:[
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]}
    ]},
    {course:[
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]}
    ]},
    {course:[
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]}
    ]},
    {course:[
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]}
    ]},
    {course:[
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]}
    ]},
    {course:[
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]},
      {records: [
      ]}
    ]}
  ];
}


var canSpin = true;
var title = document.querySelectorAll("h1")[0];
var banen = document.getElementsByClassName('baan');
var scorecontainer = document.getElementsByClassName('scorecontainer')[0];
var close = document.getElementsByClassName('close')[0];

var carousel = document.getElementsByClassName('carousel')[0];
var carouselPos = 0;
var carouselrotation = 0;

var scoreList = document.querySelectorAll("ol")[0];






close.addEventListener("click", function() {
  showScore(false);
})

document.addEventListener("keydown", function(i) {
  if (i.keyCode == '37') {
    prev();
  }
  else if (i.keyCode == '39') {
    next();
  }
})

var headerbutton  = document.getElementsByClassName('header')[0].querySelectorAll("button");
headerbutton[0].addEventListener("click", prev);
headerbutton[1].addEventListener("click", next);
document.getElementsByClassName('left')[0].addEventListener("click", prev);
document.getElementsByClassName('right')[0].addEventListener("click", next);

for (var i = 0; i < banen.length; i++) {
  banen[i].addEventListener("click", function() {
    showScore(true);
    changescore(this.classList[1]);
  })
}

function next() {
  if (canSpin) {
    carouselPos += 1;
    counterChecker();
    carouselrotation -= 30;
    carousel.style.transform = "rotateY(" + carouselrotation + "deg)";
    changeCarouselItems(carouselPos);
  }
}
function prev() {
  if (canSpin) {
    carouselPos -= 1;
    counterChecker();
    carouselrotation += 30;
    carousel.style.transform = "rotateY(" + carouselrotation + "deg)";
    changeCarouselItems(carouselPos);
  }
}

function counterChecker() {
  if (carouselPos > 11) {
    carouselPos = 0;
  }
  else if (carouselPos < 0) {
    carouselPos = 11;
  }
}

changeCarouselItems(carouselPos);
function changeCarouselItems(currentpos) {
  title.innerHTML = parcours[currentpos].name;

  banen[0].querySelectorAll('P')[0].innerHTML = "record: " + showHighest(cups[currentpos].course[0].records);
  banen[0].querySelectorAll('h2')[0].innerHTML = parcours[currentpos].course1;
  banen[0].style.backgroundImage = "linear-gradient(0deg, white 0%, white 100%), url(./images/" + currentpos + "_" + 1 + ".jpg)";
  banen[1].querySelectorAll('P')[0].innerHTML = "record: " + showHighest(cups[currentpos].course[1].records);
  banen[1].querySelectorAll('h2')[0].innerHTML = parcours[currentpos].course2;
  banen[1].style.backgroundImage = "linear-gradient(0deg, white 0%, white 100%), url(./images/" + currentpos + "_" + 2 + ".jpg)";
  banen[2].querySelectorAll('P')[0].innerHTML = "record: " + showHighest(cups[currentpos].course[2].records);
  banen[2].querySelectorAll('h2')[0].innerHTML = parcours[currentpos].course3;
  banen[2].style.backgroundImage = "linear-gradient(0deg, white 0%, white 100%), url(./images/" + currentpos + "_" + 3 + ".jpg)";
  banen[3].querySelectorAll('P')[0].innerHTML = "record: " + showHighest(cups[currentpos].course[3].records);
  banen[3].querySelectorAll('h2')[0].innerHTML = parcours[currentpos].course4;
  banen[3].style.backgroundImage = "linear-gradient(0deg, white 0%, white 100%), url(./images/" + currentpos + "_" + 4 + ".jpg)";
}

function showHighest(arr) {
  var maxScore = 99999;
  var inputCup = arr;

  for (var i = 0; i < inputCup.length; i++) {
      if (parseFloat(inputCup[i].time) < maxScore) {
          maxScore = inputCup[i].time;
      }
  }
  if (maxScore == 99999) {
    maxScore = "niet gezet";
  }
  return(maxScore);
}

var showScoreDiv = document.getElementsByClassName('scores')[0];
function showScore(i) {
  if (i) {
    showScoreDiv.style.display = "block";
    scorecontainer.style.top = 0;
    document.body.style.overflow = "auto";
    canSpin = false;
  }
  else {
    removeActiveMenu();
    scorecontainer.style.top = "60%";
    document.body.style.overflow = "hidden";
    window.scrollTo(0,0);
    setTimeout(function () {
          showScoreDiv.style.display = "none";
    }, 1100);
    canSpin = true;
  }
}

var clickedCourse;
var activeScores;
function changescore(geklikteBaan) {
  removeActiveMenu();
  if (geklikteBaan == "baan1") {
    clickedCourse = 0;
  }
  else if (geklikteBaan == "baan2") {
    clickedCourse = 1;
  }
  else if (geklikteBaan == "baan3") {
    clickedCourse = 2;
  }
  else if (geklikteBaan == "baan4") {
    clickedCourse = 3;
  }
  banen[clickedCourse].classList.add("active");
  activeScores = cups[carouselPos].course[clickedCourse].records;
  showScores();
}


function removeActiveMenu() {
  for (var i = 0; i < banen.length; i++) {
    banen[i].classList.remove("active");
  }
}

var radiobuttons = document.getElementsByName('sort');
for(radio in radiobuttons) {
    radiobuttons[radio].onclick = function() {
      showScores();
    }
}

function sortscore() {
  if (radiobuttons[0].checked) {
    activeScores.sort((a, b) => (a.time > b.time) ? 1 : -1);
  }
  else {
    activeScores.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }
}

function showScores(el, spn) {
  sortscore();
  scoreList.innerHTML = "";
  for (var i = 0; i < activeScores.length; i++) {
    el = document.createElement("LI");
    el.innerHTML = activeScores[i].name + ": ";
    spn = document.createElement("SPAN");
    spn.innerHTML = activeScores[i].time;
    el.appendChild(spn);
    scoreList.appendChild(el);
  }
  if (activeScores.length == 0) {
    el = document.createElement("P");
    el.innerHTML = "Er is nog geen highscore voor deze baan, ben jij de eerste?";
    scoreList.appendChild(el);
  }
}

var showform = document.getElementsByClassName('addscores')[0];
var closeform = document.getElementsByClassName("formcontainer")[0].querySelectorAll("button")[0];
showform.addEventListener("click", showForm);
closeform.addEventListener("click", hideForm);


function showForm() {
  document.getElementsByClassName("formcontainer")[0].style.display = "flex";
}
function hideForm() {
  document.getElementsByClassName("formcontainer")[0].style.display = "none";
}

var form = document.querySelectorAll("form")[0];
form.addEventListener('submit', function (event) {
  event.preventDefault();
  addNewTime();
  form.reset();
});

function addNewTime(obj, str) {
  obj = {};
  obj.name = form.name.value;
  obj.time = form.min.value + "." + form.sec.value;
  cups[carouselPos].course[clickedCourse].records.push(obj);
  str = JSON.stringify(cups);
  createCookie('speedRecords', JSON.stringify(cups));
  showScores();
  hideForm();
  changeCarouselItems(carouselPos);
}



// bron: https://stackoverflow.com/questions/4825683/how-do-i-create-and-read-a-value-from-cookie
function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    else {

    }
    return "";
}








// bron = https://gist.github.com/SleepWalker/da5636b1abcbaff48c4d
let touchstartX = 0;
   let touchstartY = 0;
   let touchendX = 0;
   let touchendY = 0;

   function handleGesture(touchstartX, touchstartY, touchendX, touchendY) {
       const delx = touchendX - touchstartX;
       const dely = touchendY - touchstartY;
       if(Math.abs(delx) > Math.abs(dely)){
           if(delx > 0) return "right"
           else return "left"
       }
       else if(Math.abs(delx) < Math.abs(dely)){
           if(dely > 0) return "down"
           else return "up"
       }
       else return "tap"
   }

const gestureZone = document.getElementsByClassName('carouselcontainer')[0];
   gestureZone.addEventListener('touchstart', function(event) {
       touchstartX = event.changedTouches[0].screenX;
       touchstartY = event.changedTouches[0].screenY;
   }, {passive: true});

   gestureZone.addEventListener('touchend', function(event) {
       touchendX = event.changedTouches[0].screenX;
       touchendY = event.changedTouches[0].screenY;
       var swipeDir = handleGesture(touchstartX, touchstartY, touchendX, touchendY);
       if (swipeDir == "left") {
        next();
       }
       else if (swipeDir == "right") {
        prev();
       }
   }, {passive: true});
