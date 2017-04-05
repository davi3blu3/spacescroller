var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv');

var starfield;

var mainState = {
    preload: function() {
        // load starry background
        game.load.image('starfield', './assets/starfield.jpg');

        // load obstacles
        game.load.image('jupiter', 'assets/planets/jupiter.png');
        game.load.image('saturn', 'assets/planets/saturn.png');
        game.load.image('venus', 'assets/planets/venus.png');
        game.load.image('moon', 'assets/planets/moon.png');

    },

    create: function() {
        // create starry background
        starfield = game.add.tileSprite(0,0,800,600, 'starfield');

        // create planets
        game.add.sprite(600, 0, 'jupiter');
        game.add.sprite(600, 200, 'saturn');
        game.add.sprite(600, 500, 'venus');
        game.add.sprite(500, 400, 'moon');
    },

    update: function() {
        // scroll background
        starfield.tilePosition.x += -2; 
    }
}

game.state.add('mainState', mainState);
game.state.start('mainState');
