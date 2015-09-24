var myCode = require('../../roman-numerals/function.js');

describe('romanToArabic', function() {
  it('takes a string of Roman Numerials and returns the decimal value', function() {

    expect(myCode.romanToArabic("V")).toEqual(5);
    expect(myCode.romanToArabic("VIII")).toEqual(8);
    expect(myCode.romanToArabic("IV")).toEqual(4);
    expect(myCode.romanToArabic("XLVII")).toEqual(47);
    expect(myCode.romanToArabic("LXVII")).toEqual(67);
  });
});
