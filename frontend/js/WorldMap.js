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
        this.mapmonde = this.add.sprite(0, 0, 'worldmap');

        // Redimension de la map au format de l'écran
        var scalex = PhaserGame.width / this.mapmonde.width;
        var scaley = PhaserGame.height / this.mapmonde.height;
        this.mapmonde.scale.setTo(scalex, scaley);

        // Tableau de coordonées du positionnement de chaque planète
        var coords = {
            coord1:{ x:180, y:780 },
            coord2:{ x:315, y:480 },
            coord3:{ x:770, y:720 },
            coord4:{ x:810, y:240 },
            coord5:{ x:1130, y:430 }
        };

        mapGroup = this.add.group();

        var i = 1;
        for(var key in coords) {
            // Ajouter les liens sur la planète
            var stage = this.add.image(coords[key].x*scalex, coords[key].y*scaley, "stage");

            // Positionnement par rapport au centre de l'image
            stage.anchor.setTo(0.5);
            stage.number = i;
            stage.inputEnabled = true;

            // Lancer la fonction selectStage au clic sur une planète
            stage.events.onInputDown.add(this.selectStage, this);

            // Ajouter le lien sur la map
            mapGroup.add(stage);
            i++;
        }
        // button to "read the article"
    },
    selectStage: function(stage) {

        this.game.state.start('PreGameDialog', stage.number);
        // alert(stage.number);
    }
};

game.state.add('WorldMap', PhaserGame.WorldMap);

console.log('End of WorldMap.js');
