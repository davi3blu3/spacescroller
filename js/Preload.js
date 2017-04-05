var SpaceScroller = SpaceScroller || {};
SpaceScroller.Preload = function() {};

SpaceScroller.Preload.prototype = {
    preload: function() {
        // show loading screen
        // this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadBar');
        // this.preloadBar.anchor.setTo(0.5);
        // this.preloadBar.scale.setTo(2);
        // this.load.setPreloadSprite(this.preloadBar);

        // load game assets
        this.game.load.image('starfield', './assets/starfield.jpg');
        this.game.load.image('jupiter', 'assets/planets/jupiter.png');
        this.game.load.image('saturn', 'assets/planets/saturn.png');
        this.game.load.image('venus', 'assets/planets/venus.png');
        this.game.load.image('moon', 'assets/planets/moon.png');
        this.game.load.image('ship', 'assets/spaceship.png');

        console.log('Preload preload called');
    },
    create: function() {
        this.state.start('Game');
    }
};