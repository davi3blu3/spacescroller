var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv');

var starfield;

var mainState = {
    preload: function() {
        // load starry background
        game.load.image('starfield', './assets/starfield.jpg');

    },

    create: function() {
        // create starry background
        starfield = game.add.tileSprite(0,0,800,600, 'starfield');
    },

    update: function() {
        // scrolling background
        starfield.tilePosition.x += -2; 
    }
}

game.state.add('mainState', mainState);
game.state.start('mainState');
