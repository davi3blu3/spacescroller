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

        // create planet group
        this.planets = this.game.add.group();

        // create player and add properties
        player = this.game.add.sprite(50, 280, 'ship');
        this.game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;

        // enable controls
        cursors = this.game.input.keyboard.createCursorKeys();

        console.log('Game preload called');
    },
    availablePlanets: ['saturn', 'jupiter', 'venus', 'moon'],
    createPlanet: function() {

        //random x coord beyond right border
        var randX = Math.ceil(Math.random() * 400) + 800;

        // create random planet
        var planet = this.planets.create(randX, this.game.world.randomY - 20, this.availablePlanets[Math.floor(Math.random()*4)]);
        this.game.physics.arcade.enable(planet);

        // assign random velocity
        planet.body.velocity.x = Math.ceil(Math.random() * -130) -120;
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
        this.planets.forEach(this.checkPlanet, this, true);

        if (this.planets.length < 8) {
            this.createPlanet();
        }
    },
    checkPlanet: function(planet) {
        try {
            if (planet.x < -200) {
                this.planets.remove(planet, true);
                this.createPlanet();
            }
        }
        catch (e)
        {
            console.log(sprite);
        }        
    }

};