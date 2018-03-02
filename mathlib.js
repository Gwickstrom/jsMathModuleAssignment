module.exports = function (){
  return {
    add: function(num1, num2) {
        var sum = num1 + num2;
        console.log(sum);
        return sum;
    },
    multiply: function(num1, num2) {
        var answer = num1 * num2;
        console.log(answer);
        return answer;
    },
    square: function(num) {
        var answersquared = num * num;
        console.log(answersquared);
        return answersquared;
         // add code here
    },
    precisionRound: function(number, precision) {
      var factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    },
    random: function(num1, num2) {
        randomNum = Math.random () * (num2 - num1) + num1;
        console.log(Math.round(randomNum));
        return randomNum;
         // add code here
    }
  }
};
