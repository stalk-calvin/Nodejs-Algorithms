var assert = require("assert"); // node.js core module
var fixture = require('../../src/arrays/anagram_counter');

describe('anagram_counter_test', function(){
    it('should return number of changes needed', function(){
        assert.equal(4, fixture.numberNeeded("cde","abc"));
    })
});