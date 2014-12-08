module ScreenPlay {

    export class Player extends Phaser.Sprite {

        private walls: Phaser.Group;

        constructor(game: Phaser.Game, x: number, y: number, walls: Phaser.Group) {
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

            //Get a reference to the walls
            this.walls = walls;

            //PUT ME IN COACH
            game.add.existing(this);
        }

        update() {
            //Wrap the player if necessary
            this.game.world.wrap(this);

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && !this.wallToLeft()) {
                //Green light
                this.body.velocity.x = -150;
                this.body.velocity.y = 0;
                this.animations.play('walk');

                //Face the right way
                if (this.angle != 180) {
                    this.angle = 180;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && !this.wallToRight()) {
                //Green light
                this.body.velocity.x = 150;
                this.body.velocity.y = 0;
                this.animations.play('walk');
                
                //Face the right way
                if (this.angle != 0) {
                    this.angle = 0;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP) && !this.wallAbove()) {
                //Green light
                this.body.velocity.y = -150;
                this.body.velocity.x = 0;
                this.animations.play('walk');
                
                //Face the right way
                if (this.angle != 270) {
                    this.angle = 270;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN) && !this.wallBelow()) {
                //Green light
                this.body.velocity.y = 150;
                this.body.velocity.x = 0;
                this.animations.play('walk');
                
                //Face the right way
                if (this.angle != 90) {
                    this.angle = 90;
                }
            }
            if (this.body.velocity.x == 0 && this.body.velocity.y == 0) {
                //Red light
                this.animations.frame = 0;
            }
        }

        onWallCollide(player: Player, walls: Phaser.Group) {
            player.animations.frame = 0;
        }

        wallBelow() {
            var physics = this.game.physics.arcade;
            return physics.getObjectsAtLocation(this.x - 15, this.y + 15, this.walls).length > 0 ||
                physics.getObjectsAtLocation(this.x + 14, this.y + 15, this.walls).length > 0;
        }

        wallAbove() {
            var physics = this.game.physics.arcade;
            return physics.getObjectsAtLocation(this.x - 15, this.y - 16, this.walls).length > 0 ||
                physics.getObjectsAtLocation(this.x + 14, this.y - 16, this.walls).length > 0;
        }

        wallToLeft() {
            var physics = this.game.physics.arcade;
            return physics.getObjectsAtLocation(this.x - 16, this.y + 14, this.walls).length > 0 ||
                physics.getObjectsAtLocation(this.x - 16, this.y - 15, this.walls).length > 0;
        }

        wallToRight() {
            var physics = this.game.physics.arcade;
            return physics.getObjectsAtLocation(this.x + 15, this.y + 14, this.walls).length > 0 ||
                physics.getObjectsAtLocation(this.x + 15, this.y - 15, this.walls).length > 0;
        }
    }
}