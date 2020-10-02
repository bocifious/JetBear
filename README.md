![alt text](http://www.bocifious.com/images/gallery/jetbear_big.png "JetBear! The Game!")

## Coding JetBear with Phaser!

I coded a crappy javascript game a long time ago.  the [game](http://www.bocifious.com/jetbear.html) isn't great was the best I could do with vanilla JS at the time. I've now decided to return to it since I've been doing some work with Phaser 3.  I think I could quickly implement the basic game as I envisioned using Phaser.

My idea is to create a background scrolling game where you control a bear to go up and down in order to catch salmon and avoid beehives. I also want to add a splash screen and a game over/high score screen.  This basic implementation is to test my skills and knowledge of Phaser, at which point I will hopefully add more features.

The goal for now is to implement the following:

* [ ] Create Splash Screen
* [ ] Load game on click
    * [ ] Create Button to start
* [ ] Implement game canvas after start click
* [ ] Game mechanics
    * [ ] Implement character sprite for jetpack on/jetpack off
        * [ ] Jetpack turns on with keypress; otherwise off
    * [ ] Better score graphic that does not overlay game canvas
    * [ ] Side-scrolling background
    * [ ] Some sort of mechanic for jetpack physics approximation (meaning - hold press to go up; otherwise gravity moves down)
    * [ ] Potential enemy that ends game
    * [ ] High score table
* [ ] Fix music