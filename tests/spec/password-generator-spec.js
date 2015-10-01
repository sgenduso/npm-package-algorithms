var myCode = require('../../algorithms/password-generator/function.js');
describe('generatePassword', function() {
  it('generates a strong password based on a string input by the user', function() {

    var chars = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '?'];
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var input1='When it\'s game time it\'s pain time baby';
    var actualPw = myCode.generatePassword(input1);

    //expect password length to equal the number of words in the input (one letter per word) plus 1 (one special character) plus 2 (two single digits)
    expect(actualPw.length).toEqual(11);

    //expect password to begin with a special character
    expect(chars.indexOf(actualPw[0])).toBeGreaterThan(-1);

    //expect password to end with a number between 1 and 9
    expect(nums.indexOf(Number(actualPw[actualPw.length-1]))).toBeGreaterThan(-1);

    //expect second-to-last character in password to be a number between 1 and 9
    expect(nums.indexOf(Number(actualPw[actualPw.length-2]))).toBeGreaterThan(-1);

  });
});
