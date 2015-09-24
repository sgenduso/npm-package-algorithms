var myCode = require('../function.js');

describe('romanNumeral', function() {
  it('takes a string of Roman Numerials and returns the decimal value', function() {

    expect(myCode.romanNumeral("V")).toEqual(5);
    expect(myCode.romanNumeral("VIII")).toEqual(8);
    expect(myCode.romanNumeral("IV")).toEqual(4);
    expect(myCode.romanNumeral("XLVII")).toEqual(47);
    expect(myCode.romanNumeral("LXVII")).toEqual(67);
  });
});
