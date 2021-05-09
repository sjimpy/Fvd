window.addEventListener("resize", checkWindowSize);
var thunmbsticks = document.querySelectorAll("h2")[1];

checkWindowSize();
function checkWindowSize() {
  var secrion2 = document.querySelectorAll("section")[1];
  var sectionsize = secrion2.offsetWidth;

  secrion2.addEventListener("mousemove", function(obj) {
    var target = obj.target;
    var rect = target.getBoundingClientRect();

    var x = obj.clientX - rect.left;
    var y = obj.clientY - rect.top;
    xPercentage = x/sectionsize * 100;
    yPercentage = y/sectionsize * 100;

    if (xPercentage < 30) {
     if (yPercentage < 30) {
      thunmbsticks.className = "linksboven";
     }
     else if (yPercentage > 60) {
      thunmbsticks.className = "linksonder";
     }
     else {
      thunmbsticks.className = "linksmidden";
     }
    }
    else if (xPercentage > 60) {
      if (yPercentage < 30) {
        thunmbsticks.className = "rechtsboven";
      }
      else if (yPercentage > 60) {
        thunmbsticks.className = "rechtsonder";
      }
      else {
        thunmbsticks.className = "rechtsmidden";
      }
    }
    else {
      if (yPercentage < 30) {
        thunmbsticks.className = "middenboven";
      }
      else if (yPercentage > 60) {
        thunmbsticks.className = "middenonder";
      }
      else {
        thunmbsticks.className = "middenmidden";
      }
    }
  })
}
