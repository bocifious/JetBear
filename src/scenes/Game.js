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
        this.load.audio('game', 'assets/audio/game.mp3');

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    create() {
        const width = this.scale.width;
        const height = this.scale.height;

        this.add.image(465, 180, 'background');
        this.add.image(465, 180, 'foreground');

        this.bear = this.physics.add.sprite(width / 4, height / 2, 'bear-off');

        var music = this.sound.add('game');
        music.setLoop(true);
        music.play();
    }

    update() {

        if (this.cursors.space.isDown) {
            this.bear.setVelocityY(-100);
            this.bear.setTexture('bear-on');
        }

        if (this.cursors.space.isUp) {
            this.bear.setTexture('bear-off');
        }

        this.groundStop(this.bear);
    }

    // sticks at ground - cannot go back up
    groundStop(sprite) {
        const gameHeight = (this.scale.height - 20);
        while (sprite.y > gameHeight && this.cursors.space.isUp) {
            this.sprite.setVelocityY(0);
        }
    }
}