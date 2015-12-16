var game = new Phaser.Game(950, 500, Phaser.AUTO, 'crazyUnicorn');

var PhaserGame = function () {
    this.background = null;
    this.player = null;
};

PhaserGame.Boot = function(game) {};

PhaserGame.Boot.prototype = {
    init: function () {

        this.game.renderer.renderSession.roundPixels = true;
        this.physics.startSystem(Phaser.Physics.ARCADE);

    },
    preload: function() {

		this.load.image('level-1',   'assets/img/fond_niveau1.png');
		this.load.image('player',      'assets/img/licorne.png');

	},
	create: function() {

        // Set the default time speed of the environment
        var timeSpeed = -100;

        // Create background
        this.level1 = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'level-1');
        this.level1.autoScroll(timeSpeed, 0);

        // Create player and place it middle left.
        var startingPos = new Phaser.Point( 10, (game.stage.height/2) - 20);
        this.player = this.add.sprite(startingPos.x, startingPos.y, 'player');

        // Enable graphic render
        this.physics.arcade.enable(this.player);

        // Cursor keys to move player
        this.cursors = this.input.keyboard.createCursorKeys();

    },
    update: function() {
        // Set velocity & movement speed of the player
        var playerSpeed = 100;
        this.player.body.velocity.set(0);

        // Move up and down method
        if (this.cursors.up.isDown)
        {
            this.player.body.velocity.y = this.player.body.velocity.y - playerSpeed;
        }
        else if (this.cursors.down.isDown)
        {
            this.player.body.velocity.y = this.player.body.velocity.y + playerSpeed;
        }

    }
};

game.state.add('Boot', PhaserGame.Boot);
game.state.start('Boot');
