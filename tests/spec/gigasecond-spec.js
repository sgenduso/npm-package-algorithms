var Gigasecond = require('../../gigasecond/function.js');

describe("Gigasecond", function() {


    it("test 1", function() {
      var giga = new Gigasecond(new Date(2011, 3, 25));
      var expectedDate = new Date(2043, 0, 1);
      expect(giga.date()).toEqual(expectedDate);
    });

    it("test 2", function() {
      var giga = new Gigasecond(new Date(1977, 5, 13));
      var expectedDate = new Date(2009, 1, 19);
      expect(giga.date()).toEqual(expectedDate);
    });

    it("test 3", function() {
      var giga = new Gigasecond(new Date(1959, 6, 19));
      var expectedDate = new Date(1991, 2, 27);
      expect(giga.date()).toEqual(expectedDate);
    });
  });
