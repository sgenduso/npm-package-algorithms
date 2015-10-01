var myCode = require('../../algorithms/search-and-match/function.js');

describe('findCount', function() {

  it('returns the exact number of times that one string appears within a larger string', function() {

    expect(myCode.findCount('rob', 'RobbieRob')).toEqual(2);
    expect(myCode.findCount('Rob', 'robbierob')).toEqual(2);
    expect(myCode.findCount('rob', 'Andromeda')).toEqual(0);

  });

});

describe('search', function() {

  it('searches an array and returns an array of all the elements where a given value is a substring of that element; takes a parameter to allow fuzzy matches of the search; takes a parameter to allow degrees of fuzzy tolerance', function() {

    var names = [
      'Amanda',
      'Sam',
      'Nick',
      'Nicholas',
      'Roberto',
      'Robbie',
      'Apart',
      'Marcus'
    ];

    expect(myCode.search('Marcos', names, false)).toEqual([]);

    expect(myCode.search('Marcos', names, true, 1)).toEqual(['Marcus']);

    expect(myCode.search('Marcos', names, true, 3)).toEqual(['Sam', 'Nick', 'Apart', 'Marcus']);

  });

});
