const utilities = require('./utilities');

module.exports = function(variants) {
  return function({ addUtilities }) {
    addUtilities(utilities(), variants);
  };
};
