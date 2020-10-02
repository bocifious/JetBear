import Phaser from '../lib/phaser.js'

export default class Game extends Phaser.Scene {
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
        const foreground = this.add.image(465, 180, 'foreground'); //need to remove transparent part of foreground for collider to work
        const player = this.physics.add.sprite(this.scale.width / 4, this.scale.height / 2, 'bear-off');

        this.physics.add.collider(foreground, player);
    }
}