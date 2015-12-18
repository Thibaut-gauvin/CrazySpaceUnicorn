/**
 *
 * 5. Pre Game Dialog
 *
 **/
// var text;
// var index = 0;
// var line = '';

PhaserGame.PreGameDialog = function(game, stageNumber) {};

PhaserGame.PreGameDialog.prototype = {
	create: function() {
		if(PhaserGame.stage == 0) {
	        this.scene = this.add.button(0, 0, 'scene1', this.scene2, this);
	        var scalex = PhaserGame.width / this.scene.width;
	        var scaley = PhaserGame.height / this.scene.height;
	        this.scene.scale.setTo(scalex, scaley);

	        this.buttonContinue = this.add.button(PhaserGame.width-60, 10, 'skip', this.displayWorldMap, this);
	        this.buttonContinue.width = 48;
	        this.buttonContinue.height = 45;
	    }
	    else {
	    	this.displayWorldMap();
	    }
	},
    scene2: function() {
    	this.scene = this.add.button(0, 0, 'scene2', this.scene3, this);
        var scalex = PhaserGame.width / this.scene.width;
        var scaley = PhaserGame.height / this.scene.height;
        this.scene.scale.setTo(scalex, scaley);

        this.buttonContinue = this.add.button(PhaserGame.width-60, 10, 'skip', this.displayWorldMap, this);
    },
    scene3: function() {
    	this.scene = this.add.button(0, 0, 'scene3', this.scene4, this);
        var scalex = PhaserGame.width / this.scene.width;
        var scaley = PhaserGame.height / this.scene.height;
        this.scene.scale.setTo(scalex, scaley);

        this.buttonContinue = this.add.button(PhaserGame.width-60, 10, 'skip', this.displayWorldMap, this);
    },
    scene4: function() {
    	this.scene = this.add.button(0, 0, 'scene4', this.displayWorldMap, this);
        var scalex = PhaserGame.width / this.scene.width;
        var scaley = PhaserGame.height / this.scene.height;
        this.scene.scale.setTo(scalex, scaley);

        this.buttonContinue = this.add.button(PhaserGame.width-60, 10, 'skip', this.displayWorldMap, this);
    },
    displayWorldMap: function() {
        this.game.state.start('WorldMap');
    }
};

game.state.add('PreGameDialog', PhaserGame.PreGameDialog);

console.log('End of PreGameDialog.js');
