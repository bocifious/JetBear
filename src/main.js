import Phaser from './lib/phaser.js'
import Game from './scenes/Game.js'
import Splash from './scenes/Splash.js'

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 930,
    height: 360,
    scene: [Splash, Game],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 100
            },
            debug: true //remove when done (this adds collision boxes)
        }
    }
})