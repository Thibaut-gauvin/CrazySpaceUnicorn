/**
 *
 * 7. Game Over
 *
 **/

PhaserGame.GameOver = function(game) {};

PhaserGame.GameOver.prototype = {
    preload: function() {
        this.GameOverMessageStyle = { font: "bold 50px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        this.scoreMessageStyle = { font: "bold 50px Arial", fill: "#E5176E", boundsAlignH: "center", boundsAlignV: "middle" };
    },
    create: function() {

        this.menuBackground = this.add.button(0, 0, "menu-background", this.displayMainMenu, this);
        var scalex = PhaserGame.width / this.menuBackground.width;
        var scaley = PhaserGame.height / this.menuBackground.height;
        this.menuBackground.scale.setTo(scalex, scaley);


        var GameOverMessage = game.add.text(0, 0, "Game Over !", this.GameOverMessageStyle);
        GameOverMessage.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        GameOverMessage.setTextBounds(0, 100, PhaserGame.width, 100);

        var scoreMessage = game.add.text(0, 0, "Your Score: " + PhaserGame.TotalScore, this.scoreMessageStyle);
        scoreMessage.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        scoreMessage.setTextBounds(0, 300, PhaserGame.width, 100);
    },
    displayMainMenu: function() {
        this.game.state.start('MainMenu');
    }
};

game.state.add('GameOver', PhaserGame.GameOver);
