var mathlib = require('./mathlib')();
console.log(mathlib);
mathlib.add(2,3);
mathlib.multiply(5,2);
mathlib.square(10);


mathlib.precisionRound(mathlib.random(2, 20))
