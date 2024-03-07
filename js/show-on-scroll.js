/* show-on-scroll.js
 *
 * https://cssanimation.rocks/scroll-animations/
 */

// Detect request animation frame

var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
var followerToShow = document.querySelector('#home-landing-page');
var follower = document.getElementById('follower');

function loop() {

  // show project img and change background-color
  let bgColor = 'transparent';
  Array.prototype.forEach.call(elementsToShow, function(element){
    let elementPic = 'img-' + element.id;
    let elementId = element.id.slice(5);
    if (isElementInViewport(element)) {
      switch (elementId) {
        case 'myoncare' : 
          bgColor = '#FAE9F1';
          break;
        case 'shareco' :
          bgColor = '#FDF0E9';
          break;
        case 'yumiwi' :
          bgColor = '#FAEDEC';
          break;
        default :
          bgColor = 'transparent';
      }
      document.getElementById(elementPic).classList.add('is-visible');
    } else {
      document.getElementById(elementPic).classList.remove('is-visible');
    }
  });
  document.body.style.backgroundColor = bgColor;

  // show follower on landing page even in mobile
  /*
  var width = window.innerWidth;
  if (width < 420 && !isElementInViewport(followerToShow)) {
    $('#follower').hide();
  } else {
    $('#follower').show();
  }
  */

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}