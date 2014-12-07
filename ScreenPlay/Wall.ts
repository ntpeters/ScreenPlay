module ScreenPlay {
    export class Wall extends Phaser.Sprite {
        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'wall');
            this.anchor.setTo(0, 0);
            this.height = 30;
            this.width = 30;
            this.game.physics.arcade.enableBody(this);
            this.body.immovable = true;
            game.add.existing(this);
        }
    }
}