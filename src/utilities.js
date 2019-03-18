const boxShadow = require('./boxShadow');

module.exports = function utilities() {
  result = {};

  for (let i = 0; i < 25; i++) {
    result[`.elevation-${i}`] = { boxShadow: boxShadow(i) };
  }

  return result;
};
