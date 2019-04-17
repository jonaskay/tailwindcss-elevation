module.exports = function validateConfig(config) {
  if (!config || !config.color) {
    return null;
  }

  const regex = /\s*\d+\s*\,\s*\d+\s*\,\s*\d+\s*/;
  if (regex.test(config.color)) {
    return null;
  } else {
    return new Error(`Invalid color value: ${config.color}`);
  }
};
