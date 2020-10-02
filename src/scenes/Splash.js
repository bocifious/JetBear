import Phaser from '../lib/phaser.js'

export default class Splash extends Phaser.Scene {
    constructor() {
        super('splash');
    }

    preload() {
        this.load.image('background-splash', 'assets/images/Splash.png');
        this.load.image('start-button', 'assets/images/start.png');
    }

    create() {
        this.add.image(465, 180, 'background-splash');
        var start = this.add.sprite(465, 250, 'start-button').setInteractive();

        start.on('pointerdown', function (event) {
            this.scene.start('game');
        }, this);
    }

}
