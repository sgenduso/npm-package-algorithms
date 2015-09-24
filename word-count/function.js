var wordCount = function (input) {
  input = input.trim().replace("\n"," ").replace("\t"," ").replace("  "," ").split(" ");
    var result = {};
    for(var i=0; i<input.length; i++) {
      result[input[i]] = result[input[i]] || 0;
      result[input[i]] += 1;
    }
    return result;
};


module.exports = {
  wordCount: wordCount
};
