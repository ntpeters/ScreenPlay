module ScreenPlay {
    export class Level1 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: ScreenPlay.Player;
        walls: Phaser.Group;

        create() {
            //Load the stage layout
            var layout = ['111011111111111110111',
                '100000000000000000001',
                '101011111111111110101',
                '000000000000000000000',
                '101011101111101110101',
                '101010000010000010101',
                '101010111010111010101',
                '101000100000001000101',
                '101010101101101010101',
                '101010001000100010101',
                '101011100000001110101',
                '101010001000100010101',
                '101010101101101010101',
                '101000100000001000101',
                '101010111010111010101',
                '101010000010000010101',
                '101011101111101110101',
                '000000000000000000000',
                '101011111111111110101',
                '100000000000000000001',
                '111011111111111110111'];
            this.walls = new Phaser.Group(this.game);
            for (var i = 0; i < layout.length; i++) {
                for (var j = 0; j < layout[i].length; j++) {
                    if (layout[i].charAt(j) == '1') {
                        this.walls.add(new Wall(this.game, j * 30, i * 30));
                    }
                }
            }
            

            //Add the player (TODO: add the AI players)
            this.player = new Player(this.game, 45, 45);
        }

        update() {
            this.game.physics.arcade.collide(this.player, this.walls);
        }
    }
} 