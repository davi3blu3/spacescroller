var SpaceScroller = SpaceScroller || {};
SpaceScroller.Boot = function() {};

// setup game config and loading assets for the loading screen
SpaceScroller.Boot.prototype = {
    preload: function() {
        // assets needed in loading screen
        this.load.image('preloadbar', 'assets/preloader-bar.png');
    },
    create: function() {
        this.game.stage.backgroundColor = '#5555ff';

        // scaling options
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        // center game
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        // physics system
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        // this.state.start('Preload');
    }
};