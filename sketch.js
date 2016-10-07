setupGlobalVariables = function() {
  xRes = windowWidth;
  yRes = windowHeight;
  minRes = min( xRes , yRes );
  maxRes = max( xRes , yRes );
  maxD = 0.5*sqrt( xRes*xRes + yRes*yRes );
  fillAlpha = 50;
  centerColor = color( 232 , 11 , 66 , fillAlpha );
  outsideColor = color( 29 , 165 , 249 , fillAlpha );
  //outsideColor = color( 27 , 25 , 150 , fillAlpha );
  minColorWiggle = 0.25;
  maxColorWiggle = 0.5;
  minRad = 0.01*minRes;
  sdRad = 0.05*minRes;
  dotsPerFrame = 100;
}

function setup() {
  setupGlobalVariables();
  createCanvas( xRes , yRes );
  background( 255 , 255 , 255 );
}

function draw() {
  for( var i = 0 ; i < dotsPerFrame ; i++ ) {
    var x = random( 0 , xRes );
    var y = random( 0 , yRes );
    var dx = abs( x - 0.5*xRes );
    var dy = abs( y - 0.5*yRes );
    var d = sqrt( dx*dx + dy*dy );
    var dRatio =  d*d / (maxD*maxD);
    //dRatio *= dRatio;
    var rColor = lerpColor( centerColor , outsideColor , dRatio );
    var drawColor = lerpColor( centerColor , outsideColor , dRatio );
    var randColor = color( random( 0 , 255) , random( 0 , 255) , random( 0 , 255) );
    var colorWiggle =  random( minColorWiggle , minColorWiggle );
    drawColor = lerpColor( drawColor , randColor , colorWiggle );
    var r = minRad + abs( randomGaussian( 0 , sdRad ) );
    fill( drawColor );
    ellipse( x , y , r );
  }
}

function keyTyped() {
  if( key === 's' ) {
    saveCanvas( 'canvas' , 'jpg' );
    console.log("saved");
  }
}
