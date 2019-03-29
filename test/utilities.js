const assert = require('chai').assert;

const utilities = require('../src/utilities');

describe('#utilities()', function() {
  it('should return a utility for .elevation-0', function() {
    assert.equal(
      utilities()['.elevation-0'].boxShadow,
      '0px 0px 0px 0px rgba(0,0,0,.2), 0px 0px 0px 0px rgba(0,0,0,.14), 0px 0px 0px 0px rgba(0,0,0,.12)'
    );
  });

  it('should return a utility for .elevation-24', function() {
    assert.equal(
      utilities()['.elevation-24'].boxShadow,
      '0px 11px 15px -7px rgba(0,0,0,.2), 0px 24px 38px 3px rgba(0,0,0,.14), 0px 9px 46px 8px rgba(0,0,0,.12)'
    );
  });

  it('should return undefined for .elevation-25', function() {
    assert.isUndefined(utilities()['.elevation-25']);
  });
});
