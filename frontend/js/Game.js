/**
 *
 * 6. Game
 *
 **/

PhaserGame.Game = function(game) {};

PhaserGame.Game.prototype = {
    preload: function() {

        this.timer = 0;
        this.score = 0;
        this.fontScore = { font: "24px Arial", fill: "#e4beef", align: "left" };

        /** Create our collision groups. One for the player, one for the enemies, and one for leftBoarderWorld **/

        this.playerCollisionGroup = game.physics.p2.createCollisionGroup();
        this.enemiesCollisionGroup = game.physics.p2.createCollisionGroup();
        this.borderCollisionGroup = game.physics.p2.createCollisionGroup();
        game.physics.p2.updateBoundsCollisionGroup();
    },
    create: function() {

		/** Create background **/

        if (PhaserGame.selectedStage == 0) {
            this.currentLevel = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg_stage_1');
        } else {
            this.currentLevel = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg_stage_2');
        }
        this.currentLevel.autoScroll(PhaserGame.timeSpeed, 0);

        /** Create player and place it middle left **/

        var startingPos = new Phaser.Point( 50, (game.stage.height/2) - 20);
        this.player = this.add.sprite(startingPos.x, startingPos.y, 'player');
        this.player.scale.set(1);

        /** Create player physics body **/

        this.physics.p2.enable(this.player, false);
        this.player.body.setRectangle(90, 70);
        this.player.body.fixedRotation = true;

        /** Create player body collision group **/

        this.player.body.setCollisionGroup(this.playerCollisionGroup);
        this.player.body.collides(this.enemiesCollisionGroup, this.GameOver, this);

        /** border left collision **/

        this.borderLeft = this.add.sprite(0, 0, 'border-vertical');
        this.borderLeft.scale.set(1);
        this.physics.p2.enable(this.borderLeft, false);
        this.borderLeft.body.static = true;
        this.borderLeft.body.setRectangle(this.borderLeft.width, this.borderLeft.height);
        this.borderLeft.body.setCollisionGroup(this.borderCollisionGroup);
        this.borderLeft.body.collides(this.enemiesCollisionGroup, this.DeleteEnemy(), this);

        /** Create enemy generator **/

        this.enemyGenerator = this.time.events.loop(Phaser.Timer.SECOND * PhaserGame.EnemyGenerationRate, this.generateEnemies, this);
        this.enemyGenerator.timer.start();

        /** Bind keyboard input to the game **/

		this.cursors = this.input.keyboard.createCursorKeys();
        this.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
        this.spaceBar = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        /** Display score on HUD **/

        this.scoreText = this.add.text(70, 20, "Score: " + this.timer, this.fontScore);
        this.scoreText.anchor.set(0.5);

        this.totalScoreText = this.add.text(90, 40, "Total Score: " + PhaserGame.TotalScore, this.fontScore);
        this.totalScoreText.anchor.set(0.5);

        this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
    },
	updateCounter: function() {
        this.timer++;

        if (this.timer >= PhaserGame.timeToCompleteLevel) {
            this.levelComplete();
        }

        this.score = this.score + 3;
        PhaserGame.TotalScore += this.score;

        this.scoreText.setText("Score: " + this.score);
        this.totalScoreText.setText("Total Score: " + PhaserGame.TotalScore);
	},
    generateEnemies: function() {

        var enemyName = 'enemy_' + Math.floor((Math.random() * 5) + 1);
        this.enemy = this.add.sprite(PhaserGame.width - 4, this.game.world.randomY, enemyName);

        this.enemy.id = enemyName + Math.floor((Math.random() * 1000) + 1);
        this.enemy.scale.set(1);

        this.physics.p2.enable(this.enemy, false);
        this.enemy.body.setRectangle(this.enemy.width, this.enemy.height);
        this.enemy.body.fixedRotation = true;

        this.enemy.body.setCollisionGroup(this.enemiesCollisionGroup);
        this.enemy.body.collides(this.playerCollisionGroup);
        this.enemy.body.collides(this.borderCollisionGroup);
    },
	update: function() {

        /** Trigger Press SpaceBar event **/
        this.spaceBar.onDown.add(this.manageUnicornPower, this);

        this.player.body.setZeroVelocity();

        /** Move up and down method **/
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

        this.speedEffect = this.add.tileSprite(0, 0, PhaserGame.width, PhaserGame.height, 'speed_effect');
        this.speedEffect.autoScroll(PhaserGame.timeSpeed * 2, 0);

        this.currentLevel.autoScroll(PhaserGame.timeSpeed + 100, 0);
    },
    levelComplete: function () {

        PhaserGame.lastCompletedStage += 1;
        PhaserGame.TotalScore = PhaserGame.TotalScore + this.score;

        if (PhaserGame.lastCompletedStage == PhaserGame.totalStage) {
            this.game.state.start('EndGame');
        } else {
            this.game.state.start('WorldMap');
        }
    },
    DeleteEnemy: function () {
        console.log('collision enemy avec border !');
    },
    GameOver: function () {

        PhaserGame.TotalScore = this.score;
        this.game.state.start('GameOver');
    }
};

game.state.add('Game', PhaserGame.Game);
