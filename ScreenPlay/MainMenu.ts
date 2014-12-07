module ScreenPlay {
    export class MainMenu extends Phaser.State {

        background: Phaser.Sprite;
        logo: Phaser.Sprite;

        //TODO:  EVERYTHING IN THIS FUNCTION IS NO LONGER RELEVANT.  RELEVANT-IZE IT.
        create() {
            //Display the background
            this.background = this.add.sprite(0, 0, 'titlepage');
            this.background.alpha = 0;

            //Display the logo
            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);

            //Animate the logo
            this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);

            //Fade out of the menu when there is input
            this.input.onDown.addOnce(this.fadeOut, this);
        }

        fadeOut() {
            //Fade the logo/background
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);

            //Start the REAL game
            tween.onComplete.add(this.startGame, this);

        }

        startGame() {
            //Move the the game stage
            this.game.state.start('Level1', true, false);
        }
    }
}