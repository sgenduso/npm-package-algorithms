function findAnagrams(word, arrayOrWord) {
  return (typeof(arrayOrWord) === 'object') ? arrayFn(word, arrayOrWord) : stringFn(word, arrayOrWord);
}

function arrayFn(word, arrayToSearch) {
  return arrayToSearch.filter(function (arrayWord) {
    return sortWord(arrayWord) === sortWord(word) && arrayWord.toLowerCase() !== word.toLowerCase();
  });
}

function stringFn(word, wordToSearch) {
  return (sortWord(wordToSearch) === sortWord(word) && wordToSearch.toLowerCase() !== word.toLowerCase()) ? [wordToSearch] : [];
}

function sortWord(word) {
  return word.toLowerCase().split('').sort().join('');
}

function isAnagram(word1, word2){
  return sortWord(word1) === sortWord(word2) && word1.toLowerCase() !== word2.toLowerCase();
}

module.exports = {
  findAnagrams: findAnagrams,
  sortWord: sortWord,
  isAnagram: isAnagram
};
