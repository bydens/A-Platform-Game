#A Platform Game
![Project: A Platform Game](https://raw.githubusercontent.com/bydens/A-Platform-Game/master/game.png)

##Overview

"Project: A Platform Game" implemented on javascrip and on such technologies: `commonjs`, `browserify`. 

## Instruction

For game you could use:

1. Button `up` - give you chance to jump
2. Button `right` - give you chance move right your player
3. Button `left` - give you chance move left your player
4. Button `esc` - pause game
5. Press `ctr + F5` - reload game

##Structure

  * File *index.html* to contain link on file of style - *style.css* and to include file javascript *build.js*.
  * Folder `src/` - to contain files of parts project.
    * Folder `src/data` - files with data.
      * *game_levels.js* - levels of game.
      * *actorChars.js* - associates the objects ('Player', 'Coin', 'Lava') with symbols on levels of game ("@", "o", "=").
    * Folder `src/lib` - library of objects acters, display, animation.
      * Folder `src/lib/Actors` - to contain files objects:
          * *Coin.js* - object of "coin";
          * *Lava.js* - object of "lava";
          * *Player.js* - object of "player";
      * Folder `src/lib/Draw` - to contain files objects for drawing:
        * *Vector.js* - object "Vector" for direction;
        * *Level.js* - object "Level" for drawing levels;
        * *CanvasDisplay.js* - object "CanvasDisplay" for building level with objects acters;
      * Folder `src/lib/functions` - to contain of helper functions:
        * *elt.js* - to create an element and give it a class;
        * *runAnimation.js* - draws a single frame;
        * *runGame.js* - running the game;
        * *runLevel.js* - It displays the level (in document.body) and lets the user play through it;
        * *trackKeys.js* - tracking keys;
      * File *src/main.js* - assemblage point.
  * *build.js* - final file of project.


##Testing
To use method TDD and tecnology:

  1. [Mocha](http://mochajs.org/);
  1. [Expectjs](https://github.com/Automattic/expect.js);
  1. [Sinon](http://sinonjs.org/);

###Installation :

  1. Start command line.
  1. Run `npm install`.

In folder `node_modules` will load the required dependencies.

###Usage :

  1. In command line to write `npm run test-in-browser`.
  1. Start browser.
  1. In address line to write `http://127.0.0.1:9966/`