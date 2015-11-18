var myCode = require('../../algorithms/morse-code/function.js');

describe('decodeMorse', function() {

  it('decodes a morse code message into plain english', function() {


    expect(myCode.decodeMorse('... .- --')).toEqual('sam');


  });

});

describe('encodeTextToMorse', function() {

  it('encodes a string of plain english into morse code', function() {


    expect(myCode.encodeTextToMorse('sam')).toEqual('... .- --');


  });

});
