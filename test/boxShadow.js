const assert = require('chai').assert;

const boxShadow = require('../src/boxShadow');

describe('#boxShadow()', function() {
  it('should return undefined when z is not present', function() {
    assert.isUndefined(boxShadow());
  });

  it('should return undefined when z is not a number', function() {
    assert.isUndefined(boxShadow('1'));
  });

  it('should return undefined when z is less than 0', function() {
    assert.isUndefined(boxShadow(-1));
  });

  it('should return undefined when z is greater than 24', function() {
    assert.isUndefined(boxShadow(25));
  });

  it('should return valid box-shadow value when z is 0', function() {
    assert.equal(
      boxShadow(0),
      '0px 0px 0px 0px rgba(0,0,0,.2), 0px 0px 0px 0px rgba(0,0,0,.14), 0px 0px 0px 0px rgba(0,0,0,.12)'
    );
  });

  it('should return valid box-shadow value when z is 1', function() {
    assert.equal(
      boxShadow(1),
      '0px 2px 1px -1px rgba(0,0,0,.2), 0px 1px 1px 0px rgba(0,0,0,.14), 0px 1px 3px 0px rgba(0,0,0,.12)'
    );
  });

  it('should return valid box-shadow value when z is 24', function() {
    assert.equal(
      boxShadow(24),
      '0px 11px 15px -7px rgba(0,0,0,.2), 0px 24px 38px 3px rgba(0,0,0,.14), 0px 9px 46px 8px rgba(0,0,0,.12)'
    );
  });

  it('should return valid box-shadow value when z is 2 and color is 0,0,255', function() {
    assert.equal(
      boxShadow(2, '0,0,255'),
      '0px 3px 1px -2px rgba(0,0,255,.2), 0px 2px 2px 0px rgba(0,0,255,.14), 0px 1px 5px 0px rgba(0,0,255,.12)'
    );
  });
});
