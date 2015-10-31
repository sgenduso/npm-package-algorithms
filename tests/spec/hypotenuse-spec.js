var myCode = require('../../algorithms/hypotenuse/function.js');

describe('calculateHypotenuse', function() {
  it('calculates the length of the hypotenuse of a triangle given the lengths of the other 2 sides', function() {

    expect(myCode.calculateHypotenuse(3,4)).toEqual(5);

  });
});
