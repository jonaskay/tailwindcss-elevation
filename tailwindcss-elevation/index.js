const plugin = require("tailwindcss/plugin");

const validateOptions = require("./src/validate-options");
const utilities = require("./src/utilities");

module.exports = plugin.withOptions(function (options = {}) {
  return function ({ addUtilities }) {
    const err = validateOptions(options);
    if (err) {
      throw err;
    }

    addUtilities(utilities(options));
  };
});
