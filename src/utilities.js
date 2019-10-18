const boxShadow = require("./box-shadow");

module.exports = function utilities(config = {}) {
  const result = {};

  for (let i = 0; i < 25; i++) {
    result[`.elevation-${i}`] = { boxShadow: boxShadow(i, config) };
  }

  return result;
};
