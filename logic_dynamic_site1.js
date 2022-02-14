$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".navbar").css("background" , "white");
          $(".navbar").css("transition" , "background 500ms ease-in-out");
          $(".navbar").css("box-shadow" , "rgba(0, 0, 0, 0.24) 0px 3px 8px;");
          if($("#logo_white") !== null){
            $("#logo_white").css("filter", "invert(0%)");
            $("#logo_white").css("-webkit-filter", "invert(0%)");
          }
          $(".nav-item a:link").css("color", "#000");
        }
        else{
          $(".navbar").css("background" , "transparent");
            if($("#logo_white") !== null){
              $("#logo_white").css("filter", "invert(100%)");
              $("#logo_white").css("-webkit-filter", "invert(100%)");
            }
            $(".nav-item a:link").css("color", "white");
        }
    })
})

var scrollTopBtn = document.getElementById("scroll-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.scrollingElement.scrollTop > 20) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  }
function topfunction(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

document.addEventListener("DOMContentLoaded", function(){
  if (window.innerWidth > 992) {
  
    document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
  
      everyitem.addEventListener('mouseover', function(e){
  
        let el_link = this.querySelector('a[data-bs-toggle]');
  
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.add('show');
          nextEl.classList.add('show');
        }
  
      });
      everyitem.addEventListener('mouseleave', function(e){
        let el_link = this.querySelector('a[data-bs-toggle]');
  
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.remove('show');
          nextEl.classList.remove('show');
        }
  
  
      })
    });
  
  }
}); 