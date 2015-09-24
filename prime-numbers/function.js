module.exports = {
  isPrime: function(num){
    var isPrime = true;
    if(num<2){
      return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
      num % i == 0 ? isPrime=false: isPrime;
    }
    return isPrime;
  }
};

//Refactor: what if numbers are below 0? What should 0 return? Isn't 1 prime? Why square root instead of half?
