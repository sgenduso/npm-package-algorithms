module.exports = {
  isPrime: function(num){
    var isPrime = true
    if(num<2){
      return false
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
      num % i == 0 ? isPrime=false: isPrime;
    }
    return isPrime
  }
}
