/**
 *
 * 7. End Game
 *
 **/

PhaserGame.EndGame = function(game) {};

PhaserGame.EndGame.prototype = {
    preload: function() {
        this.endMessageStyle = { font: "bold 50px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        this.totalScoreMessageStyle = { font: "bold 50px Arial", fill: "#E5176E", boundsAlignH: "center", boundsAlignV: "middle" };
    },
    create: function() {

        this.menuBackground = this.add.button(0, 0, "menu-background", this.displayCredits, this);
        var scalex = PhaserGame.width / this.menuBackground.width;
        var scaley = PhaserGame.height / this.menuBackground.height;
        this.menuBackground.scale.setTo(scalex, scaley);


        var endMessage = game.add.text(0, 0, "Congratulation !", this.endMessageStyle);
        endMessage.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        endMessage.setTextBounds(0, 100, PhaserGame.width, 100);

        var totalScoreMessage = game.add.text(0, 0, "Your Score: " + PhaserGame.TotalScore, this.totalScoreMessageStyle);
        totalScoreMessage.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        totalScoreMessage.setTextBounds(0, 300, PhaserGame.width, 100);
    },
    displayCredits: function() {
        this.game.state.start('Credits');
    }
};

game.state.add('EndGame', PhaserGame.EndGame);
