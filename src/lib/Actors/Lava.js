//---------------------------------Lava---------------------------------------
var Vector = require('../Draw/Vector');

function Lava(pos, ch) {
  if (!(pos instanceof Vector))
    throw 'Argument is not object of Vector';
  this.pos = pos;
  this.size = new Vector(1, 1);
  if (ch == "=") {
    this.speed = new Vector(2, 0);
  } else if (ch == "|") {
    this.speed = new Vector(0, 2);
  } else if (ch == "v") {
    this.speed = new Vector(0, 3);
    this.repeatPos = pos;
  } else {
    throw 'Unknow object!';
  }
}
Lava.prototype.type = "lava";

Lava.prototype.act = function(step, level) {
  if (
      typeof(step) !== 'number' || 
      level.constructor.name !== 'Level'
    )
    throw 'Error of type arguments in Lava.act';
  var newPos = this.pos.plus(this.speed.times(step));
  if (!level.obstacleAt(newPos, this.size))
    this.pos = newPos;
  else if (this.repeatPos)
    this.pos = this.repeatPos;
  else
    this.speed = this.speed.times(-1);
};

module.exports = Lava;