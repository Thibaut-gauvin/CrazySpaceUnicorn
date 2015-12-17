/**
 *
 * 1. Boot
 *
 **/

var width = 950;
var height = 500;

var game = new Phaser.Game(width, height, Phaser.AUTO, 'crazyUnicorn');

var PhaserGame = {
    timeSpeed: -300,
    playerSpeed: 300,

    width: width,
    height: height,
    stage: 0
};

PhaserGame.Boot = function(game) {};

PhaserGame.Boot.prototype = {
    preload: function() {

        this.game.renderer.renderSession.roundPixels = true;
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.load.image('preloaderBar', 'assets/img/menu/rainbow.png');
	},
	create: function() {

        this.game.state.start('Preloader');
    }
};

game.state.add('Boot', PhaserGame.Boot);
game.state.start('Boot');

console.log('End of Boot.js');
