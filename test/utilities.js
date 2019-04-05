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

  it('should return a utility for .elevation-1 when config includes color', function() {
    const config = { color: '255,255,0' };

    assert.equal(
      utilities(config)['.elevation-1'].boxShadow,
      '0px 2px 1px -1px rgba(255,255,0,.2), 0px 1px 1px 0px rgba(255,255,0,.14), 0px 1px 3px 0px rgba(255,255,0,.12)'
    );
  });
});
