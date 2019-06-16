const exec = require('child_process').exec;
const fs = require('fs');
const chai = require('chai');

const assert = chai.assert;
chai.use(require('chai-fs'));

const file = './test/fixtures/styles.css';
const output = './tmp/styles.css';

function build(config) {
  const configContent = `
    module.exports = {
      plugins: [
        require('tailwindcss')('${config}'),
      ],
    }
  `;

  const postcssConfig = './tmp/postcss.config.js';

  fs.writeFile(postcssConfig, configContent, function(err) {
    if (err) {
      return console.log(err);
    }
  });

  return `./node_modules/.bin/postcss ${file} -o ${output} --config ${postcssConfig}`;
}

function buildCSSFile(done, config, ...regexps) {
  exec(build(config), function(err) {
    if (err) {
      done(err);
    } else {
      try {
        regexps.forEach(function(regexp) {
          assert.fileContentMatch(output, regexp);
        });
        done();
      } catch (err) {
        done(err);
      }
    }
  });
}

describe('tailwind', function() {
  describe('build', function() {
    it('should generate CSS file with utilities', function(done) {
      const config = './test/fixtures/defaultConfig.js';
      buildCSSFile(
        done,
        config,
        /.elevation-0\s+{/g,
        /box-shadow: 0px 0px 0px 0px rgba\(0,0,0,0.20\), 0px 0px 0px 0px rgba\(0,0,0,0.14\), 0px 0px 0px 0px rgba\(0,0,0,0.12\);\s+/g
      );
    });

    it('should generate CSS file with utilities when variants are defined', function(done) {
      const config = './test/fixtures/variantsConfig.js';
      buildCSSFile(done, config, /.sm\\:elevation-0\s+/g);
    });

    it('should generate CSS file with utilities when base color is defined', function(done) {
      const config = './test/fixtures/colorConfig.js';
      buildCSSFile(
        done,
        config,
        /.elevation-0\s+{/g,
        /box-shadow: 0px 0px 0px 0px rgba\(255,0,0,0.20\), 0px 0px 0px 0px rgba\(255,0,0,0.14\), 0px 0px 0px 0px rgba\(255,0,0,0.12\);\s+/g
      );
    });

    it('should generate CSS file with utilities when opacity boost is defined', function(done) {
      const config = './test/fixtures/opacityConfig.js';
      buildCSSFile(
        done,
        config,
        /box-shadow: 0px 0px 0px 0px rgba\(0,0,0,0.30\), 0px 0px 0px 0px rgba\(0,0,0,0.24\), 0px 0px 0px 0px rgba\(0,0,0,0.22\);\s+/g
      );
    });

    it('should error when config is invalid', function(done) {
      const config = './test/fixtures/invalidConfig.js';
      exec(build(config), function(err) {
        if (err) {
          assert.isOk(true);
          done();
        } else {
          assert.isOk(false);
          done();
        }
      });
    });
  });
});
