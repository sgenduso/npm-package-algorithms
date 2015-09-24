var myCode = require('../../isPrime/function.js');

describe('isPrime', function() {
  it('checks if a number is prime', function() {
    expect(myCode.isPrime(0)).toEqual(false);
    expect(myCode.isPrime(1)).toEqual(false);
    expect(myCode.isPrime(53)).toEqual(true);
    expect(myCode.isPrime(80)).toEqual(false);
    expect(myCode.isPrime(31)).toEqual(true);
    expect(myCode.isPrime(-1)).toEqual(false);
    expect(myCode.isPrime(-31)).toEqual(false);
    expect(myCode.isPrime(31)).toEqual(true);
    expect(myCode.isPrime(4.0)).toEqual(false);
  });
});

//What about 2?
//Why is 1 false?
//4.0 == 4 so should be prime?
