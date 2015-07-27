var GAME_LEVELS = require('../data/gameLevels.js');
var CanvasDisplay = require('./Draw/CanvasDisplay');
var runGame = require('./functions/runGame');

runGame(GAME_LEVELS, CanvasDisplay);