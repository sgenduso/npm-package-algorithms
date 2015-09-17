var myCode = require('../function.js');

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
