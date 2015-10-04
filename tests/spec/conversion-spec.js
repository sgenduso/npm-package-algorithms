var myCode = require('../../algorithms/conversion/function.js');

describe('mpgTolp100km', function() {
  it('converts mpg to l/100km', function() {

    expect(myCode.mpgTolp100km(42)).toEqual(5.6);

  });
});


describe('lp100kmTompg', function() {
  it('converts l/100km to mpg', function() {

    expect(myCode.mpgTolp100km(9)).toEqual(26.13);

  });
});
