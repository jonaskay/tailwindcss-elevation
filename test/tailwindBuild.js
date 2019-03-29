const exec = require('child_process').exec;
const chai = require('chai');

const assert = chai.assert;
chai.use(require('chai-fs'));

const file = './test/fixtures/styles.css';
const output = './tmp/styles.css';
const config = './test/fixtures/tailwind.js';
const build = `./node_modules/.bin/tailwind build ${file} -c ${config} -o ${output}`;

describe('tailwind', function() {
  describe('build', function() {
    it('should generate CSS file with utilities', function(done) {
      exec(build, function(err) {
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
  });
});
