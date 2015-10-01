var myCode = require('../../algorithms/randomize/function.js');

describe('randBetween', function() {
  it('returns a random number between a specified min and max, defaulting to include max and min', function() {
  var min1 = 1;
  var max1 = 10;
  var rand1 = myCode.randBetween(min1, max1);

  var min2 = 100;
  var max2 = 500;
  var rand2 = myCode.randBetween(min2, max2);


    expect(rand1 >= min1 && rand1 <= max1).toBeTruthy();
    expect(rand2 >= min2 && rand2 <= max2).toBeTruthy();
  });

  it('returns an error if there is no number between the min and max', function () {
    var min = 1;
    var max = 1;
    var rand = myCode.randBetween(min, max);

    expect(rand).toEqual("There is no number between 1 and 1.");
  });

  it('returns an error if trying to find an integer between min and max (exclusive) when (max - min === 1)', function () {
    var min = 1;
    var max = 2;
    var rand = myCode.randBetween(min, max, true);

    expect(rand).toEqual("There is no number between 1 and 2, excluding 1 and 2 themselves.");
  });

  it('has an option to allow decimal values, and the number of decimal places to round to', function () {
    var min = 1;
    var max = 2;
    var rand = myCode.randBetween(min, max, true, true, 2);

    expect(rand > min && rand < max).toBeTruthy();

  });

});
