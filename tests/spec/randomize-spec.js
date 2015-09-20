var myCode = require('../../randomize/function.js');

describe('randBetween', function() {
  it('returns a random number between a min and max', function() {
  var min1 = 1;
  var max1 = 100;

  var min2 = 500;
  var max2 = 1000;

    expect(myCode.randBetween(min1, max1)).toBeGreaterThan(min1);
    expect(myCode.randBetween(min1, max1)).toBeLessThan(max1);

    expect(myCode.randBetween(min2, max2)).toBeGreaterThan(min2);
    expect(myCode.randBetween(min2, max2)).toBeLessThan(max2);

  });
});
