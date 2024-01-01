/*Typeof function in javascript used to see what datatype is used number,string,boolean,null,undefined,object,array 

- interview related questions 

- primitive and non primitive (call by value, call by reference)

- primitive:7 (call by value)

- string, number, bolean, null, undefined, symbol , BigInt

- non primitive:3 (call by reference)

- arrays, object, function 

- dynamically type vs statically type

- js is dynamically typed

- const id = Symbol("123")

- const anotherId = Symbol("123")

- id === anotherId => false

- array, object, function overview 

- typeof datatyped is available on documentation 
*/

console.log(typeof(451)); //Number

let numberVariable;
console.log(typeof numberVariable)//undefined

let bolleanVariable=true;
let bolleanValue=Number(bolleanVariable);
console.log(typeof bolleanVariable)
console.log(typeof bolleanValue)

//Object datatypes use key and value pair
let newObj={
    name:'Aman sharma',
    age:12,

}
console.log(newObj);
console.log(typeof(newObj))

//Functions in Javascript overview

let newFunction=function () {
    console.log("Namaste Duniya!")
    console.log("First Function of JavaScript")
    console.log("Doing Great!!")
    
}
newFunction();
