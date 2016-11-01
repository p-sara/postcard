var over = false;
var left = document.getElementById("left");
var right = document.getElementById("right");

function menu() {
  if (over==false) {
    left.classList.remove("hidden");
    left.classList.remove("fadeOutUpBig");
    left.classList.add("fadeInDownBig");
    right.classList.remove("hidden");
    right.classList.add("fadeInUpBig");
    right.classList.remove("fadeOutDownBig");
    over=true;
  }
  else {
    left.classList.add("fadeOutUpBig");
    left.classList.remove("fadeInDownBig");
    right.classList.add("fadeOutDownBig");
    right.classList.remove("fadeInUpBig");
    over = false;
  }
  
};