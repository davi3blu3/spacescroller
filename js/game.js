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
    availablePlanets: ['saturn', 'jupiter', 'venus', 'crevice', 'earth', 'mars', 'purply', 'moon', 'moon2'],
    planetRadii: [50, 70, 45, 42, 40, 37, 36, 25, 30],
    createPlanet: function() {

        //random x coord beyond right border
        var randX = Math.ceil(Math.random() * 400) + 800;
        //random planet index 0 - 9
        var planetIndex = Math.floor(Math.random()*9);

        // create random planet
        var planet = this.planets.create(randX, this.game.world.randomY - 20, this.availablePlanets[planetIndex]);
        this.game.physics.arcade.enable(planet);

        // set collidable area to circle
        planet.body.setCircle(this.planetRadii[planetIndex]);

        // assign random velocity
        // planet.body.velocity.x = Math.ceil(Math.random() * -130) -120;

        // debugging slow velocity
        planet.body.velocity.x = -40;
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

        // check if planet has moved out of game view
        this.planets.forEach(this.checkPlanet, this, true);

        // generate planets
        if (this.planets.length < 7) {
            this.createPlanet();
        }

        // handle planet / ship collision
        this.game.physics.arcade.overlap(player, this.planets, collisionHandler, null, this);
        
        function collisionHandler (player, planet) {
            console.log('collision! You\'re dead');
            player.kill();
        }

    },
    checkPlanet: function(planet) {
        try {
            // check if planet is out of left bounds - regen
            if (planet.x < -200) {
                this.planets.remove(planet, true);
                // this.createPlanet();
            }
        }
        catch (e)
        {
            console.log(sprite);
        }        
    }

};