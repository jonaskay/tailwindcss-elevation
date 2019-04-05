const utilities = require('./src/utilities');

module.exports = function(variants, config) {
  return function({ addUtilities }) {
    addUtilities(utilities(config), variants);
  };
};
