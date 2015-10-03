module.exports = {
  isPalindrome: function(input){
    var word = input.split('').reverse().join('');
    return word == input ? true: false;
  }
};
