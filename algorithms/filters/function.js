function filterType(array, type){
  return array.filter(function (item) {
    return (typeof item !== type);
  });
}

module.exports = {
  filterType: filterType
};
