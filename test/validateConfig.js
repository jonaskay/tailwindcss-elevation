const assert = require('chai').assert;

const validateConfig = require('../src/validateConfig');

describe('#validateConfig()', function() {
  it('should return an error message if color is invalid', function() {
    const colors = [
      'red',
      '1',
      '255,0',
      '-1,-2,-3',
      '4fd1c5',
      '#...',
      'var',
      '(--foo)',
    ];
    colors.forEach(function(color) {
      assert.equal(
        validateConfig({ color: color }).message,
        `Invalid color value: ${color}`
      );
    });
  });

  it('should return null if color is valid', function() {
    const colors = [
      '0, 0, 0',
      ' 1,2,3 ',
      '255,255,255',
      '#4fd1c5',
      '#FFF',
      'var(--foo)',
    ];
    colors.forEach(function(color) {
      assert.isNull(validateConfig({ color: color }));
    });
  });

  it('should return an error message if opacity boost is invalid', function() {
    const opacityBoosts = ['foo', '1.01', '-0.01'];
    opacityBoosts.forEach(function(opacityBoost) {
      assert.equal(
        validateConfig({ opacityBoost: opacityBoost }).message,
        `Invalid opacityBoost value: ${opacityBoost}`
      );
    });
  });

  it('should return null if opacity boost is valid', function() {
    const opacityBoosts = ['0', '1', '0.0', '1.0', '0.01', '.99'];
    opacityBoosts.forEach(function(opacityBoost) {
      assert.isNull(validateConfig({ opacityBoost: opacityBoost }));
    });
  });

  it('should return null if config is empty', function() {
    assert.isNull(validateConfig({}));
  });

  it('should return null if config is missing', function() {
    assert.isNull(validateConfig());
  });
});
