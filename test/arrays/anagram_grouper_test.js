var assert = require("assert"); // node.js core module
var fixture = require('../../src/arrays/anagram_grouper');

describe('anagram_counter_test', function(){
    it('should return number of changes needed', function(){
        var iterator = fixture.groupAnagrams(["eat", "tea", "tan", "ate", "atn", "bat"]);
        assert.deepEqual([ 'eat', 'tea', 'ate' ], iterator.next().value);
        assert.deepEqual([ 'tan', 'atn' ], iterator.next().value);
        assert.deepEqual([ 'bat' ], iterator.next().value);
    })
});