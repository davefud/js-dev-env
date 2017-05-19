import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('First test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

// Sillt unit test, but is an example of working with JSDom
describe('index.html', () => {
  it('should have H1 that says Users', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Users");
      done();
      window.close();
    });
  });
});
