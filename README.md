![alt text](http://www.bocifious.com/images/gallery/jetbear_big.png "JetBear! The Game!")

## Coding JetBear with p5.js

I coded a crappy javascript game a long time ago.  the [game](http://www.bocifious.com/jetbear.html) sucks but could be repurposed into a python based game with some ease, since many of the sprites/graphics already exist (_I'm not a designer; luckily I was working with a buddy who helped with some pixel sprites_)

My idea is to create a background scrolling game where you control a bear to go up and down in order to catch salmon and avoid beehives.

Since the Learning Python group has basically died at this point, and since I have started working in Javascript again, I have decided to go back to a Javascript implementation of the game.  

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