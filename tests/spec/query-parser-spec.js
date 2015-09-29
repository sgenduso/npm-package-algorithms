var parseQueryString = require('../../query-parser/function.js').queryParser;

describe('parseQueryString', function () {
  it('turns a querystring into an object', function () {
    var input = '?restaurant=OliveGarden&zip=32926';
    var actual = parseQueryString(input);
    var expected = { restaurant: 'OliveGarden', zip: '32926' };
    expect(actual).toEqual(expected);

  });
  it("returns empty object when input is null", function(){
    var input= null;
    var actual= parseQueryString(null);
    var expected={};
    expect(actual).toEqual(expected);
  });
});
