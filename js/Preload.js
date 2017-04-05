var SpaceScroller = SpaceScroller || {};
SpaceScroller.Preload = function() {};

SpaceScroller.Preload.prototype = {
    preload: function() {
        // show loading screen
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadBar');
        this.preloadBar.anchor.setTo(0.5);
        this.preloadBar.scale.setTo(3);

        this.load.setPreloadSprite(this.preloadBar);

        // load game assets
        game.load.image('starfield', './assets/starfield.jpg');
        game.load.image('jupiter', 'assets/planets/jupiter.png');
        game.load.image('saturn', 'assets/planets/saturn.png');
        game.load.image('venus', 'assets/planets/venus.png');
        game.load.image('moon', 'assets/planets/moon.png');
        game.load.image('ship', 'assets/spaceship.png');
    },
    create: function() {
        this.state.start('Game');
    }
};