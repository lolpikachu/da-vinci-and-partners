// background color chnage on scroll 
$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });    

}).scroll();
// END background color chnage on scroll 


/* JavaScript Night Mode */ 
$( ".egg-input" ).click(function() {
  $( ".egg-label" ).toggleClass('white'),
  $( "body" ).toggleClass('body-dark'),
  $( ".Night-black" ).toggleClass('Night-white'),
  $( "p" ).toggleClass('white'),
  $( "h1" ).toggleClass('white');
  // $("#switch").text('Switch off');
  
});

$( ".ham-input" ).click(function() {
  $( ".pre-header-div" ).toggleClass('pre-header-div-on'),
  $( ".side-menu" ).toggleClass('hamburger-on');
});

function myFunction(x) {
  x.classList.toggle("change");
}





