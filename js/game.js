var SpaceScroller = SpaceScroller || {};
SpaceScroller.Game = function() {};

SpaceScroller.Game.prototype = {
    planets: '',
    preload: function() {
        this.game.time.advancedTiming = true;
    },
    create: function() {
        // create starry background
        this.game.starfield = this.game.add.tileSprite(0,0,800,600, 'starfield');

        // create planets
        // jupiter = this.game.add.sprite(600, this.randYCoord(), 'jupiter');
        // saturn = this.game.add.sprite(600, this.randYCoord(), 'saturn');
        // venus = this.game.add.sprite(600, this.randYCoord(), 'venus');
        // moon = this.game.add.sprite(500, this.randYCoord(), 'moon');

        // create planet group
        this.planets = this.game.add.group();
        console.log('group size: ', this.planets.length);
        // planets.add(jupiter);
        // planets.add(saturn);
        // planets.add(venus);
        // planets.add(moon);

        // give planets physics
        this.game.physics.arcade.enable(this.planets);

        // create player and add properties
        player = this.game.add.sprite(50, 280, 'ship');
        this.game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;

        // enable controls
        cursors = this.game.input.keyboard.createCursorKeys();

        console.log('Game preload called');
    },
    createPlanet: function() {
        console.log('createPlanet called');
        jupiter = this.game.add.sprite(600, this.randYCoord(), 'jupiter');
        this.planets.add(jupiter);
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
            //  Move left
            player.body.velocity.x = -200;
        } else if (cursors.right.isDown){
            //  Move right
            player.body.velocity.x = 200;
        } else {
            //  Stand still
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
        }      

        //  Planet movement
        // jupiter.body.velocity.x = -120;
        // saturn.body.velocity.x = -150;
        // venus.body.velocity.x = -180;
        // moon.body.velocity.x = -220;
        
        // if(planets.children.body.x < -200){
        //     console.log('planet out!', this);
        //     //saturn.body.x = 900;
        //     //saturn.body.y = this.randYCoord();
        // }

        if (this.planets.length < 4) {
            this.createPlanet();
        }
    },
    randYCoord: function() {
        return (Math.random() * 600) - 40;
    }

};