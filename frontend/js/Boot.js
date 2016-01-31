/**
 *
 * 1. Boot
 *
 **/

var width = 1400/1.5;
var height = 980/1.5;

var game = new Phaser.Game(width, height, Phaser.AUTO, 'crazyUnicorn');

var PhaserGame = {
    timeSpeed: -300,
    playerSpeed: 300,

    width: width,
    height: height,

    selectedStage: 0,
    lastCompletedStage: 0,
    totalStage: 5,
    timeToCompleteLevel: 25,

    levelScore: 0,
    TotalScore: 0,

    EnemyGenerationRate: 2
};

PhaserGame.Boot = function(game) {};

PhaserGame.Boot.prototype = {
    preload: function() {

        this.game.renderer.renderSession.roundPixels = true;
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.setImpactEvents(true);
        this.game.physics.p2.restitution = 0.8;

        this.load.image('preloaderBar', 'assets/img/menu/rainbow.png');
	},
	create: function() {

        this.game.state.start('Preloader');
    }
};

game.state.add('Boot', PhaserGame.Boot);
game.state.start('Boot');
