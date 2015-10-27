var myCode = require('../../algorithms/filters/function.js');

describe('filterType', function() {

  it('filters all elements of a specific type out of an array and returns a new array with them removed', function() {


    expect(myCode.filterType([1, 2, 'a', 'b'], 'string')).toEqual([1,2]);

    expect(myCode.filterType([1, 2, 'a', 'b'], 'number')).toEqual(['a','b']);


  });

});

describe('arrayDiff', function() {

  it('filters all elements of one array out of another', function() {


    expect(myCode.arrayDiff([1, 2, 2, 3], [2])).toEqual([1,3]);


  });

});
