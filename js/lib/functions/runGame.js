var Level = require('../Draw/Level');
var runLevel = require('./runLevel');

//----------------runGame-------------------------------------------------------
var addLife = 2;
function runGame(plans, Display) {
  function startLevel(n, life) {
    runLevel(new Level(plans[n]), Display, function(status) {
      if (status == "lost"){
        if (life){
          life--;
          startLevel(n, life);
        } else {
          startLevel(0, addLife);
        }
      } else if (n < plans.length - 1) {
        startLevel(n + 1, life);
      } else {
        console.log("You win!");
      }
    });
  }
  startLevel(0, addLife);
}

module.exports = runGame;