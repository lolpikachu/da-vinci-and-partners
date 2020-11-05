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



// new 

//Play with these numbers
var radius = 30;          //Circle radius
var weight = 3;           //Line thickness
var force = 4000;         //Displacement sphere radius
var maxDisplacement = 75; //Max displacement, Larger numbers mean shorter teather length
var circleDensity = 30;   //How many circles per row

var backgroundColor = 'rgb(107, 107, 107)';
var largeCircleColor = '#222222';
var mediumCircleColor = 'Blue';
var smallCircleColor = 'Orange';

var canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');

var height = document.getElementById("myCanvas").style.height;
var points = [];

var mouse = {
  x: undefined,
  y: undefined
};

canvas.margin = '0px';
canvas.style.backgroundColor = backgroundColor;


window.addEventListener("resize", init);
window.addEventListener("mousemove", function(event){
  mouse.x = event.x;
  mouse.y = event.y;
});
window.addEventListener("touchmove", function(event){
  mouse.x = event.touches[0].clientX;
  mouse.y = event.touches[0].clientY;
});
window.addEventListener("mousedown", function(){ force = -force; });
window.addEventListener("mouseup", function(){ force = -force; });


init();
animate();


function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  
  //Loop each one separately to layer the circles correctly
  for(var i=0; i<305; i++){
    points[i].update();
  }
  
  for(var i=0; i<305; i++){
    points[i].drawLarge();    //Grey
  }
  
  for(var i=0; i<305; i++){
    points[i].drawMedium();   //Blue
  }
  
  for(var i=0; i<305; i++){
    points[i].drawSmall();    //Red
  }
}


function Point(x, y, r){
  this.x = x;
  this.y = y;
  this.radius = 30;
  
  this.medium = {
    x: x,
    y: y,
    radius: 20
  };
  
  this.small = {
    x: x,
    y: y,
    radius: 10
  };
  
  
  this.drawLarge = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.strokeStyle = largeCircleColor;
    ctx.lineWidth = weight;
    ctx.stroke();
  };
  
  this.drawMedium = function(){
    ctx.beginPath();
    ctx.arc(this.medium.x, this.medium.y, this.medium.radius, 0, 2 * Math.PI, false);
    ctx.strokeStyle = mediumCircleColor;
    ctx.lineWidth = weight * (2/3);
    ctx.stroke();
  }
  
  this.drawSmall = function(){
    ctx.beginPath();
    ctx.arc(this.small.x, this.small.y, this.small.radius, 0, 2 * Math.PI, false);
    ctx.strokeStyle = smallCircleColor;
    ctx.lineWidth = weight * (1/3);
    ctx.stroke();
  }
  
  this.update = function(){
    var mx = mouse.x === undefined ? 10000 : mouse.x;
    var my = mouse.y === undefined ? 10000 : mouse.y;
    
    //Trig
    var mouseDist = Math.sqrt(Math.pow((mx - this.x), 2) + Math.pow((my - this.y), 2));
    mouseDist = mouseDist < maxDisplacement ? maxDisplacement : mouseDist;
    var angle = Math.atan( Math.abs(my - this.y) / Math.abs(mx - this.x) );
    var a = (force / mouseDist) * Math.sin(angle);
    var b = (force / mouseDist) * Math.cos(angle);
    
    if(mx > this.x){b = -b;}
    if(my > this.y){a = -a;}
    this.medium.x = this.x + b;
    this.medium.y = this.y + a;
    this.small.x = this.x + (b * 1.5);
    this.small.y = this.y + (a * 1.5);
  }
  
} //End Point


function init(){
  
  points = [];
  
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  
  var morePoints = true;
  var x = 0;
  var y = 0;
  var offset = false;
  var dx = window.innerWidth / circleDensity;
  dx = dx < radius ? radius : dx;
  var dy = 2 * radius;
    
  
  while(morePoints){    
    points.push(new Point(x, y, radius));
    x += dx;
    if(x >= window.innerWidth + 5){
      if(offset){
        x = 0;
      } else {
        x = .5 * dx;
      }
      
      offset = !offset;
      y += dy;
    }
    
    if(y > window.innerHeight){
      morePoints = false;
    }
    
  }
  
}


