/*
var app = new PIXI.Application(450, 600, { antialias: true });
window.addEventListener("DOMContentLoaded", function(){
	document.body.appendChild(app.view);
}, false);

var GAME = GAME || {};

GAME.BackgroundElement = function(texture, y, owner)
{
  this.sprites = [];
  this.spriteWidth = texture.width-1;
  var amount = Math.ceil(940 / this.spriteWidth);
  if(amount < 3)amount = 3;
  
  for (var i=0; i < amount; i++) 
  {
    var sprite = new PIXI.Sprite(texture);
    sprite.position.y = y;
    owner.addChild(sprite);
    this.sprites.push(sprite);
  };  
          
  this.speed = 1;
}

var
rects = new PIXI.Container();
rect1 = new PIXI.Graphics(),
rect2 = new PIXI.Graphics(),
rect3 = new PIXI.Graphics(),
rect4 = new PIXI.Graphics(),
line = new PIXI.Graphics(),
style = new PIXI.TextStyle({
    fontSize: 36,
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440
}),
style2 = new PIXI.TextStyle({
    fontSize: 20,
    fontWeight: 'bold',
    fill: ['white', 'yellow'], // gradient
    stroke: 'red',
    strokeThickness: 2,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 3,
    dropShadowAngle: Math.PI / 2,
    dropShadowDistance: 3
}),
count = 0,
startText = new PIXI.Text('Start', style),
countText = new PIXI.Text("0", style2);

startText.x = app.renderer.width/2 - startText.width/2;
startText.y = app.renderer.height/2 - startText.height/2;
startText.interactive = true;
startText.buttonMode = true;
startText.on('pointerdown', onClick);

countText.x = 400;
countText.y = 540;

app.stage.addChild(startText);
app.stage.addChild(countText);

// draw a rounded rectangle
rect1.beginFill(0xFFFFFF, 1);
rect1.drawRoundedRect(10, -10, 100, 10, 3);
rect1.endFill();
rect1.vx = 1;
rect1.vy = 2;

// draw a rounded rectangle
rect2.beginFill(0xFFFFFF, 1);
rect2.drawRoundedRect(120, -10, 100, 10, 3);
rect2.endFill();
rect2.vx = 1;
rect2.vy = 10;

// draw a rounded rectangle
rect3.beginFill(0xFFFFFF, 1);
rect3.drawRoundedRect(230, -10, 100, 10, 3);
rect3.endFill();
rect3.vx = 1;
rect3.vy = 3;

// draw a rounded rectangle
rect4.beginFill(0xFFFFFF, 1);
rect4.drawRoundedRect(340, -10, 100, 10, 3);
rect4.endFill();
rect4.vx = 1;
rect4.vy = 5;

// draw a rounded rectangle
line.lineStyle(2, 0xFF3300, 1);
line.moveTo(0, 0);
line.lineTo(450, 0);
line.x = 0;
line.y = 500;
app.stage.addChild(line);

rects.addChild(rect1);
rects.addChild(rect2);
rects.addChild(rect3);
rects.addChild(rect4);
app.stage.addChild(rects);

function onClick () {
	startText.visible = false;
	drop.start();
}

var drop = PIXI.ticker.shared;
drop.autoStart = false;
drop.add(function(delta){
	rect1.y += rect1.vy;
	rect2.y += rect2.vy;
	rect3.y += rect3.vy;
	rect4.y += rect4.vy;
	if(rect1.y>500) {
		rect1.y = -10;
		count++;
		countText.text = count;
	}
	if(rect2.y>500) {
		rect2.y = -10;
		count++;
		countText.text = count;
	}
	if(rect3.y>500) {
		rect3.y = -10;
		count++;
		countText.text = count;
	}
	if(rect4.y>500) {
		rect4.y = -10;
		count++;
		countText.text = count;
	}
});
drop.stop();

function hitTestRectangle(r1, r2) {

  //Define the variables we'll need to calculate
  var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

  //hit will determine whether there's a collision
  hit = false;

  //Find the center points of each sprite
  r1.centerX = r1.x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  //Find the half-widths and half-heights of each sprite
  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  //Calculate the distance vector between the sprites
  vx = r1.centerX - r2.centerX;
  vy = r1.centerY - r2.centerY;

  //Figure out the combined half-widths and half-heights
  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  //Check for a collision on the x axis
  if (Math.abs(vx) < combinedHalfWidths) {

    //A collision might be occuring. Check for a collision on the y axis
    if (Math.abs(vy) < combinedHalfHeights) {

      //There's definitely a collision happening
      hit = true;
    } else {

      //There's no collision on the y axis
      hit = false;
    }
  } else {

    //There's no collision on the x axis
    hit = false;
  }

  //`hit` will be either `true` or `false`
  return hit;
};*/
