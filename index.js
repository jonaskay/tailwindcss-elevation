const utilities = require('./src/utilities');

module.exports = function(variants) {
  return function({ addUtilities }) {
    addUtilities(utilities(), variants);
  };
};
