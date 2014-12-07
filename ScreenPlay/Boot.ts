module ScreenPlay {
    export class Boot extends Phaser.State {
        preload() {
            //Load the loading bar
            this.load.image('preloadBar', 'assets/loader.png');
        }

        create() {
            //We don't need multitouch
            this.input.maxPointers = 1;

            //Since people will be waiting to play in a queue, we don't want to pause the game if the tab loses focus
            this.stage.disableVisibilityChange = false;

            if (this.game.device.desktop) {
                //Desktop specific settings
            }
            else {
                //Mobile specific settings
            }

            //Start the physics
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            //Move to the preload state
            this.game.state.start('Preloader', true, false);
        }
    }
}