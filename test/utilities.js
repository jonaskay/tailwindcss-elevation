const assert = require('chai').assert;

const utilities = require('../src/utilities');

describe('#utilities()', function() {
  it('should return a utility for .elevation-0', function() {
    assert.equal(
      utilities()['.elevation-0'].boxShadow,
      '0px 0px 0px 0px rgba(0,0,0,0.20), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)'
    );
  });

  it('should return a utility for .elevation-24', function() {
    assert.equal(
      utilities()['.elevation-24'].boxShadow,
      '0px 11px 15px -7px rgba(0,0,0,0.20), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)'
    );
  });

  it('should return a utility for .elevation-1 when config includes color with an RGB triplet', function() {
    const config = { color: '255,255,0' };

    assert.equal(
      utilities(config)['.elevation-1'].boxShadow,
      '0px 2px 1px -1px rgba(255,255,0,0.20), 0px 1px 1px 0px rgba(255,255,0,0.14), 0px 1px 3px 0px rgba(255,255,0,0.12)'
    );
  });

  it('should return a utility for .elevation-1 when config includes color with a HEX triplet', function() {
    const config = { color: '#E53E3E' };

    assert.equal(
      utilities(config)['.elevation-1'].boxShadow,
      '0px 2px 1px -1px rgba(229,62,62,0.20), 0px 1px 1px 0px rgba(229,62,62,0.14), 0px 1px 3px 0px rgba(229,62,62,0.12)'
    );
  });

  it('should return a utility for .elevation-1 when config includes color with a custom property', function() {
    const config = { color: 'var(--blue)' };

    assert.equal(
      utilities(config)['.elevation-1'].boxShadow,
      '0px 2px 1px -1px rgba(var(--blue),0.20), 0px 1px 1px 0px rgba(var(--blue),0.14), 0px 1px 3px 0px rgba(var(--blue),0.12)'
    );
  });

  it('should return a utility for .elevation-2 when config includes opacityBoost', function() {
    const config = { opacityBoost: '.23' };
    assert.equal(
      utilities(config)['.elevation-2'].boxShadow,
      '0px 3px 1px -2px rgba(0,0,0,0.43), 0px 2px 2px 0px rgba(0,0,0,0.37), 0px 1px 5px 0px rgba(0,0,0,0.35)'
    );
  });

  it('should return a utility for .elevation-3 when config includes color and opacityBoost', function() {
    const config = { color: '77,192,181', opacityBoost: '0.42' };

    assert.equal(
      utilities(config)['.elevation-3'].boxShadow,
      '0px 3px 3px -2px rgba(77,192,181,0.62), 0px 3px 4px 0px rgba(77,192,181,0.56), 0px 1px 8px 0px rgba(77,192,181,0.54)'
    );
  });

  it('should return undefined for .elevation-25', function() {
    assert.isUndefined(utilities()['.elevation-25']);
  });
});
