/**
 *
 * 5. Pre Game Dialog
 *
 **/

PhaserGame.PreGameDialog = function(game, stageNumber) {};

PhaserGame.PreGameDialog.prototype = {
	create: function() {

        this.buttonContinue = this.add.button(0, 0, 'menu-background', this.startGame, this);

        var scalex = PhaserGame.width / this.buttonContinue.width;
        var scaley = PhaserGame.height / this.buttonContinue.height;
        this.buttonContinue.scale.setTo(scalex, scaley);

        console.log('Stage N°' + PhaserGame.lastCompletedStage);
	},
    startGame: function() {

        this.game.state.start('Game');
    }
};

game.state.add('PreGameDialog', PhaserGame.PreGameDialog);
