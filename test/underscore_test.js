'use strict';

var assert = require('assert');
var fixture = require('../src/underscore');

describe('underscore', function () {
  describe('array functionality', function () {
    const arr = [3,6,9,1,12];
  
    it('should return first item', function (done) {
      assert.equal(3, fixture.getFirstItem(arr));
      done();
    });
  });
});
