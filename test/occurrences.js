var expect = require('expect.js');
var occurrences = require('../index');

describe('Occurrences', function() {
  it('should be equal to', function(callback) {
    occurrences('hey look a one function module', ' ', function(result) {
      expect(result.count).to.eql(5);
      callback();
    });
  });
  it('should be equal to', function(callback) {
    occurrences('you will not find anything', 'z', function(result) {
      expect(result.count).to.eql(0);
      callback();
    });
  });
  it('should be equal to', function(callback) {
    occurrences('a multi-character match a multi-character match', 'a multi-character match', function(result) {
      expect(result.count).to.eql(2);
      callback();
    });
  });
  it('should be equal to', function(callback) {
    occurrences('.', '', function(result) {
      expect(result.count).to.eql(0);
      callback();
    });
  });
  it('should be equal to', function(callback) {
    occurrences('', '.', function(result) {
      expect(result.count).to.eql(0);
      callback();
    });
  });
  it('should be equal to', function(callback) {
    occurrences('', '', function(result) {
      expect(result.count).to.eql(0);
      callback();
    });
  });
});