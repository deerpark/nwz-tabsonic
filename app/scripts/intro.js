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
	    blockBtn: [
	        ["0xFFFFFF", 60, 473.7, 100, 25, 3, 0, 0],
	        ["0xFFFFFF", 170, 473.7, 100, 25, 3, 0, 0],
	        ["0xFFFFFF", 280, 473.7, 100, 25, 3, 0, 0],
	        ["0xFFFFFF", 390, 473.7, 100, 25, 3, 0, 0]
	    ]
	},
	animation : [
		'countText'
	]
};
game.init = function() {
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

            game.viewBlock();
            game.viewCount();
            game.viewStartBtn();

            game.animation['countText'] = new TimelineLite({
                paused: true
            });
            game.animation['countText'].to(game.countText.position, 0.1, {
                y: '-=2'
            });
            game.animation['countText'].to(game.countText.position, 0.1, {
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

game.blockTexture = PIXI.Texture.fromImage('images/game/block.png');
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
game.viewBlock = function() {

    game.line = new PIXI.Graphics();
    game.line.lineStyle(2, 0x000000, 1);
    game.line.moveTo(0, 0);
    game.line.lineTo(450, 0);
    game.line.x = 0;
    game.line.y = 500;

    game.line2 = new PIXI.Graphics();
    game.line2.lineStyle(0.5, 0xFFFFFF, 0.3);
    game.line2.moveTo(0, 0);
    game.line2.lineTo(450, 0);
    game.line2.x = 0;
    game.line2.y = 500;
    game.line2.alpha = 0;

    game.vertical = new PIXI.Graphics();
    game.vertical.lineStyle(0.5, 0xffffff, 0.3);
    game.vertical.moveTo(115, 1);
    game.vertical.lineTo(115, 500);
    game.vertical.endFill();
    game.vertical.moveTo(225, 1);
    game.vertical.lineTo(225, 500);
    game.vertical.endFill();
    game.vertical.moveTo(335, 1);
    game.vertical.lineTo(335, 500);
    game.vertical.endFill();
    game.vertical.y = -500;

    game.blockBtn = [];
    game.blockBtnGroup = new PIXI.Container();
    for (var i in game.settings.blockBtn) {
        var b = game.settings.blockBtn;
        game.blockBtn[i] = new game.makeBlock(b[i][0], b[i][1], b[i][2], b[i][3], b[i][4], b[i][5], b[i][6], b[i][7], 1);
        game.blockBtn[i].alpha = 0;
        game.blockBtnGroup.addChild(game.blockBtn[i]);
    }
    app.stage.addChild(game.blockBtnGroup);


    app.stage.addChild(game.line);
    app.stage.addChild(game.line2);
    app.stage.addChild(game.vertical);
}
game.viewCount = function() {
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
    game.count = 0;
    game.countText = new PIXI.Text("0", style);
    game.countText.x = 400;
    game.countText.y = 540;
    game.countText.alpha = 0;
    game.countText.anchor.set(0.5);
    app.stage.addChild(game.countText);
}
game.viewStartBtn = function() {
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
    game.startBtn = new PIXI.Text("Start", style);
    game.startBtn.x = 400;
    game.startBtn.y = 540;
    game.startBtn.x = app.renderer.width / 2 - game.startBtn.width / 2;
    game.startBtn.y = app.renderer.height / 2 - game.startBtn.height / 2;
    game.startBtn.interactive = true;
    game.startBtn.buttonMode = true;
    game.startBtn.on('pointerdown', game.start);
    app.stage.addChild(game.startBtn);
}
game.start = function() {
    TweenLite.to(game.vertical, 1, {
        pixi: {
            y: 0
        }
    });
    TweenLite.to(game.startBtn, 0.5, {
        pixi: {
            alpha: 0
        },
        onComplete: function() {
            TweenLite.to(game.line2, 0.5, {
                pixi: {
                    alpha: 1
                },
                onComplete: function() {
                    TweenLite.to([game.blockBtn[0], game.blockBtn[1], game.blockBtn[2], game.blockBtn[3]], 1, {
                        pixi: {
                            alpha: 1
                        }
                    });
                    game.playDrop.start();
                }
            });
            TweenLite.to(game.countText, 0.5, {
                pixi: {
                    alpha: 1
                }
            });
        }
    });
}
game.blockCount = 0;
game.block = new Array();
game.blockDrop = new Array();
game.seedRandom = function(n) {
    var total, child;
    total = (Math.floor((Math.random() * n) + 1));
    return shuffleRandom(4).splice(total - 1, n);
}
game.blockSeed = function() {
    var rand, b = game.settings.block;
    if (Math.random() > 0.9995) {
        rand = 2;
    } else if (Math.random() > 0.985) {
        rand = 1;
    } else {
        rand = 0;
    }
    if (rand > 0) {
        game.block[game.blockCount] = new Array();
        var randromBlock = game.seedRandom(rand);
        for (var i = 0; i < rand; i++) {
            var o = randromBlock[i] - 1;
            //console.log(game.blockCount,rand,i,o,randromBlock);
            game.block[game.blockCount][i] = new game.makeBlock(b[o][0], b[o][1], b[o][2], b[o][3], b[o][4], b[o][5], b[o][6], b[o][7], 1);
            game.block[game.blockCount][i].tint = Math.random() * 0xFFFFFF;
            app.stage.addChild(game.block[game.blockCount][i]);
        }
        app.render(app.stage);
        game.blockCount++;
    }
    console.log(game.block.length);

    for (var _c in game.block) {
        game.blockDrop[_c] = new Array();
        for (var _i in game.block[_c]) {
            game.blockDrop[_c][_i] = new game.playDropAction(game.block[_c][_i], _c, _i);
            game.blockDrop[_c][_i]();
        }
    }
}
game.playDropAction = function(block, count, i) {
    var _this = this;
    return function() {
        if (!block.y) return;
        //console.log(count,i);
        _this.block = block;
        var b = _this.block;
        b.y += b.vy;
        if (isIntersecting(b, game.line)) {
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
                    /*game.blockDrop[count].splice(i,1);
                    game.block[count].splice(i,1);*/
                }
            });
            if (b.vy != b.ovy) {
                game.count++;
                game.countText.text = game.count;
                game.animation['countText'].restart();
            }
        }
    }
}
game.playDrop = (function() {
    var drop = PIXI.ticker.shared;
    drop.autoStart = false;
    drop.add(function(delta) {
        game.blockSeed();
    });
    drop.stop();
    return drop;
})();

game.init();

//})(jQuery, this);
