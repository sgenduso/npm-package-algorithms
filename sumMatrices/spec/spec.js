var myCode = require('../function.js');

describe('sumMatrices', function() {
  it('takes two matrices and returns their sum in another matrix', function() {
  var a = [[4, 0], [1, 9]]
  var b = [[9, 1], [-3, 6]]
  var z = [[13, 1], [-2, 15]]

  var c = [[1, 1, 1], [1, 1, 1]]
  var d = [[2, 3, 5], [3, 2, 2]]
  var y = [[3, 4, 6], [4, 3, 3]]

    expect(myCode.sumMatrices(a,b)).toEqual(z);
    expect(myCode.sumMatrices(c,d)).toEqual(y);
  });
});
