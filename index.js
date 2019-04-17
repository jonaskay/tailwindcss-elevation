const validateConfig = require('./src/validateConfig');
const utilities = require('./src/utilities');

module.exports = function(variants, config) {
  const err = validateConfig(config);
  if (err) {
    throw err;
  }

  return function({ addUtilities }) {
    addUtilities(utilities(config), variants);
  };
};
