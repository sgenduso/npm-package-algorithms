var myCode = require('../solution.js');

describe('anagram', function() {

  it('searches a word against an array of words, and returns an array of the anagrams', function() {
    var word1 = 'master';
    var array1 = ['stream', 'pigeon', 'maters'];
    var word2 = 'orchestra';
    var array2 = ['cashregister', 'Carthorse', 'radishes'];
    var word3 = 'anagram';
    var search3 = 'nagaram';
    var word4 = 'hello';
    var search4 = 'Hello';

    expect(myCode.anagram(word1, array1)).toEqual([ 'stream', 'maters' ]);

    expect(myCode.anagram(word2, array2)).toEqual([ 'Carthorse' ]);

    expect(myCode.anagram(word3, search3)).toEqual([ 'nagaram' ]);

    expect(myCode.anagram(word4, search4)).toEqual([]);
  });

});
