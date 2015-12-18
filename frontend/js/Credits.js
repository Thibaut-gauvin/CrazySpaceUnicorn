/**
 *
 * 4.4. Credits
 *
 **/

PhaserGame.Credits = function(game) {};

PhaserGame.Credits.prototype = {
    create: function() {

        this.howToPlay = this.add.button(0, 0, 'credits', this.displayMainMenu, this);
        var scalex = PhaserGame.width / this.howToPlay.width;
        var scaley = PhaserGame.height / this.howToPlay.height;
        this.howToPlay.scale.setTo(scalex, scaley);

    },
    displayMainMenu: function() {
        this.game.state.start('MainMenu');
    }
};

game.state.add('Credits', PhaserGame.Credits);
