/*
Unicorn.Preloader = function(game) {};
Unicorn.Preloader.prototype = {
	preload: function() {
		this.preloadBg = this.add.sprite((Unicorn._WIDTH-297)*0.5, (Unicorn._HEIGHT-145)*0.5, 'preloaderBg');
		this.preloadBar = this.add.sprite((Unicorn._WIDTH-158)*0.5, (Unicorn._HEIGHT-50)*0.5, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('ball', 				'assets/img/ball.png');
		this.load.image('hole', 				'assets/img/hole.png');
		this.load.image('element-w', 			'assets/img/element-w.png');
		this.load.image('element-h', 			'assets/img/element-h.png');
		this.load.image('panel', 				'assets/img/panel.png');
		this.load.image('title', 				'assets/img/title.png');
		this.load.image('button-pause', 		'assets/img/button-pause.png');
		this.load.image('screen-bg', 			'assets/img/screen-bg.png');
		this.load.image('screen-mainmenu', 		'assets/img/screen-mainmenu.png');
		this.load.image('screen-howtoplay', 	'assets/img/screen-howtoplay.png');
		this.load.image('border-horizontal', 	'assets/img/border-horizontal.png');
		this.load.image('border-vertical', 		'assets/img/border-vertical.png');

		this.load.spritesheet('button-audio', 	'assets/img/button-audio.png', 35, 35);
		this.load.spritesheet('button-start', 	'assets/img/button-start.png', 146, 51);

		this.load.audio('audio-bounce', ['assets/audio/bounce.ogg', 'assets/audio/bounce.mp3', 'assets/audio/bounce.m4a']);
	},
	create: function() {
		this.game.state.start('MainMenu');
	}
};
console.log('End of Preloader.js');
*/
