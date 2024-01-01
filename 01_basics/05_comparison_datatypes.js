/*Basic camparison use >,<,==,>=,<= */
console.log(45>21) //True output
console.log(45<21) //False output
console.log(45==21) //False output

//This are the basic comparison operation between same datatype 
//But if there are different data type

console.log("45" > 21) 
//one is string value and another is numeric value but JS automatically convert "45" into number type and the result is TRUE
console.log(null> 0)    //False
console.log(null == 0) //False
console.log(null>=0)  //True

/*NOTE:- Equality and comparison operator work differenlty
=>Comparison operator convert {Null} to zero 
=>Equality operator do not convert it 
=>In JS camparion and equality check both are different things.
*/

//Important NOTE:- NOT RECOMMENDED TO USE DIFFERENT DATATYPE WHEN COMPARING VALUES.

//Strict check in comparison

console.log("45"===45)  //False
//In this example last equal sign will check the datatype wheather it is of same data type or not

//DON'T COMPARE DIFFERENT DATATYPES
//COMPAREING SAME DATA TYPES EASY TO PREDICT
