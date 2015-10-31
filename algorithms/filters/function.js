function arrayDiff(array1, array2){
  return array1.filter(function(e,i){
      return (array2.indexOf(e) === -1);
    });
}

function filterType(array, type){
  return array.filter(function (item) {
    return (typeof item !== type);
  });
}

module.exports = {
  arrayDiff: arrayDiff,
  filterType: filterType
};
