const boxShadow = require('./boxShadow');

module.exports = function utilities(config = {}) {
  result = {};

  for (let i = 0; i < 25; i++) {
    result[`.elevation-${i}`] = { boxShadow: boxShadow(i, config) };
  }

  return result;
};
