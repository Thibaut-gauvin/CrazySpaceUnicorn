/**
 *
 * 4. World Map
 *
 **/

PhaserGame.WorldMap = function(game) {};

PhaserGame.WorldMap.prototype = {
    create: function() {
        var mapGroup;

        // Intégrer la map
        var namefile = 'worldmap_' + PhaserGame.stage;
        this.mapmonde = this.add.sprite(0, 0, namefile);

        // Redimension de la map au format de l'écran
        var scalex = PhaserGame.width / this.mapmonde.width;
        var scaley = PhaserGame.height / this.mapmonde.height;
        this.mapmonde.scale.setTo(scalex, scaley);

        // Tableau de coordonées du positionnement de chaque planète
        var coords = [
            { x:180, y:780 },
            { x:315, y:480 },
            { x:770, y:720 },
            { x:810, y:240 },
            { x:1130, y:430 }
        ];

        mapGroup = this.add.group();

        for(var i=0; i<=PhaserGame.stage; i++) {
            var stage = this.add.image(coords[i].x*scalex, coords[i].y*scaley, "stage");

            // Positionnement par rapport au centre de l'image
            stage.anchor.setTo(0.5);
            stage.number = i;
            stage.inputEnabled = true;

            // Lancer la fonction selectStage au clic sur une planète
            stage.events.onInputDown.add(this.selectStage, this);

            // Ajouter le lien sur la map
            mapGroup.add(stage);
        }

        this.title = this.add.sprite(PhaserGame.width*0.5, 40, 'worldmap_title');
        this.title.scale.setTo(0.2, 0.2);
        this.title.anchor.setTo(0.5);
    },
    selectStage: function(stage) {
        PhaserGame.stage = stage.number;
        this.game.state.start('Game');
        // alert(stage.number);
    }
};

game.state.add('WorldMap', PhaserGame.WorldMap);

console.log('End of WorldMap.js');
