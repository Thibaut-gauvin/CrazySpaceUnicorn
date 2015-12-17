/**
 *
 * 4.3. How to play
 *
 **/

PhaserGame.HowToPlay = function(game) {};

PhaserGame.HowToPlay.prototype = {
    create: function() {
        this.menuBackground = this.add.sprite(0,0,'menu-background');
        var scalex = PhaserGame.width / this.menuBackground.width;
        var scaley = PhaserGame.height / this.menuBackground.height;
        this.menuBackground.scale.setTo(scalex, scaley);

        this.howToPlay = this.add.button(0, 0, 'howToPlay', this.displayMainMenu, this);
        scalex = PhaserGame.width / this.howToPlay.width;
        scaley = PhaserGame.height / this.howToPlay.height;
        this.howToPlay.scale.setTo(scalex, scaley);

    },
    displayMainMenu: function() {
        this.game.state.start('MainMenu');
    }
};

game.state.add('HowToPlay', PhaserGame.HowToPlay);

console.log('End of HowToPlay.js');
