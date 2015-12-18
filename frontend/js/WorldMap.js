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
        this.mapmonde = this.add.sprite(0, 0, 'worldmap_' + PhaserGame.lastCompletedStage);

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

        for(var i=0; i<=PhaserGame.lastCompletedStage; i++) {
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
        PhaserGame.selectedStage = stage.number;
        this.game.state.start('PreGameDialog');
    }
};

game.state.add('WorldMap', PhaserGame.WorldMap);
