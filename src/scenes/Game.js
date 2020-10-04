import Phaser from '../lib/phaser.js'

export default class Game extends Phaser.Scene {

    /** @type {Phaser.Physics.Arcade.Sprite} */
    bear

    /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
    cursors

    constructor() {
        super('game');
    }

    preload() {
        this.load.image('background', 'assets/images/bgtop.png');
        this.load.image('foreground', 'assets/images/bgbottom.png');
        this.load.image('bear-off', 'assets/images/idle.png');
        this.load.image('bear-on', 'assets/images/bear.png');

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    create() {
        const width = this.scale.width;
        const height = this.scale.height;

        skyTile = this.add.tileSprite(465, 180, width, height, 'background');
        groundTile = this.add.tileSprite(465, 180, width, height, 'foreground');

        this.bear = this.physics.add.sprite(width / 4, height / 2, 'bear-off');
    }

    update() {

        if (this.cursors.space.isDown) {
            this.bear.setVelocityY(-100);
            this.bear.setTexture('bear-on');
        }

        const vy = this.bear.body.velocity.y;
        if (vy > 0 && this.bear.texture.key !== 'bear-off') {
            this.bear.setTexture('bear-off');
        }

        this.groundStop(this.bear);

        skyTile.tilePosition.x -= 10;
        groundTile.tilePosition.x -= 20;
    }

    // sticks at ground - cannot go back up
    groundStop(sprite) {
        const gameHeight = (this.scale.height - 20);
        while (sprite.y > gameHeight && this.cursors.space.isUp) {
            this.sprite.setVelocityY(0);
        }
    }
}