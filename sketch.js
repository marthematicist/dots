setupGlobalVariables = function() {
  xRes = windowWidth;
  yRes = windowHeight;
  minRes = min( xRes , yRes );
  maxRes = max( xRes , yRes );
  
  fillAlpha = 50;
  
  topColor = color( 66, 158 , 244 , fillAlpha );
  bottomColor = color( 89 , 249 , 113 , fillAlpha );
  leftColor = color( 89 , 249 , 175 , fillAlpha );
  rightColor = color( 87 , 29 , 247 , fillAlpha );
  
  minColorWiggle = 0.25;
  maxColorWiggle = 0.5;
  
  minRad = 0.01*minRes;
  maxRad = 0.05*minRes;
}

function setup() {
  setupGlobalVariables();
  
  createCanvas( xRes , yRes );
  
  background( 255 , 255 , 255 );
}

function draw() {
  for( var i = 0 ; i < 10 ; i++ ) {
    var x = random( 0 , xRes );
    var y = random( 0 , yRes );
    var xRatio = x/xRes;
    var yRatio = y/yRes;


    var xColor = lerpColor( leftColor , rightColor , xRatio );
    var yColor = lerpColor( topColor , bottomColor , yRatio );
    var drawColor = lerpColor( xColor , yColor , 0.5 );
    var randColor = color( random( 0 , 255) , random( 0 , 255) , random( 0 , 255) );
    var colorWiggle =  random( minColorWiggle , minColorWiggle );
    drawColor = lerpColor( drawColor , randColor , colorWiggle );

    var r = random( minRad , maxRad );

    fill( drawColor );

    ellipse( x , y , r );
  }
}
