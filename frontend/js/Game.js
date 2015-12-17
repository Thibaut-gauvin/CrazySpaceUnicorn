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
        var startingPos = new Phaser.Point( 50, (game.stage.height/2) - 20);
        this.player = this.add.sprite(startingPos.x, startingPos.y, 'player');
        this.player.scale.set(1);
        this.player.smoothed = false;

        // Create our physics body.
        game.physics.p2.enable(this.player);
        this.player.body.setRectangle(102, 89);

        // This boolean controls if the player should collide with the world bounds or not
        this.player.body.collideWorldBounds = true;


        /////////////////////////////////////

        // Create enemy generator
        // game.time.events.loop(delay, callback, callbackContext, arguments)
        this.enemyGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1.25, this.generateEnemies, this);
        this.enemyGenerator.timer.start();


        /////////////////////////////////////


        /** Bind keyboard input to the game **/

		this.cursors = this.input.keyboard.createCursorKeys();
        this.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
        this.spaceBar = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        /** Display score on HUD **/

        this.timerText = game.add.text(50, 20, "Time: "+this.timer, this.fontScore);
        this.timerText.anchor.set(0.5);
        this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
    },
	updateCounter: function() {

        this.timer++;
        this.timerText.setText("Time: "+this.timer);
	},
    generateEnemies: function() {
        console.log('enemy generation haha');
    },
	update: function() {

        this.player.body.setZeroVelocity();

        // Trigger Press SpaceBar event
        this.spaceBar.onDown.add(this.manageUnicornPower, this);

        // Move up and down method
		if (this.cursors.up.isDown)
		{
            this.player.body.moveUp(PhaserGame.playerSpeed);
        }
		else if (this.cursors.down.isDown)
		{
            this.player.body.moveDown(PhaserGame.playerSpeed);
        }
	},
    manageUnicornPower: function() {

        this.speedEffect = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'speed_effect');
        this.speedEffect.autoScroll((PhaserGame.timeSpeed) * 2, 0);

        this.level1.autoScroll(PhaserGame.timeSpeed + 100, 0);
    }
};

game.state.add('Game', PhaserGame.Game);
