module ScreenPlay {

    export class Player extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number) {
            //Construct the sprite
            super(game, x, y, 'player_yellow', 0);
            this.height = 30;
            this.width = 30;

            //Set the anchor to the middle of the sprite so rotating it doesn't look like shit
            this.anchor.setTo(0.5, 0.5);

            //Add fancy ann-ee-may-shuns
            this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);

            //Dat fizziks bah-dee tho
            this.game.physics.arcade.enableBody(this);

            //PUT ME IN COACH
            game.add.existing(this);

        }

        update() {
            //Red light
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;

            //TODO: Check for collisions

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                //Green light
                this.body.velocity.x = -150;
                this.animations.play('walk');

                //Face the right way
                if (this.angle != 180) {
                    this.angle = 180;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                //Green light
                this.body.velocity.x = 150;
                this.animations.play('walk');
                
                //Face the right way
                if (this.angle != 0) {
                    this.angle = 0;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                //Green light
                this.body.velocity.y = -150;
                this.animations.play('walk');
                
                //Face the right way
                if (this.angle != 270) {
                    this.angle = 270;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                //Green light
                this.body.velocity.y = 150;
                this.animations.play('walk');
                
                //Face the right way
                if (this.angle != 90) {
                    this.angle = 90;
                }
            }
            else {
                //Still red light
                this.animations.frame = 0;
            }
        }
    }
}