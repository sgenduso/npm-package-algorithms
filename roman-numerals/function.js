
var romans = {
  'M': 1000,
  'D': 500,
  'C': 100,
  'L': 50,
  'X': 10,
  'V': 5,
  'I': 1
};

 function romanToArabic(incoming){
    if(incoming.length === 0){
      return 0;
    }else{
      if(romans[incoming[1]]>romans[incoming[0]]){
      return (romans[incoming[1]] - romans[incoming[0]]) + romanToArabic(incoming.substring(2));
    }else{
      return romans[incoming[0]] + romanToArabic(incoming.substring(1));
    }

    }
 }

module.exports = {
  romanToArabic: romanToArabic
};
