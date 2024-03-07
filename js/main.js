var width = $(window).innerWidth();
function ifReloading() {
  var hostname = window.location.hostname;
  var referrer = document.referrer;
  return !referrer || referrer.indexOf(hostname) == -1;
}
function hideNavbar() {
  if (width >= 992 && $('body').attr('id')=='home') {
    $('#nav').hide();
    $( document ).scroll(function(){
      setTimeout(function() { 
        $('#nav').show();
      }, 300);
    })
  } else if(width >= 768) {
    $('#nav').show();
  }
}

$(document).ready(function(){
  /* detect user language */
  var userLang = navigator.language || navigator.userLanguage;
  if (ifReloading() && userLang !== "de") {
    // TODO: only redirect to actual path, not home
    window.location = '/en/';
    //window.location.href = 'https://kjbondes.github.io/en/';
  }

  /* hide navbar while landing from screenM */
  hideNavbar();

  /* icon-menu toggle & body noscroll */
  $('#icon-menu').click(function(){
    $(this).toggleClass('open');
    var menuOpen = $(this).hasClass('open');
    $('#main-content').toggleClass('noscroll', menuOpen);
    $('#mobile-nav').scrollTop = 0;
    if (menuOpen) {
      $('#mobile-nav').css('position', 'static');
      $('#mobile-nav').css('min-height', '100%');
    } else {
      $('#mobile-nav').css('position', 'fixed');
      $('#mobile-nav').css('min-height', 'auto');
    }
  });
})

/* show nav when scroll up */
var prevScrollpos = $(window).scrollTop();
$(window).on('scroll', function() {
  var currentScrollPos = $(window).scrollTop();
  if (width < 992 && $('body').attr('id') == 'home') {
      if (currentScrollPos < '80') {
        $('#nav, #mobile-nav').css('top', '0');
      } else {
        $('#nav, #mobile-nav').css('top', '-100px');
        $('#nav, #mobile-nav').removeClass('nav-scrollup');
      }
  } else {
      if (currentScrollPos < '80') {
        $('#nav, #mobile-nav').css('top', '0');
        $('#nav, #mobile-nav').removeClass('nav-scrollup');
      } else if (prevScrollpos > currentScrollPos) {
        $('#nav, #mobile-nav').css('top', '0');
        $('#nav, #mobile-nav').addClass('nav-scrollup');
      } else {
        $('#nav, #mobile-nav').css('top', '-100px');
        $('#nav, #mobile-nav').removeClass('nav-scrollup');
      }
  }
  prevScrollpos = currentScrollPos;
})

function objectShow(objectID) { 
  $(objectID).show(); 
}
function objectHide(objectID) { 
  $(objectID).hide();
}