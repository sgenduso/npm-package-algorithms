var myCode = require('../../algorithms/filters/function.js');

describe('filterType', function() {

  it('filters all elements of a specific type out of an array and returns a new array with them removed', function() {


    expect(myCode.filterType([1, 2, 'a', 'b'], 'string')).toEqual([1,2]);

    expect(myCode.filterType([1, 2, 'a', 'b'], 'number')).toEqual(['a','b']);


  });

});
