module Castlevania {

    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite;

        preload() {

            //  Set-up our preloader sprite
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            //  Load our actual games assets
            this.load.image('titlepage', 'assets/titlepage.jpg');
            this.load.image('logo', 'assets/logo.png');
            this.load.audio('music', 'assets/title.mp3', true);
            this.load.audio('chomp', 'assets/chomp.mp3', true);
            this.load.audio('death', 'assets/death.mp3', true);
            this.load.audio('eat_fruit', 'assets/eat_fruit.mp3', true);
            this.load.audio('eat_ghost', 'assets/eat_ghost.mp3', true);
            this.load.spritesheet('player_yellow', 'assets/player_yellow.png', 21, 21, 5);
            this.load.spritesheet('player_red', 'assets/player_red.png', 49, 49, 5);
            this.load.spritesheet('player_blue', 'assets/player_blue.png', 21, 21, 5);
            this.load.spritesheet('player_pink', 'assets/player_pink.png', 21, 21, 5);
            this.load.image('stage', 'assets/stage.png');
            this.load.image('pellet', 'assets/pellet.png');
            this.load.image('power_pellet', 'assets/power_pellet.png');

        }

        create() {

            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);

        }

        startMainMenu() {

            this.game.state.start('MainMenu', true, false);

        }

    }

}