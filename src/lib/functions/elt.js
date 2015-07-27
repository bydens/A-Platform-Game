function elt(name, className) {
  if (
      typeof(name) !== 'string' && 
      (className !== null && typeof(className) !== 'string')
    )
    throw 'Arguments must be "string"';
  
  var elt = document.createElement(name);
  if (className)
    elt.className = className;
  return elt;
}

module.exports = elt;