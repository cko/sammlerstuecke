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
}



function animate(startx, starty, sidelen, lastFrame) {
    if(sidelen > 4){
    var now = new Date();
    var deltaT = now - lastFrame;
    //if (deltaT > 500){
    //requestAnimFrame( function () {	animate (startx - sidelen/2, starty, sidelen/2, now);
    //					animate (startx + sidelen/2, starty, sidelen/2, now);
    //					animate (startx, starty + sidelen, sidelen/2, now);
    //	} );
    context.translate(300, 300);
    drawSquareWithTriangle (0,0,60,60);
} else {
	requestAnimFrame( function () {animate (startx, starty, sidelen, lastFrame)});
}  

//}
}

function drawSquareWithTriangle(startx, starty, sidelenx, sideleny) {
    console.log(sidelenx);
    context.strokeRect(startx,starty, sidelenx, -sideleny);
    context.beginPath();
    
    context.moveTo(startx, starty - sideleny);
    context.lineTo(startx + sidelenx, starty - sideleny );
    context.lineTo(startx + sidelenx/2, -starty - 1.5 * sideleny);
    context.closePath();
    context.stroke();

    context.save();
    if (sidelenx > 0) {
      context.translate(startx, - sideleny );
    } else {
       context.translate(startx + sidelenx, starty - sideleny );
    }
    context.rotate(-0.749); 
    
    if (Math.abs(sidelenx) > 2){
    	drawSquareWithTriangle(0, 0, Math.sqrt( sidelenx * sidelenx / 2 ),Math.sqrt( sidelenx * sidelenx / 2 )   )
    }
    context.restore();

    context.save();
    if (sidelenx > 0){
	context.translate(startx + sidelenx, - sideleny );
    } else {
       context.translate(startx , - sideleny );
    }
    context.rotate(0.749);    
     if (Math.abs(sidelenx) > 2){
    	drawSquareWithTriangle(0, 0, -Math.sqrt( sidelenx * sidelenx / 2 ), Math.sqrt( sideleny * sideleny / 2 ) )
    }

	context.restore();
}
