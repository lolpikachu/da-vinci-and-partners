const left = document.querySelector('#left')
const right = document.querySelector('#right')

window.addEventListener("mousemove", (e) => {
 left.style.setProperty('--distance-left', e.offsetX / 3 + "px")
 right.style.setProperty('--distance-right', -e.offsetX / 3 + "px")
});

var current = $(window).scrollTop();
var total = $(window).height() - current;
var ele = $(".left");
var currPosition = ele.position().left + 320;
var trackLength = 300;
$(window).scroll(function (event) {
    current = $(window).scrollTop();
    var newPosition = trackLength * (current/total)
    ele.css({left:currPosition+newPosition+'px'});
});