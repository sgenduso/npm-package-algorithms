var myCode = require('../function.js');

describe('factorial', function() {
  it('takes an integer and returns its factorial product', function() {
    //Example: 4 => 4 * 3 * 2 * 1
    expect(myCode.factorial(0)).toEqual(1);
    expect(myCode.factorial(1)).toEqual(1);
    expect(myCode.factorial(2)).toEqual(2);
    expect(myCode.factorial(3)).toEqual(6);
    expect(myCode.factorial(4)).toEqual(24);
  });
});
