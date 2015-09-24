var myCode = require('../../pangram/function.js');
describe('isPangram', function() {
  it('it checks if a string is a pangram', function() {
    var pan1='Cwm fjord veg balks nth pyx quiz.'
    var pan3='the brown fox'
    var pan4='12abcdefghijklmno532pqrstuvwxYZ3'
    var pan5='abcdefGHILMNOPqr s t u v'
    expect(myCode.isPangram(pan1)).toEqual(true);
    expect(myCode.isPangram(pan3)).toEqual(false);
    expect(myCode.isPangram(pan4)).toEqual(true);
    expect(myCode.isPangram(pan5)).toEqual(false);
  });
});
