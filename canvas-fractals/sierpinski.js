    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  

// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

var canvas, context, startx, starty, sidelen;
param1 = 0;

init();
animate(200, 100, 100, new Date ());

function init() {
    canvas = document.getElementById('tutorial');
    context = canvas.getContext( '2d' );
    paintDownTriangle(context);
}

function paintDownTriangle(ctx)
{
		ctx.beginPath();
		ctx.moveTo(100,100);
		ctx.lineTo(300,100);
		ctx.lineTo(200,300);
		ctx.closePath();
		ctx.stroke();
}

function animate(startx, starty, sidelen, lastFrame) {
    if(sidelen > 4){
    var now = new Date();
    var deltaT = now - lastFrame;
    if (deltaT > 500){
    requestAnimFrame( function () {	animate (startx - sidelen/2, starty, sidelen/2, now);
					animate (startx + sidelen/2, starty, sidelen/2, now);
					animate (startx, starty + sidelen, sidelen/2, now);
	} );
    draw(startx, starty, sidelen);
} else {
	requestAnimFrame( function () {animate (startx, starty, sidelen, lastFrame)});
}  

}
}


function draw(startx, starty, sidelen) {
    console.log(sidelen);
    context.beginPath();
    context.moveTo(startx, starty);
    context.lineTo(startx - sidelen/2, starty + sidelen);
    context.lineTo(startx + sidelen/2, starty + sidelen);
    context.closePath();
    context.stroke();
}
