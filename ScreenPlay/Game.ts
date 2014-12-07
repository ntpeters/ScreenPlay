module ScreenPlay {
    export class Game extends Phaser.Game {
        constructor() {
            //Initialize the game
            super(630, 630, Phaser.AUTO, 'content', null);

            //Add the various states
            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Level1', Level1, false);

            //Boot the game
            this.state.start('Boot');
        }
    }
}