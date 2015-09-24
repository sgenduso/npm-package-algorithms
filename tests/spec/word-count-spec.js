var wordCount = require('../function.js');

describe('wordCount', function() {
  it('counts one word', function() {
    var expected = {occurance: 1};
    expect(myCode.wordCount("occurance")).toEqual(expected);
  });

  it('counts each word', function () {
    var expected = {each: 1, word:1, that:1, appears:1};
    expect(myCode.wordCount("each word that appears")).toEqual(expected);
  });

  it('counts multiple occurances', function () {
    var expected = {hot: 2, potato:2, cold:2, spaghetti:2};
    expect(myCode.wordCount("hot potato hot potato cold spaghetti  cold spaghetti")).toEqual(expected);
  });

});
