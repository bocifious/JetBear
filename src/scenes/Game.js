import Phaser from '../lib/phaser.js'

export default class Game extends Phaser.Scene {
    constructor() {
        super('game');
    }

    preload() {
        this.load.image('background', 'assets/images/background_wide.png');
        this.load.image('bear-off', 'assets/images/idle.png');
    }

    create() {
        this.add.image(465, 180, 'background');
        this.physics.add.image(this.scale.width / 4, this.scale.height / 2, 'bear-off');
    }
}