var myCode = require('../../shuffle/function.js');
var isAnagram = require('../../anagrams/function.js'
).isAnagram;

describe('shuffle', function() {
  it('takes a string and returns the string with its letters shuffled', function() {

    var word1 = 'puffin';
    var shuffled1 = myCode.shuffle(word1);

    //isAnagram function takes 2 words, downcases each, and returns true if they contain exactly the same letters but are not identical words
    expect(isAnagram(shuffled1, word1)).toBeTruthy();
  });
});
