var SpaceScroller = SpaceScroller || {};
SpaceScroller.Game = function() {};

SpaceScroller.Game.prototype = {

    preload: function() {
        this.game.time.advancedTiming = true;
    },
    create: function() {
        // create starry background
        this.game.starfield = this.game.add.tileSprite(0,0,800,600, 'starfield');

        // create planets
        // this.game.add.sprite(600, 0, 'jupiter');
        saturn = this.game.add.sprite(600, 200, 'saturn');
        
        // this.game.add.sprite(600, 500, 'venus');
        // this.game.add.sprite(500, 400, 'moon');

        // give planets physics
        this.game.physics.arcade.enable(saturn);

        // create player and add properties
        player = this.game.add.sprite(50, 280, 'ship');
        this.game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;

        // enable controls
        cursors = this.game.input.keyboard.createCursorKeys();

        console.log('Game preload called');
    },
    update: function() {
        // scroll background
        this.game.starfield.tilePosition.x += -2;   

        //  Spaceshipt movement - reset velocity
        player.body.velocity.x = 0;

        if (cursors.up.isDown){
            //  Move up
            player.body.velocity.y = -200;
        } else if (cursors.down.isDown){
            //  Move down
            player.body.velocity.y = 200;
        } else if (cursors.left.isDown){
            //  Move down
            player.body.velocity.x = -200;
        } else if (cursors.right.isDown){
            //  Move down
            player.body.velocity.x = 200;
        } else {
            //  Stand still
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
        }      

        //  Planet movement
        saturn.body.velocity.x = -80;

    }

};