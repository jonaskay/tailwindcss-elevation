const exec = require('child_process').exec;
const chai = require('chai');

const assert = chai.assert;
chai.use(require('chai-fs'));

const file = './test/fixtures/styles.css';
const output = './tmp/styles.css';

function build(config) {
  return `./node_modules/.bin/tailwind build ${file} -c ${config} -o ${output}`;
}

describe('tailwind', function() {
  describe('build', function() {
    it('should generate CSS file with utilities', function(done) {
      const config = './test/fixtures/defaultConfig.js';
      exec(build(config), function(err) {
        if (err) {
          done(err);
        } else {
          try {
            assert.fileContentMatch(output, /.elevation-1\s+{/g);
            assert.fileContentMatch(
              output,
              /box-shadow: 0px 0px 0px 0px rgba\(0, 0, 0, .2\), 0px 0px 0px 0px rgba\(0, 0, 0, .14\), 0px 0px 0px 0px rgba\(0, 0, 0, .12\);\s+/g
            );
            done();
          } catch (err) {
            done(err);
          }
        }
      });
    });

    it('should generate CSS file with utilities when variants are defined', function(done) {
      const config = './test/fixtures/variantsConfig.js';
      exec(build(config), function(err) {
        if (err) {
          done(err);
        } else {
          try {
            assert.fileContentMatch(output, /.sm\\:elevation-1\s+/g);
            done();
          } catch (err) {
            done(err);
          }
        }
      });
    });

    it('should generate CSS file with utilities when base color is defined', function(done) {
      const config = './test/fixtures/colorConfig.js';
      exec(build(config), function(err) {
        if (err) {
          done(err);
        } else {
          try {
            assert.fileContentMatch(output, /.elevation-1\s+{/g);
            assert.fileContentMatch(
              output,
              /box-shadow: 0px 0px 0px 0px rgba\(255, 0, 0, .2\), 0px 0px 0px 0px rgba\(255, 0, 0, .14\), 0px 0px 0px 0px rgba\(255, 0, 0, .12\);\s+/g
            );
            done();
          } catch (err) {
            done(err);
          }
        }
      });
    });
  });
});
