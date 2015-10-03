
var queryParser = function (input) {
  var parsed ={};
  if (input === null){
    return {};
  }else{
  input = input.replace("?","").split("&");
  for (var i = 0; i < input.length; i++) {
     input[i] = input[i].split("=");
    parsed[input[i][0]] = input[i][1];
  } return parsed;
}
};
module.exports = {
  queryParser: queryParser
};
