var Gigasecond = function (string) {
 this.day = string;

};


var test = new Gigasecond(new Date(2015, 9 , 24));

Gigasecond.prototype.date = function () {
   this.day.setDate(this.day.getDate() + 11574);
   return this.day;
};

console.log(test.date());

module.exports = Gigasecond;
