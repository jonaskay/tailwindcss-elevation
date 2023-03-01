const regex = require("./regex");

function validateColor(color) {
  if (!color) {
    return null;
  }

  const re = new RegExp(`${regex.rgb}|${regex.hex}|${regex.customProperty}`);
  if (re.test(color)) {
    return null;
  } else {
    return new Error(`Invalid color value: ${color}`);
  }
}

function validateOpacityBoost(opacityBoost) {
  if (!opacityBoost) {
    return null;
  }

  const err = new Error(`Invalid opacityBoost value: ${opacityBoost}`);
  const num = parseFloat(opacityBoost);
  if (isNaN(num)) {
    return err;
  }
  if (num < 0 || num > 1) {
    return err;
  }

  return null;
}

module.exports = function validateOptions(options) {
  if (!options) {
    return null;
  }

  const error =
    validateColor(options.color) || validateOpacityBoost(options.opacityBoost);
  if (!error) {
    return null;
  }

  return error;
};
