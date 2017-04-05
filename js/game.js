var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv');

var starfield,
    player,
    cursors;

var mainState = {
    preload: function() {
        // load starry background
        game.load.image('starfield', './assets/starfield.jpg');

        // load obstacles
        game.load.image('jupiter', 'assets/planets/jupiter.png');
        game.load.image('saturn', 'assets/planets/saturn.png');
        game.load.image('venus', 'assets/planets/venus.png');
        game.load.image('moon', 'assets/planets/moon.png');

        // load player avatar
        game.load.image('ship', 'assets/spaceship.png');

    },

    create: function() {
        // enable Arcade Physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // create starry background
        starfield = game.add.tileSprite(0,0,800,600, 'starfield');

        // create planets
        game.add.sprite(600, 0, 'jupiter');
        game.add.sprite(600, 200, 'saturn');
        game.add.sprite(600, 500, 'venus');
        game.add.sprite(500, 400, 'moon');

        // create player and add properties
        player = game.add.sprite(50, 280, 'ship');
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;

        // enable controls
        cursors = game.input.keyboard.createCursorKeys();

    },

    update: function() {
        // scroll background
        starfield.tilePosition.x += -2; 

        //  Spaceshipt movement - reset velocity
        player.body.velocity.x = 0;

        if (cursors.up.isDown){
            //  Move up
            player.body.velocity.y = -150;
        } else if (cursors.down.isDown){
            //  Move down
            player.body.velocity.y = 150;
        } else if (cursors.left.isDown){
            //  Move down
            player.body.velocity.x = -150;
        } else if (cursors.right.isDown){
            //  Move down
            player.body.velocity.x = 150;
        } else {
            //  Stand still
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
        }
    }
}

game.state.add('mainState', mainState);
game.state.start('mainState');
