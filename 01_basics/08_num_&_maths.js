//++++++++++++Number in JavaScript+++++++++++++++

const num=89;
console.log(num);

// Number constructor

const balance=new Number(31);
console.log(balance); //this will return number as a object

//Some of the number methods are

//=> toString() method convert number value into string!
console.log(balance.toString()) //convert the number into string

//=> tofixed() method will formats this number using fixed-point notation
let fixedNumber=new Number(34.391004)
console.log(fixedNumber);
console.log(fixedNumber.toFixed(2));

//Number and Maths in JavaScript

//Number methods 

//toString() method
let num=123.3913
console.log(num);
console.log(num.toString())

//toFixed() method 
// {This method is used for float point notation to have a fixed length after decimal value in this example the float number have fixed number of 2}
console.log(num.toFixed(2)) // toFixed() also return a string value

// toPrecision()
console.log(num.toPrecision(4)) //toPrecision() also return a string value


//toLocalString()
const numberOne= 1000000000;
console.log(numberOne.toLocaleString('en-NZ'))
console.log(numberOne.toLocaleString('en-IN')); //Now here the numberOne value is converted to indian type number system.

// ++++++++++++++MATHS+++++++++++++++++++++

//Static properties

//Math.PI property
console.log(Math.PI);
console.log(Math.PI + 2);

//Math.SQR1_2
console.log(Math.SQRT1_2);
console.log(Math.SQRT1_2 + 2);

//Math.SQRT2
console.log(Math.SQRT2);
console.log(Math.SQRT2 + 2);

//Static Methods

//Math.abs()
console.log(Math.abs(-99)) //only change -ive number to +ive number
console.log(Math.abs(99))

//Math.round()
console.log(Math.round(4.1453))
console.log(Math.round(4.5))
console.log(Math.round(4.90))
console.log(Math.round(-4.90))

//Math.ceil()
console.log(Math.ceil(34.234));
console.log(Math.ceil(34.01));
console.log(Math.ceil(34.));
console.log(Math.ceil(-34.853));

//Math.floor()
console.log(Math.floor(34.234))
console.log(Math.floor(34.01));
console.log(Math.floor(34.));
console.log(Math.floor(-34.853));

//Math.random()
console.log(Math.floor(Math.random()*10) +1);

//Getting a random number between two values
const min=10
const max=20
console.log( Math.floor(Math.random()*(max-min +1)) +min);