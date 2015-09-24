function shuffle(string){
  var letters = string.split('');
  var length = letters.length;
  var shuffled = [];
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * letters.length);
    shuffled.push(letters[index]);
    letters.splice(index, 1);
  }
  return shuffled.join('');
}


module.exports = {
  shuffle: shuffle
};
