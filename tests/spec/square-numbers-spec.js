var myCode = require('../../algorithms/square-numbers/function.js');

describe('isSquare', function() {

  it('returns a boolean of whether a given number is a perfect square', function() {


    expect(myCode.isSquare(16)).toEqual(true);
    expect(myCode.isSquare(25)).toEqual(true);
    expect(myCode.isSquare(100)).toEqual(true);
    expect(myCode.isSquare(7)).toEqual(false);
    expect(myCode.isSquare(-4)).toEqual(false);
    expect(myCode.isSquare(0)).toEqual(true);


  });

});
