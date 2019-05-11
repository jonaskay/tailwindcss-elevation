const config = require('./config');

module.exports = function boxShadow(z, options) {
  function shadow(type) {
    function calculateOpacity(boost) {
      const add = parseFloat(boost) || 0;
      const base = parseFloat(config.opacity[type]);

      return (base + add).toFixed(2);
    }

    const offset = config.elevation[type][z];
    const color = (options && options.color) || '0,0,0';
    const opacity = calculateOpacity(options && options.opacityBoost);

    return `${offset} rgba(${color},${opacity})`;
  }

  if (typeof z !== 'number') {
    return;
  }
  if (z < 0 || z > 24) {
    return;
  }

  return [shadow('umbra'), shadow('penumbra'), shadow('ambient')].join(', ');
};
