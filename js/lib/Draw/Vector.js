//-----------------------------------Vector ------------------------------------
function Vector(x, y) {
  if (typeof(x) != 'number' || typeof(y) != 'number')
    throw 'Argument is not number';
  this.x = x; this.y = y;
}
Vector.prototype.plus = function(other) {
  if (Object.prototype.toString.call(other).toUpperCase() !== '[OBJECT OBJECT]')
    throw 'Argument is not object';
  return new Vector(this.x + other.x, this.y + other.y);
};
Vector.prototype.times = function(factor) {
  if (typeof(factor) != 'number')
    throw 'Argument is not number';
  return new Vector(this.x * factor, this.y * factor);
};

module.exports = Vector;
// var test = new Vector();
// console.log(test);
// console.log(test.plus('{ x: 3, y: 4 }'));

