var myIndex = 0;
carousel();
detectmob();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); /*秒數變換*/
    }
     function self()
    { 
   alert("You have selected this page and Please try for other.");
    }
    function self_chinese()
    { 
   alert(" 您正在此頁，請更換頁面.");
    }
  function detectmob() {
    var w=window.innerWidth;
    var h=window.innerHeight;
    
   if(h<1000) 
   {
    alert("walao PC width is "+w+"  height is "+h);
   
   } else {
     alert("walao Mobile width is "+w+"  height is "+h);
     document.getElementById("change").style.height="10%";
     document.getElementById("change").style.fontSize="0.5em";
     document.getElementById("change_table").style.fontSize="0.5em";
     document.getElementById("change_table").style.height="50%";
     
   }
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