var myCode = require('../../transpose/function.js');

describe('transpose', function() {
  it('takes an array of array and transposes them (90 degree rotation)', function() {
    var arr1 = [
          ['a', 'a', 'a', 'a'],
          ['b', 'b', 'b', 'b'],
          ['c', 'c', 'c', 'c'],
          ['d', 'd', 'd', 'd'],
        ];

    var arr2 =
        [
          [ 'a', 'b', 'c', 'd' ],
          [ 'a', 'b', 'c', 'd' ],
          [ 'a', 'b', 'c', 'd' ],
          [ 'a', 'b', 'c', 'd' ]
        ]


    expect(myCode.transpose(arr1)).toEqual(arr2);
  });
});
