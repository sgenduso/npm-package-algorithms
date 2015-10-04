
function isSquare(number){
  return Math.sqrt(number) % 1 === 0;
}

module.exports = {
  isSquare: isSquare
};
