/**
 *
 * 5. Pre Game Dialog
 *
 **/

PhaserGame.PreGameDialog = function(game, stageNumber) {};

PhaserGame.PreGameDialog.prototype = {
	create: function() {

        this.buttonContinue = this.add.button(0, 0, 'menuBackground', this.startGame, this);

        // console.log('stage number: ' + stageNumber);
	},
    startGame: function() {

        this.game.state.start('Game');
    }
};

game.state.add('PreGameDialog', PhaserGame.PreGameDialog);

console.log('End of PreGameDialog.js');
