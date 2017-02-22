//(function($, window){

var app = new PIXI.Application(450, 600, {
    antialias: true
});

var game = game || {
	settings : {
	    block: [
	        ["0xFFFFFF", 60, -25, 100, 25, 3, 1, 4],
	        ["0xFFFFFF", 170, -25, 100, 25, 3, 1, 4],
	        ["0xFFFFFF", 280, -25, 100, 25, 3, 1, 4],
	        ["0xFFFFFF", 390, -25, 100, 25, 3, 1, 4]
	    ],
	    collision: [
	        ["0xFFFFFF", 60, 473.7, 100, 25, 3, 0, 0],
	        ["0xFFFFFF", 170, 473.7, 100, 25, 3, 0, 0],
	        ["0xFFFFFF", 280, 473.7, 100, 25, 3, 0, 0],
	        ["0xFFFFFF", 390, 473.7, 100, 25, 3, 0, 0]
	    ]
	},
	animation : [
		'countText'
	],
	block : new Array(),
	blockDrop : new Array(),
	blockCount : 0,
	blockTexture : PIXI.Texture.fromImage('images/game/block.png')
};
game.init = function() {
	var _this = this;
    $(function() {
        $("body").append(app.view);
    });

    var loader = new PIXI.loaders.Loader();
    loader
        .add('blockImage', 'images/game/block.png')
        .once('progress', function() {
            console.log("All files loaded");
        })
        .load(function(loader, resources) {
 
            _this.displayBlock();
            _this.displayCount();
            _this.displayStartBtn();

            _this.animation['countText'] = new TimelineLite({
                paused: true
            });
            _this.animation['countText'].to(_this.countText.position, 0.1, {
                y: '-=2'
            });
            _this.animation['countText'].to(_this.countText.position, 0.1, {
                y: '+=2'
            });

            /*var boy = new PIXI.Sprite(resources.boy.texture);
            boy.x = app.renderer.width / 2;
            boy.y = app.renderer.height / 2;
            boy.anchor.x = 0.5;
            boy.anchor.y = 0.5;

            app.stage.addChild(boy);

            app.ticker.add(function() {
            	boy.rotation += 0.01;
            });*/

            app.render(app.stage);
        });
};
game.makeBlock = function(color, x, y, w, h, rds, vx, vy, rnd) {
    /*var grphcs = new PIXI.Graphics();
    grphcs.beginFill(color, 1);
    grphcs.drawRoundedRect(x, y, w, h, rds);
    grphcs.endFill();
    grphcs.vx = vx;
    grphcs.vy = vy;
    grphcs.tint = Math.random() * 0xFFFFFF;*/
    var grphcs = new PIXI.Sprite(game.blockTexture);
    grphcs.anchor.set(0.5);
    grphcs.x = x;
    grphcs.y = y;
    grphcs.vx = vx;
    grphcs.vy = vy;
    return grphcs;
}
game.displayBlock = function() {
	var _this = this;

    _this.line = new PIXI.Graphics();
    _this.line.lineStyle(2, 0x000000, 1);
    _this.line.moveTo(0, 0);
    _this.line.lineTo(450, 0);
    _this.line.x = 0;
    _this.line.y = 500;

    _this.line2 = new PIXI.Graphics();
    _this.line2.lineStyle(0.5, 0xFFFFFF, 0.3);
    _this.line2.moveTo(0, 0);
    _this.line2.lineTo(450, 0);
    _this.line2.x = 0;
    _this.line2.y = 500;
    _this.line2.alpha = 0;

    _this.vertical = new PIXI.Graphics();
    _this.vertical.lineStyle(0.5, 0xffffff, 0.3);
    _this.vertical.moveTo(115, 1);
    _this.vertical.lineTo(115, 500);
    _this.vertical.endFill();
    _this.vertical.moveTo(225, 1);
    _this.vertical.lineTo(225, 500);
    _this.vertical.endFill();
    _this.vertical.moveTo(335, 1);
    _this.vertical.lineTo(335, 500);
    _this.vertical.endFill();
    _this.vertical.y = -500;

    _this.collision = [];
    _this.collisionGroup = new PIXI.Container();
    for (var i in _this.settings.collision) {
        var b = _this.settings.collision;
        _this.collision[i] = new _this.makeBlock(b[i][0], b[i][1], b[i][2], b[i][3], b[i][4], b[i][5], b[i][6], b[i][7], 1);
        _this.collision[i].alpha = 0;
        _this.collisionGroup.addChild(_this.collision[i]);
    }
    app.stage.addChild(_this.collisionGroup);


    app.stage.addChild(_this.line);
    app.stage.addChild(_this.line2);
    app.stage.addChild(_this.vertical);
}
game.displayCount = function() {
	var _this = this;
    var style = new PIXI.TextStyle({
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
    });
    _this.count = 0;
    _this.countText = new PIXI.Text("0", style);
    _this.countText.x = 400;
    _this.countText.y = 540;
    _this.countText.alpha = 0;
    _this.countText.anchor.set(0.5);
    app.stage.addChild(_this.countText);
}
game.displayStartBtn = function() {
	var _this = this;
    var style = new PIXI.TextStyle({
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
    });
    _this.startBtn = new PIXI.Text("Start", style);
    _this.startBtn.x = 400;
    _this.startBtn.y = 540;
    _this.startBtn.x = app.renderer.width / 2 - _this.startBtn.width / 2;
    _this.startBtn.y = app.renderer.height / 2 - _this.startBtn.height / 2;
    _this.startBtn.interactive = true;
    _this.startBtn.buttonMode = true;
    _this.startBtn.on('pointerdown', _this.start.bind(_this));
    app.stage.addChild(_this.startBtn);
}
game.start = function() {
	var _this = this;
    TweenLite.to(_this.vertical, 1, {
        pixi: {
            y: 0
        }
    });
    TweenLite.to(_this.startBtn, 0.5, {
        pixi: {
            alpha: 0
        },
        onComplete: function() {
            TweenLite.to(_this.line2, 0.5, {
                pixi: {
                    alpha: 1
                },
                onComplete: function() {
                    TweenLite.to([_this.collision[0], _this.collision[1], _this.collision[2], _this.collision[3]], 1, {
                        pixi: {
                            alpha: 1
                        }
                    });
                    _this.playDrop.start();
                }
            });
            TweenLite.to(_this.countText, 0.5, {
                pixi: {
                    alpha: 1
                }
            });
        }
    });
}
game.seedRandom = function(n) {
    var total, child;
    total = (Math.floor((Math.random() * n) + 1));
    return shuffleRandom(4).splice(total - 1, n);
}
game.seedBlock = function() {
	var _this = this;
    var rand, b = _this.settings.block;
    if (Math.random() > 0.9995) {
        rand = 2;
    } else if (Math.random() > 0.985) {
        rand = 1;
    } else {
        rand = 0;
    }
    if (rand > 0) {
        _this.block[_this.blockCount] = new Array();
        var randromBlock = _this.seedRandom(rand);
        for (var i = 0; i < rand; i++) {
            var o = randromBlock[i] - 1;
            _this.block[_this.blockCount][i] = new _this.makeBlock(b[o][0], b[o][1], b[o][2], b[o][3], b[o][4], b[o][5], b[o][6], b[o][7], 1);
            _this.block[_this.blockCount][i].tint = Math.random() * 0xFFFFFF;
            app.stage.addChild(_this.block[_this.blockCount][i]);
        }
        app.render(app.stage);
        _this.blockCount++;
    }

    for (var _c in _this.block) {
        _this.blockDrop[_c] = new Array();
        for (var _i in _this.block[_c]) {
            _this.blockDrop[_c][_i] = new _this.playDropAction(_this.block[_c][_i], _c, _i,_this);
            _this.blockDrop[_c][_i]();
        }
    }
}
game.playDropAction = function(block, count, i,_this) {
    return function() {
        if (!block.y) return;
        var b = block;
        b.y += b.vy;
        if (isIntersecting(b, _this.line)) {
            b.ovy = b.vy;
            b.vy = 0;
            b.tint = 0xFFFFFF;
            TweenLite.to(b, 0.2, {
                pixi: {
                    alpha: 0,
                    scale: 2
                },
                onComplete: function() {
                    b.tint = Math.random() * 0xFFFFFF;
                    b.vy = b.ovy;
                    delete b;
                    /*_this.blockDrop[count].splice(i,1);
                    _this.block[count].splice(i,1);*/
                }
            });
            if (b.vy != b.ovy) {
                _this.count++;
                _this.countText.text = _this.count;
                _this.animation['countText'].restart();
            }
        }
    }
}
game.playDrop = (function() {
    var drop = PIXI.ticker.shared;
    drop.autoStart = false;
    drop.add(function(delta) {
        game.seedBlock();
    });
    drop.stop();
    return drop;
})();

game.init();

//})(jQuery, this);
