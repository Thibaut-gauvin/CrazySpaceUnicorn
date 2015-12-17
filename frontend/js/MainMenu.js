/**
 *
 * 3. Main Menu
 *
 **/

PhaserGame.MainMenu = function(game) {};

PhaserGame.MainMenu.prototype = {
	create: function() {

		this.mainMenu = this.add.sprite(0, 0, 'mainMenu');

		var scalex = PhaserGame.width / this.mainMenu.width;
        var scaley = PhaserGame.height / this.mainMenu.height;
        this.mainMenu.scale.setTo(scalex, scaley);

        var buttons = {
            button1:{ y:450, image:'button-start', fonction:this.displayWorldMap },
            button2:{ y:575, image:'button-score', fonction:'' },
            button3:{ y:700, image:'button-controls', fonction:this.displayHowToPlay },
            button4:{ y:825, image:'button-credits', fonction:this.displayCredits },
        };

        for(var key in buttons) {
        	this.startButton = this.add.button(485*scalex, buttons[key].y*scaley, buttons[key].image, buttons[key].fonction, this, 1, 0);
        	this.startButton.scale.setTo(scalex,scaley);
        }
	},
	displayWorldMap: function() {
		this.game.state.start('WorldMap');
	},
    displayCredits: function() {
        this.game.state.start('Credits');
    },
	displayHowToPlay: function() {
		this.game.state.start('HowToPlay');
	}
};

game.state.add('MainMenu', PhaserGame.MainMenu);

console.log('End of MainMenu.js');
