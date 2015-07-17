//----------------------------Tracking keys-------------------------------------
function trackKeys(codes) {
  var pressed = Object.create(null);
  function handler(event) {
    if (codes.hasOwnProperty(event.keyCode)) {
      var state = event.type == "keydown";
      pressed[codes[event.keyCode]] = state;
      event.preventDefault();
    }
  }
  addEventListener("keydown", handler);
  addEventListener("keyup", handler);

  pressed.unregister = function() {
    removeEventListener("keydown", handler);
    removeEventListener("keyup", handler);
  };

  return pressed;
}

module.exports = trackKeys;