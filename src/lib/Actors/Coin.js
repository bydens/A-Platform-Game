//-----------------------------Coin---------------------------------------------
var Vector = require('../Draw/Vector');

var wobbleSpeed = 8, wobbleDist = 0.07;

function Coin(pos) {
  if (!(pos instanceof Vector))
    throw 'Argument is not object of Vector';
  this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
  this.size = new Vector(0.6, 0.6);
  this.wobble = Math.random() * Math.PI * 2;
}

Coin.prototype.type = "coin";

Coin.prototype.act = function(step) {
  if (typeof(step) != 'number')
    throw 'Argument is not number';
  this.wobble += step * wobbleSpeed;
  var wobblePos = Math.sin(this.wobble) * wobbleDist;
  this.pos = this.basePos.plus(new Vector(0, wobblePos));
};

module.exports = Coin;