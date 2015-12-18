/**
 *
 * 2. Pre-Loader
 *
 **/

PhaserGame.Preloader = function(game) {};

PhaserGame.Preloader.prototype = {
	preload: function() {

        // Preload Bar
        this.preloadBar = this.add.sprite((PhaserGame.width*0.5)-131.5, (PhaserGame.height*0.5)-58, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);

        /** Level **/
        this.load.image('player',                   'assets/img/game/unicorn.png');
        this.load.image('speed_effect',             'assets/img/game/speed_effect.png');
        this.load.image('bg_stage_1',               'assets/img/game/background/background_stage_1.png');
        this.load.image('bg_stage_2',               'assets/img/game/background/background_stage_2.png');

        /** Enemy **/
        this.load.image('enemy_1',                  'assets/img/game/enemy/avion-ligne.png');
        this.load.image('enemy_2',                  'assets/img/game/enemy/helico.png');
        this.load.image('enemy_3',                  'assets/img/game/enemy/montgolfiere.png');
        this.load.image('enemy_4',                  'assets/img/game/enemy/petit-avion.png');
        this.load.image('enemy_5',                  'assets/img/game/enemy/soucoupe-1.png');

        /** Mapmonde **/
        this.load.image('stage',                    'assets/img/menu/stage.png');
        this.load.image('worldmap_0',               'assets/img/menu/worldmap/worldmap1-1.png');
        this.load.image('worldmap_1',               'assets/img/menu/worldmap/worldmap1-2.png');
        this.load.image('worldmap_2',               'assets/img/menu/worldmap/worldmap2-3.png');
        this.load.image('worldmap_3',               'assets/img/menu/worldmap/worldmap3-4.png');
        this.load.image('worldmap_4',               'assets/img/menu/worldmap/worldmap4-5.png');

        /** Menu **/
        this.load.image('menu-background',          'assets/img/menu/menu-background.png');
        this.load.image('mainMenu',                 'assets/img/menu/main_menu.png');
        // spritesheet: function (key, url, frameWidth, frameHeight, frameMax, margin, spacing)
        this.load.spritesheet('button-start',       'assets/img/menu/btn-start.png',    425, 82);
        this.load.spritesheet('button-score',       'assets/img/menu/btn-score.png',    425, 82);
        this.load.spritesheet('button-controls',    'assets/img/menu/btn-controls.png', 425, 82);
        this.load.spritesheet('button-credits',     'assets/img/menu/btn-credits.png',  425, 82);
        this.load.image('howToPlay',                'assets/img/menu/how_to_play.png');
        this.load.image('credits',                  'assets/img/menu/credit.png');

        /** Story Quest **/
        // this.load.image('img name',   'path/to/file');

    },
	create: function() {

        this.game.state.start('Game');
	}
};

game.state.add('Preloader', PhaserGame.Preloader);
