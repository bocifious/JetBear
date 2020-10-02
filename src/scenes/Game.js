import Phaser from '../lib/phaser.js'

export default class Game extends Phaser.Scene {
    constructor() {
        super('game');
    }

    preload() {
        this.load.image('background', 'assets/images/background_wide.png');
    }

    create() {
        this.add.image(465, 180, 'background');
    }
}