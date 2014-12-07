module ScreenPlay {
    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite;

        preload() {
            //Setup the loading bar
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            //Load images
            this.load.image('titlepage', 'assets/titlepage.jpg');
            this.load.image('logo', 'assets/logo.png');
            this.load.image('wall', 'assets/wall.png');
            this.load.image('pellet', 'assets/pellet.png');
            this.load.image('power_pellet', 'assets/power_pellet.png');

            //Load spritesheets
            this.load.spritesheet('player_yellow', 'assets/player_yellow.png', 21, 21, 5, 0, 2);
            this.load.spritesheet('player_red', 'assets/player_red.png', 21, 21, 5, 0, 2);
            this.load.spritesheet('player_blue', 'assets/player_blue.png', 21, 21, 5, 0, 2);
            this.load.spritesheet('player_pink', 'assets/player_pink.png', 21, 21, 5, 0, 2);

            //Load sounds
            this.load.audio('chomp', 'assets/chomp.wav', true);
            this.load.audio('death', 'assets/death.wav', true);
            this.load.audio('eat_fruit', 'assets/eat_fruit.wav', true);
            this.load.audio('eat_ghost', 'assets/eat_ghost.wav', true);
        }

        create() {
            //Show/animate the loading bar
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);

        }

        startMainMenu() {
            //Move to the main menu once everything is loaded
            this.game.state.start('MainMenu', true, false);
        }
    }
}