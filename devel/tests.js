var Vector = require('../js/lib/Draw/Vector'),
    Level = require('../js/lib/Draw/Level'),
    DOMDisplay = require('../js/lib/Draw/DOMDisplay'),
    expect = require('expect.js'),
    sinon = require('sinon');

describe('Object Vector', function() {
  var testVector = new Vector(3, 4);
  
  it('Check create new object Vector', function() {
    expect(testVector).to.eql({ x: 3, y: 4 });
  });

  it('Check correct arguments object Vector', function() {
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

  it('Check method "plus" in Vector', function() {
    var stub = sinon.stub(testVector, "plus");
    stub.returns();
  });
  
  it('Check correct arguments in method "plus" of object Vector', function() {
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

  it('Check method "times" in Vector', function() {
    var stub = sinon.stub(testVector, "times");
    stub.returns();
  });

  it('Check correct arguments in method "times" of object Vector', function() {
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

describe('Object Level', function() {
  it('Check create new object Level', function() {
    expect(new Level([''])).to.be.ok;
  });

  it('Argument in "Level" object must be only "array"', function(){
    expect(function(){ new Level(null); }).to.throwException(); 
    expect(function(){ new Level(undefined); }).to.throwException(); 
    expect(function(){ new Level(false); }).to.throwException(); 
    expect(function(){ new Level(true); }).to.throwException(); 
    expect(function(){ new Level(1); }).to.throwException(); 
    expect(function(){ new Level('string'); }).to.throwException(); 
    expect(function(){ new Level({}); }).to.throwException(); 
    expect(function(){ new Level(['']); }).to.not.throwException(); 
  });

  var testLevel = new Level(['']);
  it('Check method "isFinished" in Level', function() {
    var stub = sinon.stub(testLevel, "isFinished");
    stub.returns();
  });

  it('Check method "obstacleAt" in Level', function() {
    var stub = sinon.stub(testLevel, "obstacleAt");
    stub.returns();
  });  
  it('Check method "actorAt" in Level', function() {
    var stub = sinon.stub(testLevel, "actorAt");
    stub.returns();
  });    
  it('Check method "animate" in Level', function() {
    var stub = sinon.stub(testLevel, "animate");
    stub.returns();
  });      
  it('Check method "playerTouched" in Level', function() {
    var stub = sinon.stub(testLevel, "playerTouched");
    stub.returns();
  });
});

describe('Object DOMDisplay', function() {
  // it('Check create new object DOMDisplay', function() {
  //   expect(new DOMDisplay('<div class="game"></div>', new Level([''])).to.be.ok;
  // });
});