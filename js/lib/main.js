var GAME_LEVELS = require('../data/game_levels.js');
var DOMDisplay = require('./Draw/DOMDisplay');
var runGame = require('./functions/runGame');

runGame(GAME_LEVELS, DOMDisplay);