var Player = require('../lib/Actors/Player');
var Coin = require('../lib/Actors/Coin');
var Lava = require('../lib/Actors/Lava');

var actorChars = {
  "@": Player,
  "o": Coin,
  "=": Lava, "|": Lava, "v": Lava
};

module.exports = actorChars;