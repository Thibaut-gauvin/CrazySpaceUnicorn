/**
 *
 * 2. Pre-Loader
 *
 **/

PhaserGame.Preloader = function(game) {};

PhaserGame.Preloader.prototype = {
	preload: function() {

        // Barre de chargement
        var preloadbarPos = new Phaser.Point( (game.stage.height/2) - 131.5, (game.stage.height/2) - 58);
        this.preloadBar = this.add.sprite(preloadbarPos.x, preloadbarPos.y, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);

        /** Level **/
        this.load.image('bg_stage_1',       'assets/img/game/background_stage_1.png');
        this.load.image('bg_stage_1',       'assets/img/game/background_stage_2.png');
        this.load.image('player',           'assets/img/game/unicorn.png');

        /** Mapmonde **/
        this.load.image('worldmap',         'assets/img/menu/worldmap.png');
        this.load.image('stage',            'assets/img/menu/stage.png');

        /** Menu **/
        this.load.image('menuBackground',   'assets/img/menu/menu_background.jpg');
        this.load.image('mainMenu',         'assets/img/menu/main_menu.png');

        /** Story Quest **/
        // this.load.image('img name',   'path/to/file');

	},
	create: function() {

        this.game.state.start('MainMenu');
	}
};

game.state.add('Preloader', PhaserGame.Preloader);

console.log('End of Preloader.js');
