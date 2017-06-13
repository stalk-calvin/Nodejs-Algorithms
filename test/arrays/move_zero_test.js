var assert = require("assert"); // node.js core module
var fixture = require('../../src/arrays/move_zero');

describe('move_zero_test', function(){
    it('should move zeroes to end', function(){
        var input = [0,1,0,3,0];
        var length = fixture.moveAndReturnNumberOfNonZeroes(input);
        var expected = [1,3];
        assert.ok(arrays_equal(expected, input.slice(0, length)));
    })
});

function arrays_equal(a,b) { return !!a && !!b && !(a<b || b<a); }