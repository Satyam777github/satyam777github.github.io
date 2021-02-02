function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "anim") {
    x.className += " responsive";
  } else {
    x.className = "anim";
  }
}
