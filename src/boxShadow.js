const config = require('./config');

module.exports = function boxShadow(z) {
  if (typeof z !== 'number') {
    return;
  }
  if (z < 0 || z > 24) {
    return;
  }

  return [shadow('umbra'), shadow('penumbra'), shadow('ambient')].join(', ');

  function shadow(type) {
    return `${config.elevation[type][z]} rgba(0,0,0,${config.opacity[type]})`;
  }
};
