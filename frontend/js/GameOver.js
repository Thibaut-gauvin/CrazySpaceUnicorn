/**
 *
 * 7. Game Over
 *
 **/

PhaserGame.GameOver = function(game) {};

PhaserGame.GameOver.prototype = {
    preload: function() {
        this.font = { font: "42px Arial", fill: "#e4beef", align: "right" };
    },
    create: function() {

        this.menuBackground = this.add.button(0, 0, "menu-background", this.displayMainMenu, this);
        var scalex = PhaserGame.width / this.menuBackground.width;
        var scaley = PhaserGame.height / this.menuBackground.height;
        this.menuBackground.scale.setTo(scalex, scaley);


        var GameOverMessageStyle = { font: "bold 50px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        GameOverMessage = game.add.text(0, 0, "Game Over !", GameOverMessageStyle);
        GameOverMessage.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        GameOverMessage.setTextBounds(0, 100, PhaserGame.width, 100);


        var scoreMessageStyle = { font: "bold 50px Arial", fill: "#E5176E", boundsAlignH: "center", boundsAlignV: "middle" };
        scoreMessage = game.add.text(0, 0, "Your Score: " + PhaserGame.TotalScore, scoreMessageStyle);
        scoreMessage.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        scoreMessage.setTextBounds(0, 300, PhaserGame.width, 100);




        //this.howToPlay = this.add.button(PhaserGame.width / 2, PhaserGame.height / 2, this.message, this.displayMainMenu, this);
    },
    displayMainMenu: function() {
        this.game.state.start('MainMenu');
    }
};

game.state.add('GameOver', PhaserGame.GameOver);
