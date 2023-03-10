let slideIndexA = 1;
AshowSlides(slideIndexA);

function AplusSlides(n) {
  AshowSlides(slideIndexA += n);
}

function AcurrentSlide(n) {
  AshowSlides(slideIndexA = n);
}

function AshowSlides(n) {
  let i;
  let slides = document.getElementsByClassName("AmySlides");
  let dots = document.getElementsByClassName("dotA");
  if (n > slides.length) {slideIndexA = 1}    
  if (n < 1) {slideIndexA = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexA-1].style.display = "block";  
  dots[slideIndexA-1].className += " active";
}
  
  
  
//  ######################################## 
  
  
  // Get the elements with class="column"
  var elements = document.getElementsByClassName("column");
  
  // Declare a loop variable
  var i;
  
  // Full-width images
  function one() {
      for (i = 0; i < elements.length; i++) {
      elements[i].style.msFlex = "100%";  // IE10
      elements[i].style.flex = "100%";
    }
  }
  
  // Two images side by side
  function two() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.msFlex = "50%";  // IE10
      elements[i].style.flex = "50%";
    }
  }
  
  // Four images side by side
  function four() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.msFlex = "25%";  // IE10
      elements[i].style.flex = "25%";
    }
  }
  
  // Add active class to the current button (highlight it)
  var header = document.getElementById("myHeader");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("on");
      current[0].className = current[0].className.replace(" on", "").replace("on", "");
      this.className += " on";
    });
  }