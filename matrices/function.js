module.exports = {
  sumMatrices: function(a,b){
    b.forEach(function(x,i){
      x.forEach(function(y,j){
        a[i][j]+=y;
      });
    });
    return a;
  }
};

//Refactor: return a new matrix, don't manipulate parameters. Add more functions (Mandy?).
