const exec = require('child_process').exec;
const fs = require('fs');
const path = require('path');
const chai = require('chai');

const assert = chai.assert;
chai.use(require('chai-fs'));

const tmpDir = './tmp';
if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir);
}

const source = './test/fixtures/styles.css';
const output = `${tmpDir}/styles.css`;
const postcssConfig = `${tmpDir}/postcss.config.js`;

function addPostcssConfig(tailwindConfig) {
  const content = `
    module.exports = {
      plugins: [
        require('tailwindcss')('${tailwindConfig}'),
      ],
    }
  `;

  return new Promise(function(resolve, reject) {
    fs.writeFile(postcssConfig, content, function(err) {
      if (err) {
        reject(new Error(`Failed to create ${postcssConfig}: ${err}`));
      }

      resolve();
    });
  });
}

async function buildCSSFile(config) {
  await addPostcssConfig(config);
  const cmd = `./node_modules/.bin/postcss ${source} -o ${output} --config ${postcssConfig}`;

  return new Promise(function(resolve, reject) {
    exec(cmd, function(err) {
      if (err) {
        reject(new Error(err));
      }
      resolve();
    });
  });
}

describe('tailwind', function() {
  describe('build', function() {
    it('should generate CSS file with utilities', async function() {
      await buildCSSFile('./test/fixtures/defaultConfig.js');

      const regexps = [
        /.elevation-0\s+{/g,
        /box-shadow: 0px 0px 0px 0px rgba\(0,0,0,0.20\), 0px 0px 0px 0px rgba\(0,0,0,0.14\), 0px 0px 0px 0px rgba\(0,0,0,0.12\);\s+/g,
      ];
      regexps.forEach(function(regexp) {
        assert.fileContentMatch(output, regexp);
      });
    });

    it('should generate CSS file with utilities when variants are defined', async function() {
      await buildCSSFile('./test/fixtures/variantsConfig.js');

      assert.fileContentMatch(output, /.sm\\:elevation-0\s+/g);
    });

    it('should generate CSS file with utilities when base color is defined using an RGB triplet', async function() {
      await buildCSSFile('./test/fixtures/rgbColorConfig.js');

      const regexps = [
        /.elevation-0\s+{/g,
        /box-shadow: 0px 0px 0px 0px rgba\(255,0,0,0.20\), 0px 0px 0px 0px rgba\(255,0,0,0.14\), 0px 0px 0px 0px rgba\(255,0,0,0.12\);\s+/g,
      ];
      regexps.forEach(function(regexp) {
        assert.fileContentMatch(output, regexp);
      });
    });

    it('should generate CSS file with utilities when base color is defined using a HEX triplet', async function() {
      await buildCSSFile('./test/fixtures/hexColorConfig.js');

      const regexps = [
        /.elevation-0\s+{/g,
        /box-shadow: 0px 0px 0px 0px rgba\(79,209,197,0.20\), 0px 0px 0px 0px rgba\(79,209,197,0.14\), 0px 0px 0px 0px rgba\(79,209,197,0.12\);\s+/g,
      ];
      regexps.forEach(function(regexp) {
        assert.fileContentMatch(output, regexp);
      });
    });

    it('should generate CSS file with utilities when base color is defined using a custom property', async function() {
      await buildCSSFile('./test/fixtures/varColorConfig.js');

      const regexps = [
        /.elevation-0\s+{/g,
        /box-shadow: 0px 0px 0px 0px rgba\(var\(--color\),0.20\), 0px 0px 0px 0px rgba\(var\(--color\),0.14\), 0px 0px 0px 0px rgba\(var\(--color\),0.12\);\s+/g,
      ];
      regexps.forEach(function(regexp) {
        assert.fileContentMatch(output, regexp);
      });
    });

    it('should generate CSS file with utilities when opacity boost is defined', async function() {
      await buildCSSFile('./test/fixtures/opacityConfig.js');

      assert.fileContentMatch(
        output,
        /box-shadow: 0px 0px 0px 0px rgba\(0,0,0,0.30\), 0px 0px 0px 0px rgba\(0,0,0,0.24\), 0px 0px 0px 0px rgba\(0,0,0,0.22\);\s+/g
      );
    });

    it('should error when config is invalid', async function() {
      try {
        await buildCSSFile('./test/fixtures/invalidConfig.js');
      } catch {
        assert.isOk(true);
        return;
      }
      assert.isOk(false);
    });
  });
});
