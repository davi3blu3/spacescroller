var SpaceScroller = SpaceScroller || {};
SpaceScroller.game = new Phaser.Game(800, 600, Phaser.CANVAS);

SpaceScroller.game.state.add('Boot', SpaceScroller.Boot);
SpaceScroller.game.state.add('Preload', SpaceScroller.Preload);
SpaceScroller.game.state.add('Game', SpaceScroller.Game);

SpaceScroller.game.state.start('Boot');
