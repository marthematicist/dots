setupGlobalVariables = function() {
  xRes = windowWidth;
  yRes = windowHeight;
  minRes = min( xRes , yRes );
  maxRes = max( xRes , yRes );
  
  topColor = color( 66, 158 ,244 );
  bottomColor = color( 89 , 249 , 113 );
  leftColor = color( 89 , 249 , 175 );
  rightColor = color( 87 , 29 , 247 );
  
  minRad = 0.05*minRes;
  maxRad = 0.15*minRes;
}

function setup() {
  setupGlobalVariables();
  
  createCanvas( xRes , yRes );
  
  background( 255 , 255 , 255 );
}

function draw() {
  var x = random( 0 , xRes );
  var y = random( 0 , yRes );
  var xRatio = x/xRes;
  var yRatio = y/yRes;
  
  var xColor = lerpColor( leftColor , rightColor , xRatio );
  var yColor = lerpColor( topColor , bottomColor , yRatio );
  var drawColor = lerpColor( xColor , yColor , 0.5 );
  
  var r = random( minRad , maxRad );
  
  fill( drawColor );
  
  ellipse( x , y , r );
}
