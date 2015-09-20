module.exports = {
  randBetween: function (min, max, exclusive, allowDecimals, decimalPlaces) {
    areEqual(min,max);
    if (exclusive) {
      if (allowDecimals) {
        return getRandWithDecExclusive(min, max, decimalPlaces);
      } else {
        diffOfOne();
        return getRandomIntExclusive(min, max);
      }
    } else {
      if (allowDecimals) {
        return getRandWithDecInclusive(min, max, decimalPlaces);
      } else {
        return getRandomIntInclusive(min, max);
      }
    }
  }
};


areEqual = function (min, max) {
  if (min === max) {
    return "There is no number between " + min + " and " + max + ".";
  }
};

diffOfOne = function (min, max) {
  if (max - min === 1) {
    return "There is no number between " + min + " and " + max + ", excluding "  + min + " and " + max + " themselves.";
  }
};

getRandWithDecExclusive = function (min, max, decimalPlaces) {
  return (Math.random() * (max - min) + min).toFixed(decimalPlaces || 2);
};

getRandWithDecInclusive = function (min, max, decimalPlaces) {
  return (Math.random() * (max - min + 1) + min).toFixed(decimalPlaces || 2);
};

getRandomIntExclusive = function (min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
};

getRandomIntInclusive = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
