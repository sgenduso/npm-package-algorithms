
function search(criteria, arrayToSearch, fuzzyOrNo, tolerance) {
  var filtered = [];
  arrayToSearch.forEach(function (name) {
    var matchCount = 0;
    var nameLength = name.length;
    if (fuzzyOrNo === true) {
      for (var i = 0; i < criteria.length; i++) {
        if(name.toLowerCase().match(criteria[i].toLowerCase())){
          matchCount++;
          name.slice(name.indexOf(criteria[i]),1);
        }
      }
      if (Math.abs(matchCount - nameLength) <=tolerance && Math.abs(criteria.length - nameLength) <=tolerance) {
        filtered.push(name);
      }
    }
    else if (name.toLowerCase().indexOf(criteria.toLowerCase()) > -1) {
      filtered.push(name);
    }
  });
  return filtered;
}


function findCount(criteria, stringToSearch) {
  var search = new RegExp(criteria.toLowerCase(), 'g');
  var count = (stringToSearch.toLowerCase().match(search) || []).length;
  return count;
}

module.exports = {
  search: search,
  findCount: findCount
};
