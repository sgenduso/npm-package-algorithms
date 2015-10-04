//1 gallon = 3.785411784 liters
//1 mile = 1.609344 kilometers

function mpgTolp100km(x){
  return parseFloat((3.785411784 / (x * 1.609344) * 100).toFixed(2));
}

function lp100kmTompg(x){
  return parseFloat(((100 / 1.609344) / (x / 3.785411784)).toFixed(2));
}


module.exports = {
  mpgTolp100km: mpgTolp100km,
  lp100kmTompg: lp100kmTompg
};
