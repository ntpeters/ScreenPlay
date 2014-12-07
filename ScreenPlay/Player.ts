module Castlevania {

    export class Player extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'player_yellow', 0);

            this.anchor.setTo(0.5, 0.5);

            this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);

            this.game.physics.arcade.enableBody(this);

            game.add.existing(this);

        }

        update() {

            this.body.velocity.x = 0;
            this.body.velocity.y = 0;

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {

                this.body.velocity.x = -150;
                this.animations.play('walk');

                if (this.angle != 180) {
                    this.angle = 180;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {

                this.body.velocity.x = 150;
                this.animations.play('walk');

                if (this.angle != 0) {
                    this.angle = 0;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {

                this.body.velocity.y = -150;
                this.animations.play('walk');

                if (this.angle != 270) {
                    this.angle = 270;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {

                this.body.velocity.y = 150;
                this.animations.play('walk');

                if (this.angle != 90) {
                    this.angle = 90;
                }
            }
            else {
                this.animations.frame = 0;
            }

        }

    }

}