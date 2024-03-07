/* Animated cursor
 * source: https://css-tricks.com/using-css-cursors/
 */

(function() {

    var follower = document.getElementById('follower');

    var mouseX = (function(_this) {
        return function(event) {
            return event.clientX;
        };
    })(this);

    var mouseY = (function(_this) {
        return function(event) {
            return event.clientY;
        };
    })(this);

    var positionElement = (function(_this) {
        return function(event) {
            var mouse;
            mouse = {
                x: mouseX(event),
                y: mouseY(event)
            };
            follower.style.top = mouse.y + 'px';
            return follower.style.left = mouse.x + 'px';
        };
    })(this);

    var timer = false;
    var init;

    window.onmousemove = init = (function(_this) {
        return function(event) {
            var _event;
            _event = event;
            return timer = setTimeout(function() {
                return positionElement(_event);
            }, 1);
        };
    })(this);

}).call(this);

var cursorShow = function (cursorType) {
    $('#cursor').addClass(cursorType);
};
var cursorHide = function (cursorType) {
    $('#cursor').removeClass(cursorType);
};
