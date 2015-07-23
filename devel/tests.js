var Coin = require('../js/lib/Actors/Coin'),
    game_levels = require('../js/data/game_levels'),
    Lava = require('../js/lib/Actors/Lava'),
    Player = require('../js/lib/Actors/Player'),
    Vector = require('../js/lib/Draw/Vector'),
    Level = require('../js/lib/Draw/Level'),
    DOMDisplay = require('../js/lib/Draw/DOMDisplay'),
    elt = require('../js/lib/functions/elt'),
    expect = require('expect.js'),
    sinon = require('sinon');

describe('Object "Coin"', function() {

  it('Check to create new object "Coin"', function(){
    expect(new Coin(new Vector(3, 4))).to.be.ok;
  });

  it('Argument in constructor "Coin" must be only "Vector" of type', function(){
    expect(function(){ new Coin(null); }).to.throwException();
    expect(function(){ new Coin(undefined); }).to.throwException();
    expect(function(){ new Coin(false); }).to.throwException();
    expect(function(){ new Coin(true); }).to.throwException();
    expect(function(){ new Coin(1); }).to.throwException();
    expect(function(){ new Coin('string'); }).to.throwException();
    expect(function(){ new Coin([]); }).to.throwException();
    expect(function(){ new Coin({}); }).to.throwException();
    expect(function(){ new Coin(function(){}); }).to.throwException();
    expect(function(){ new Coin(new Vector(3, 4)); }).to.not.throwException();
  });

  it('Check method "act" in object "Coin"', function(){
    expect(new Coin(new Vector(3, 4))).to.have.property('act');
  });

  it('Argument in method "act" of "Coin" object must be "number"', function(){
    var testCoin = new Coin(new Vector(3, 4));
    expect(testCoin.act).withArgs(null).to.throwException();
    expect(testCoin.act).withArgs(undefined).to.throwException();
    expect(testCoin.act).withArgs(false).to.throwException();
    expect(testCoin.act).withArgs(true).to.throwException();
    expect(testCoin.act).withArgs('string').to.throwException();
    expect(testCoin.act).withArgs([]).to.throwException();
    expect(testCoin.act).withArgs({}).to.throwException();
    expect(testCoin.act).withArgs(function(){}).to.throwException();
  });

  it('Check property "type" in object "Coin"', function(){
    expect(new Coin(new Vector(3, 4))).to.have.property('type', 'coin');
  });
});

describe('Object "Lava"', function() {

  var testVector = new Vector(3, 4),
      testLevel = new Level(game_levels[0]),
      testLava = new Lava(testVector, '=');

  it('Check to create new object "Lava"', function(){
    expect(new Lava(testVector, 'v')).to.be.ok;
  });

  it('Arguments in constructor "Lava" must be only "Vector" and value from ["=", "v", "|"]', function(){
    expect(function(){ new Lava(testVector, '='); }).to.not.throwException();
    expect(function(){ new Lava(testVector, '|'); }).to.not.throwException();
    expect(function(){ new Lava(testVector, 'v'); }).to.not.throwException();
    expect(function(){ new Lava(testVector, null); })
      .to.throwException(/Unknow object!/);
    expect(function(){ new Lava(testVector, undefined); })
      .to.throwException(/Unknow object!/);
    expect(function(){ new Lava(testVector, false); })
      .to.throwException(/Unknow object!/);
    expect(function(){ new Lava(testVector, true); })
      .to.throwException(/Unknow object!/);
    expect(function(){ new Lava(testVector, 1); })
      .to.throwException(/Unknow object!/);
    expect(function(){ new Lava(testVector, 'string'); })
      .to.throwException(/Unknow object!/);
    expect(function(){ new Lava(testVector, []); })
      .to.throwException(/Unknow object!/);
    expect(function(){ new Lava(testVector, {}); })
      .to.throwException(/Unknow object!/);
    expect(function(){ new Lava(testVector, function(){}); })
      .to.throwException(/Unknow object!/);
    expect(function(){ new Lava(null, '='); })
      .to.throwException(/Argument is not object of Vector/);
    expect(function(){ new Lava(undefined, '='); })
      .to.throwException(/Argument is not object of Vector/);
    expect(function(){ new Lava(false, '='); })
      .to.throwException(/Argument is not object of Vector/);
    expect(function(){ new Lava(1, '='); })
      .to.throwException(/Argument is not object of Vector/);
    expect(function(){ new Lava('string', '='); })
      .to.throwException(/Argument is not object of Vector/);
    expect(function(){ new Lava([], '='); })
      .to.throwException(/Argument is not object of Vector/);
    expect(function(){ new Lava({}, '='); })
      .to.throwException(/Argument is not object of Vector/);
    expect(function(){ new Lava(function(){}, '='); })
      .to.throwException(/Argument is not object of Vector/);
  });

  it('Check property "type" in object "Lava"', function(){
    expect(testLava).to.have.property('type', 'lava');
  });

  it('Check method "act" in object "Lava"', function(){
    expect(testLava).to.have.property('act');
  });

  it('Argument in method "act" of "Lava" object must be "number"', function(){
    expect(function(){ testLava.act(0.01, testLevel); }).to.not.throwException();
    expect(function(){ testLava.act(null, testLevel); }).to.throwException();
    expect(function(){ testLava.act(undefined, testLevel); }).to.throwException();
    expect(function(){ testLava.act(false, testLevel); }).to.throwException();
    expect(function(){ testLava.act(true, testLevel); }).to.throwException();
    expect(function(){ testLava.act('string', testLevel); }).to.throwException();
    expect(function(){ testLava.act([], testLevel); }).to.throwException();
    expect(function(){ testLava.act({}, testLevel); }).to.throwException();
    expect(function(){ testLava.act(function(){}, testLevel); }).to.throwException();
    expect(function(){ testLava.act(0.01, null); }).to.throwException();
    expect(function(){ testLava.act(0.01, undefined); }).to.throwException();
    expect(function(){ testLava.act(0.01, false); }).to.throwException();
    expect(function(){ testLava.act(0.01, true); }).to.throwException();
    expect(function(){ testLava.act(0.01, 'string'); }).to.throwException();
    expect(function(){ testLava.act(0.01, []); }).to.throwException();
    expect(function(){ testLava.act(0.01, {}); }).to.throwException();
    expect(function(){ testLava.act(0.01, function(){}); }).to.throwException();
  });

});

describe('Object "Player"', function() {

  var testVector = new Vector(3, 4),
      testPlayer = new Player(testVector),
      testLevel = new Level(game_levels[0]);

  it('Check to create new object "Player"', function(){
    expect(testPlayer).to.be.ok;
  });

  it('Argument in constructor "Player" must be only "Vector" of type', function(){
    expect(function(){ new Player(null); }).to.throwException();
    expect(function(){ new Player(undefined); }).to.throwException();
    expect(function(){ new Player(false); }).to.throwException();
    expect(function(){ new Player(true); }).to.throwException();
    expect(function(){ new Player(1); }).to.throwException();
    expect(function(){ new Player('string'); }).to.throwException();
    expect(function(){ new Player([]); }).to.throwException();
    expect(function(){ new Player({}); }).to.throwException();
    expect(function(){ new Player(function(){}); }).to.throwException();
    expect(function(){ new Player(testVector); }).to.not.throwException();
  });

  it('Check property "type" in object "Player"', function(){
    expect(testPlayer).to.have.property('type', 'player');
  });

  it('Check method "act" in object "Player"', function(){
    expect(new Player(testVector)).to.have.property('act');
  });

  it('Argument in method "act" of "Player" object must be "number", "Level", "Object"', function(){
    expect(function(){ testPlayer.act(0.01, testLevel, {}); }).to.not.throwException();
    expect(function(){ testPlayer.act(null, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.act(undefined, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.act(false, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.act(true, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.act('string', testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.act([], testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.act({}, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.act(function(){}, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, null, {}); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, undefined, {}); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, false, {}); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, true, {}); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, 1, {}); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, 'string', {}); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, [], {}); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, {}, {}); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, function(){}, {}); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, testLevel, null); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, testLevel, undefined); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, testLevel, false); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, testLevel, true); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, testLevel, 'string'); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, testLevel, []); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, testLevel, 1); }).to.throwException();
    expect(function(){ testPlayer.act(0.01, testLevel, function(){}); }).to.throwException();
  });

  it('Check method "moveX" in object "Player"', function(){
    expect(new Player(testVector)).to.have.property('moveX');
  });

  it('Argument in method "moveX" of "Player" object must be "number", "Level", "Object"', function(){
    expect(function(){ testPlayer.moveX(0.01, testLevel, {}); }).to.not.throwException();
    expect(function(){ testPlayer.moveX(null, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.moveX(undefined, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.moveX(false, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.moveX(true, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.moveX('string', testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.moveX([], testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.moveX({}, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.moveX(function(){}, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, null, {}); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, undefined, {}); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, false, {}); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, true, {}); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, 1, {}); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, 'string', {}); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, [], {}); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, {}, {}); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, function(){}, {}); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, testLevel, null); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, testLevel, undefined); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, testLevel, false); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, testLevel, true); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, testLevel, 'string'); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, testLevel, []); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, testLevel, 1); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, testLevel, function(){}); }).to.throwException();
  });

  it('Check method "moveY" in object "Player"', function(){
    expect(new Player(testVector)).to.have.property('moveY');
  });

  it('Argument in method "moveY" of "Player" object must be "number", "Level", "Object"', function(){
    expect(function(){ testPlayer.moveY(0.01, testLevel, {}); }).to.not.throwException();
    expect(function(){ testPlayer.moveY(null, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.moveY(undefined, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.moveY(false, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.moveY(true, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.moveY('string', testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.moveY([], testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.moveY({}, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.moveY(function(){}, testLevel, {}); }).to.throwException();
    expect(function(){ testPlayer.moveY(0.01, null, {}); }).to.throwException();
    expect(function(){ testPlayer.moveY(0.01, undefined, {}); }).to.throwException();
    expect(function(){ testPlayer.moveY(0.01, false, {}); }).to.throwException();
    expect(function(){ testPlayer.moveY(0.01, true, {}); }).to.throwException();
    expect(function(){ testPlayer.moveY(0.01, 1, {}); }).to.throwException();
    expect(function(){ testPlayer.moveY(0.01, 'string', {}); }).to.throwException();
    expect(function(){ testPlayer.moveY(0.01, [], {}); }).to.throwException();
    expect(function(){ testPlayer.moveY(0.01, {}, {}); }).to.throwException();
    expect(function(){ testPlayer.moveY(0.01, function(){}, {}); }).to.throwException();
    expect(function(){ testPlayer.moveY(0.01, testLevel, null); }).to.throwException();
    expect(function(){ testPlayer.moveY(0.01, testLevel, undefined); }).to.throwException();
    expect(function(){ testPlayer.moveY(0.01, testLevel, false); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, testLevel, true); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, testLevel, 'string'); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, testLevel, []); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, testLevel, 1); }).to.throwException();
    expect(function(){ testPlayer.moveX(0.01, testLevel, function(){}); }).to.throwException();
  });

});

describe('Object "Vector"', function() {
  
  var testVector = new Vector(3, 4);

  it('Check to create new object "Vector"', function() {
    expect(new Vector(3, 4)).to.eql({ x: 3, y: 4 });
  });

  it('Check correct arguments object "Vector"', function() {
    expect(function(){
      new Vector(null);
    }).to.throwException(/Argument is not number/);
    expect(function(){
      new Vector(undefined);
    }).to.throwException(/Argument is not number/);
    expect(function(){
      new Vector('string');
    }).to.throwException(/Argument is not number/);
    expect(function(){
      new Vector([]);
    }).to.throwException(/Argument is not number/);
    expect(function(){
      new Vector({});
    }).to.throwException(/Argument is not number/);
    expect(function(){
      new Vector(function(){});
    }).to.throwException(/Argument is not number/);
  });

  it('Check method "plus" in "Vector"', function() {
    var stub = sinon.stub(testVector, "plus");
    stub.returns();
  });
  
  it('Method "plus" must be return object "Vector"', function(){
    var testVector = new Vector(2, 2);
    var testPlus = testVector.plus(new Vector(1, 1));
    expect(testPlus).to.be.a(Vector);
  });

  it('Check correct arguments in method "plus" of object "Vector"', function() {
    var testVector = new Vector(3, 4);
    expect(function(){
      testVector.plus('string');
    }).to.throwException(/Argument is not object/);
    expect(function(){
      testVector.plus(1);
    }).to.throwException(/Argument is not object/);
    expect(function(){
      testVector.plus([]);
    }).to.throwException(/Argument is not object/);
    expect(function(){
      testVector.plus(null);
    }).to.throwException(/Argument is not object/);
    expect(function(){
      testVector.plus(undefined);
    }).to.throwException(/Argument is not object/);
    expect(function(){
      testVector.plus(function() {});
    }).to.throwException(/Argument is not object/);
  });

  it('Check method "times" in "Vector"', function() {
    var stub = sinon.stub(testVector, "times");
    stub.returns();
  });

  it('Method "times" must be return object "Vector"', function(){
    var testVector = new Vector(2, 2);
    var testPlus = testVector.times(1);
    expect(testPlus).to.be.a(Vector);
  });

  it('Check correct arguments in method "times" of object "Vector"', function() {
    var testVector = new Vector(3, 4);
    expect(function(){
      testVector.times('string');
    }).to.throwException(/Argument is not number/);
    expect(function(){
      testVector.times({});
    }).to.throwException(/Argument is not number/);
    expect(function(){
      testVector.times([]);
    }).to.throwException(/Argument is not number/);
    expect(function(){
      testVector.times(null);
    }).to.throwException(/Argument is not number/);
    expect(function(){
      testVector.times(undefined);
    }).to.throwException(/Argument is not number/);
    expect(function(){
      testVector.times(function() {});
    }).to.throwException(/Argument is not number/);
  });
      
});

describe('Object "Level"', function() {

  var testVector = new Vector(2, 4);

  it('Check create new object "Level"', function() {
    expect(new Level(game_levels[0])).to.be.ok;
  });

  it('Argument in "Level" object must be only "array"', function(){
    expect(function(){ new Level(null); }).to.throwException(); 
    expect(function(){ new Level(undefined); }).to.throwException(); 
    expect(function(){ new Level(false); }).to.throwException(); 
    expect(function(){ new Level(true); }).to.throwException(); 
    expect(function(){ new Level(1); }).to.throwException(); 
    expect(function(){ new Level('string'); }).to.throwException(); 
    expect(function(){ new Level({}); }).to.throwException(); 
    expect(function(){ new Level(game_levels[0]); }).to.not.throwException(); 
  });

  var testLevel = new Level(game_levels[0]);
  it('Check method "isFinished" in "Level"', function() {
    var stub = sinon.stub(testLevel, "isFinished");
    stub.returns();
  });

  it('Method "isFinished" in game must be return "false"', function(){
    var testLevel = new Level(game_levels[0]);
    expect(testLevel.isFinished()).to.equal(false);
  });

  it('Check method "obstacleAt" in "Level"', function() {
    var stub = sinon.stub(testLevel, "obstacleAt");
    stub.returns();
  });

  it('Arguments in method "obstacleAt" of Level object, must be only "Vector"', 
    function(){
      var testLevel = new Level(game_levels[0]);
      expect(testLevel.obstacleAt(testVector, new Vector(1, 2))).to.be.ok;
      expect(
        function(){
          testLevel.obstacleAt(testVector, null); }
      ).to.throwException();
      expect(
        function(){
          testLevel.obstacleAt(testVector, undefined);
        }
      ).to.throwException();
      expect(
        function(){
          testLevel.obstacleAt(testVector, false);
        }
      ).to.throwException();
      expect(
        function(){
          testLevel.obstacleAt(testVector, true);
        }
      ).to.throwException();
      expect(
        function(){
          testLevel.obstacleAt(testVector, 1);
        }
      ).to.throwException();
      expect(
        function(){
          testLevel.obstacleAt(testVector, 'string');
        }
      ).to.throwException();
      expect(
        function(){
          testLevel.obstacleAt(testVector, []);
        }
      ).to.throwException();
      expect(
        function(){
          testLevel.obstacleAt(testVector, {});
        }
      ).to.throwException();

      expect(testLevel.obstacleAt).withArgs(null, testVector)
        .to.throwException();
      expect(testLevel.obstacleAt).withArgs(undefined, testVector)
        .to.throwException();
      expect(testLevel.obstacleAt).withArgs(true, testVector)
        .to.throwException();
      expect(testLevel.obstacleAt).withArgs(false, testVector)
        .to.throwException();
      expect(testLevel.obstacleAt).withArgs(1, testVector)
        .to.throwException();
      expect(testLevel.obstacleAt).withArgs('string', testVector)
        .to.throwException();
      expect(testLevel.obstacleAt).withArgs([], testVector)
        .to.throwException();
      expect(testLevel.obstacleAt).withArgs({}, testVector)
        .to.throwException();
    }
  );

  it('Check method "actorAt" in "Level"', function() {
    var stub = sinon.stub(testLevel, "actorAt");
    stub.returns();
  });
  it('Check method "animate" in "Level"', function() {
    var stub = sinon.stub(testLevel, "animate");
    stub.returns();
  });      
  it('Check method "playerTouched" in "Level"', function() {
    var stub = sinon.stub(testLevel, "playerTouched");
    stub.returns();
  });
});

describe('Object DOMDisplay', function() {
  
  var testDOM = new DOMDisplay(document.body, new Level(game_levels[0]));
  it('Check create new object DOMDisplay', function() {
    expect(testDOM).to.be.ok;
  });

  it('Check method "drawBackground" in object "DOMDisplay"', function(){
    expect(testDOM).to.have.property('drawBackground');
  });

  it('Method "drawBackground" must be return "table"', function(){
    expect(testDOM.drawBackground().nodeName).to.equal('TABLE');
  });

  it('Check method "drawActors" in object "DOMDisplay"', function(){
    expect(testDOM).to.have.property('drawActors');
  });

  it('Method "drawActors" must be return "div"', function(){
    expect(testDOM.drawActors().nodeName).to.equal('DIV');
  });

  it('Check method "drawFrame" in object "DOMDisplay"', function(){
    expect(testDOM).to.have.property('drawFrame');
  });

  it('Check method "scrollPlayerIntoView" in object "DOMDisplay"', function(){
    expect(testDOM).to.have.property('scrollPlayerIntoView');
  });

  it('Check method "clear" in object "DOMDisplay"', function(){
    expect(testDOM).to.have.property('clear');
  });

});