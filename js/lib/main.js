var GAME_LEVELS = require('../data/game_levels.js');
var CanvasDisplay = require('./Draw/CanvasDisplay');
var runGame = require('./functions/runGame');

runGame(GAME_LEVELS, CanvasDisplay);