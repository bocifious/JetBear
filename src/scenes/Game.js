import Phaser from '../lib/phaser.js'

export default class Game extends Phaser.Scene {

    /** @type {Phaser.Physics.Arcade.Sprite} */
    bear

    constructor() {
        super('game');
    }

    preload() {
        this.load.image('background', 'assets/images/bgtop.png');
        this.load.image('foreground', 'assets/images/bgbottom.png');
        this.load.image('bear-off', 'assets/images/idle.png');
    }

    create() {
        this.add.image(465, 180, 'background');
        this.add.image(465, 180, 'foreground');
        this.bear = this.physics.add.sprite(this.scale.width / 4, this.scale.height / 2, 'bear-off');
    }
}