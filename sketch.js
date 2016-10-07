setupGlobalVariables = function() {
  xRes = windowWidth;
  yRes = windowHeight;
  minRes = min( xRes , yRes );
  maxRes = max( xRes , yRes );
  xHalf = xRes*0.5;
  yHalf = yRes*0.5;
  maxD = 0.5*sqrt( xRes*xRes + yRes*yRes );
  
  //console.log( xRes , yRes , maxRad );

  
  fillAlpha = 50;
  
  topColor = color( 66, 158 , 244 , fillAlpha );
  bottomColor = color( 89 , 249 , 113 , fillAlpha );
  leftColor = color( 89 , 249 , 175 , fillAlpha );
  rightColor = color( 87 , 29 , 247 , fillAlpha );
  centerColor = color( 232 , 11 , 66 , fillAlpha );
  outsideColor = color( 27 , 25 , 150 , fillAlpha );
  
  minColorWiggle = 0.25;
  maxColorWiggle = 0.5;
  
  minRad = 0.01*minRes;
  maxRad = 0.05*minRes;
  
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
    var xRatio = x/xRes;
    var yRatio = y/yRes;
    var dx = abs( x - xHalf );
    var dy = abs( y - yHalf );
    var d = sqrt( dx*dx + dy*dy );
    var dRatio = d / maxD;
    //console.log( dRatio , d , maxRad );


    var xColor = lerpColor( leftColor , rightColor , xRatio );
    var yColor = lerpColor( topColor , bottomColor , yRatio );
    var rColor = lerpColor( centerColor , outsideColor , dRatio );
    var drawColor = lerpColor( centerColor , outsideColor , dRatio );
    //drawColor = lerpColor( drawColor , rColor , 0.5 );
    var randColor = color( random( 0 , 255) , random( 0 , 255) , random( 0 , 255) );
    var colorWiggle =  random( minColorWiggle , minColorWiggle );
    drawColor = lerpColor( drawColor , randColor , colorWiggle );

    var r = minRad + abs( randomGaussian( 0 , maxRad ) );

    fill( drawColor );

    ellipse( x , y , r );
  }
}
