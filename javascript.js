var myIndex = 0;

detectmob();


     function self()
    { 
   alert("You have selected this page and Please try for other.");
    }
    function self_chinese()
    { 
   alert(" 您正在此頁，請更換頁面.");
    }
  function detectmob() {
    var w=window.outerWidth;
    var h=window.outerHeight;
    
   if (w>500) 
   {
   // alert("456 PC width is "+w+"  height is "+h);
    var head = document.getElementsByTagName('head')[0],
   link = document.createElement('link');
   link.type = 'text/css';
   link.rel = 'stylesheet';
   link.href = "navigation_bar.css";
   head.appendChild(link);
   
   return link;
  } 
  
  else {
    // alert("456 Mobile width is "+w+"  height is "+h);
     
      /*var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", "mobile_nav.css")*/
      //  loadjscssfile("mobile_nav.css", "css") ////dynamically load and add this .css file
//  function loadcss(url) {

  //load from mobile_nav de css if width is mobile size
   var head = document.getElementsByTagName('head')[0],
   link = document.createElement('link');
   link.type = 'text/css';
   link.rel = 'stylesheet';
   link.href = "mobile_nav.css";
   head.appendChild(link);
   alert("11pm");
   return link;
// }
 
  }
//api kEY =AIzaSyDztzwRineYoWM2dnl3ki4Q8jYNJ6SmfSE
}
/*
(click button text script)
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

*/