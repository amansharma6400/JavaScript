"use strict";//treat all JS code as newer version
// 
/* 
DataTypes in JavaScript
NOTE:- JavaScript Variable can store any type of data
=>Number dataType:- real number with decimal and withour decimal eg:-let number_datatype=45; 
                let number_datatype=12.23;
=>String dataType:-string can we used as single"" '' 
                eg:-let stringVariable='singlequotes';
                let stringVariable2="doublequotes";
=>Bigint dataType:-  stored in a a 64-bit floating-point format.
=>Boolean dataType:- store two values, TRUE and FALSE.
=>Object dataType:- object datatype is 

Interview question:- 
=>NULL ka typeof jab karte hai toh OBJECT show karta hai
=>UNDEFINED ka typeof jab karte hai toh UNDEFINED hi show karta hai 
*/
let num=12;//numberdatatype
let string='stringvariable'//stringdatatype
let bol=true//bollean datatype
let bigInt=446646655545759//bigint datatype
let objectVariable={firstname:"Aman",lastname:"Sharma"}
let numberVariable=15+'HappyCoding'
//Note:- When adding a number and a string, JavaScript will treat the number as a string.
console.log(typeof(undefined))//undefined
console.table([num,string,bol,bigInt,objectVariable,numberVariable])