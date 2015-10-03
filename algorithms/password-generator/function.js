var randBetween = require('../randomize/function.js').randBetween;

var chars = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '?'];
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function generatePassword(string) {
  var pw = '';
  pw += chars[randBetween(0, chars.length-1)];
  string.split(' ').forEach(function (word) {
    pw += word[0].toLowerCase();
  });
  pw += randBetween(1,9);
  pw += randBetween(1,9);
  return pw;
}

module.exports = {
  generatePassword: generatePassword
};
