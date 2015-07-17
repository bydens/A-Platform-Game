var Vector = require('../js/lib/Draw/Vector'),
    expect = require('expect.js'),
    sinon = require('sinon');

describe('Vector', function() {
  it('Check create new object Vector', function() {
    expect(new Vector(3, 4)).to.eql({ x: 3, y: 4 });
  });

  var testVector = new Vector();
  it('Check method "plus" in Vector', function() {
    var stub = sinon.stub(testVector, "plus");
    stub.returns();
  });
  
  it('Check method "times" in Vector', function() {
    var stub = sinon.stub(testVector, "times");
    stub.returns();
  });
  
  it('Check methods in Vector', function() {
    var stub = sinon.stub(testVector);
    stub.returns("plus", "times");
  });

});