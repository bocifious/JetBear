import Phaser from '../lib/phaser.js'

export default class Splash extends Phaser.Scene {
    constructor() {
        super('splash');
    }

    preload() {
        this.load.image('background-splash', 'assets/images/Splash.png');
        this.load.image('start-button', 'assets/images/start.png');
        this.load.audio('intro', 'assets/audio/intro.mp3');
    }

    create() {
        this.add.image(465, 180, 'background-splash');

        var music = this.sound.add('intro');
        music.setLoop(true);
        music.play();
        
        var start = this.add.sprite(465, 250, 'start-button').setInteractive();

        start.on('pointerdown', function (event) {
            music.stop();
            this.scene.start('game');
        }, this);
    }

}
