/**
 *
 * 3. Main Menu
 *
 **/

PhaserGame.MainMenu = function(game) {};

PhaserGame.MainMenu.prototype = {
	create: function() {

		this.mainMenuButton = this.add.button(0, 0, 'mainMenu', this.displayWorldMap, this);
	},
	displayWorldMap: function() {

		this.game.state.start('WorldMap');
	}
};

game.state.add('MainMenu', PhaserGame.MainMenu);

console.log('End of MainMenu.js');
