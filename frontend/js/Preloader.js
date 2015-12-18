/**
 *
 * 2. Pre-Loader
 *
 **/

PhaserGame.Preloader = function(game) {};

PhaserGame.Preloader.prototype = {
	preload: function() {

        // Barre de chargement
        this.preloadBar = this.add.sprite((PhaserGame.width*0.5)-131.5, (PhaserGame.height*0.5)-58, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);

        /** Level **/
        this.load.image('bg_stage_1',               'assets/img/game/background_stage_1.png');
        this.load.image('bg_stage_1',               'assets/img/game/background_stage_2.png');
        this.load.image('player',                   'assets/img/game/unicorn.png');

        /** Mapmonde **/
        this.load.image('worldmap_title',               'assets/img/menu/worldmap/worldmap.png');
        this.load.image('worldmap_0',               'assets/img/menu/worldmap/worldmap1-1.png');
        this.load.image('worldmap_1',               'assets/img/menu/worldmap/worldmap1-2.png');
        this.load.image('worldmap_2',               'assets/img/menu/worldmap/worldmap2-3.png');
        this.load.image('worldmap_3',               'assets/img/menu/worldmap/worldmap3-4.png');
        this.load.image('worldmap_4',               'assets/img/menu/worldmap/worldmap4-5.png');
        this.load.image('stage',                    'assets/img/menu/stage.png');

        /** Menu **/
        this.load.image('menuBackground',           'assets/img/menu/menu_background.jpg');
        this.load.image('menu-background',          'assets/img/menu/menu-background.png');
        this.load.image('mainMenu',                 'assets/img/menu/main_menu.png');
        this.load.spritesheet('button-start',       'assets/img/menu/btn-start.png', 425, 82);
        this.load.spritesheet('button-score',       'assets/img/menu/btn-score.png', 425, 82);
        this.load.spritesheet('button-controls',    'assets/img/menu/btn-controls.png', 425, 82);
        this.load.spritesheet('button-credits',     'assets/img/menu/btn-credits.png', 425, 82);
        this.load.image('howToPlay',                'assets/img/menu/how_to_play.png');
        this.load.image('credits',                  'assets/img/menu/credit.png');

        /** Scénario **/
        this.load.image('scene1',           'assets/img/scenario/scene1.png');
        this.load.image('scene2',           'assets/img/scenario/scene2.png');
        this.load.image('scene3',           'assets/img/scenario/scene3.png');
        this.load.image('scene4',           'assets/img/scenario/scene4.png');
        this.load.image('skip',           'assets/img/scenario/skip.png');

        /** Story Quest **/
        // this.load.image('img name',   'path/to/file');

    },
	create: function() {

        this.game.state.start('MainMenu');
	}
};

game.state.add('Preloader', PhaserGame.Preloader);

console.log('End of Preloader.js');
