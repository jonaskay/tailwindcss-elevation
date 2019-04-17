const assert = require('chai').assert;

const validateConfig = require('../src/validateConfig');

describe('#validateConfig()', function() {
  it('should return an error message if color is invalid', function() {
    const colors = ['red', '1', '255,0', '-1,-2,-3'];
    colors.forEach(function(color) {
      assert.equal(
        validateConfig({ color: color }).message,
        `Invalid color value: ${color}`
      );
    });
  });

  it('should return null if color is valid', function() {
    const colors = ['0, 0, 0', ' 1,2,3 ', '255,255,255'];
    colors.forEach(function(color) {
      assert.isNull(validateConfig({ color: color }));
    });
  });

  it('should return null if color is missing', function() {
    assert.isNull(validateConfig({}));
  });

  it('should return null if config is missing', function() {
    assert.isNull(validateConfig());
  });
});
