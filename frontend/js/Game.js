/**
 *
 * 6. Game
 *
 **/

PhaserGame.Game = function(game) {};

PhaserGame.Game.prototype = {
    preload: function() {

        this.timer = 0;
        this.fontScore = { font: "24px Arial", fill: "#e4beef", align: "right" };
    },
    create: function() {

		// Create background
		this.level1 = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg_stage_1');
		this.level1.autoScroll(PhaserGame.timeSpeed, 0);

		// Create player and place it middle left.
		var startingPos = new Phaser.Point( 10, (game.stage.height/2) - 20);
		this.player = this.add.sprite(startingPos.x, startingPos.y, 'player');

		// Enable graphic render
		this.physics.arcade.enable(this.player);

		// Cursor keys to move player
		this.cursors = this.input.keyboard.createCursorKeys();

        /////////////////////////////////////////////////////////////////////////////////////////

        this.timerText = game.add.text(50, 20, "Time: "+this.timer, this.fontScore);
        this.timerText.anchor.set(0.5);
        this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
    },
	updateCounter: function() {

        this.timer++;
        this.timerText.setText("Time: "+this.timer);
	},
	update: function() {

		this.player.body.velocity.set(0);

		// Move up and down method
		if (this.cursors.up.isDown)
		{
			this.player.body.velocity.y = this.player.body.velocity.y - PhaserGame.playerSpeed;
		}
		else if (this.cursors.down.isDown)
		{
			this.player.body.velocity.y = this.player.body.velocity.y + PhaserGame.playerSpeed;
		}
	}
};

console.log('End of game.js');

game.state.add('Game', PhaserGame.Game);
