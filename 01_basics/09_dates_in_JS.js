// +++++++++++++++++++++ DATES IN JAVASCRIPT +++++++++++++++++++++++++

let myDate = new Date();
console.log(myDate);

//Basic Methods in Date
// convert to string()
console.log(myDate.toString());

//Convert toLocaleString()  method returns a Date object as a string. The default language depends on the locale setup on your computer.
console.log(myDate.toLocaleString("en-IN"));
console.log(myDate.toLocaleString("en-US"));
console.log(myDate.toLocaleString("ja-JP"));

//Convert  toISOString() method returns a date object as a string .toISOString() method returns a date object as a string, using the ISO standard.The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ
console.log(myDate.toISOString());

//Convert toJSON() toJSON() method returns a date object as a string, formatted as a JSON date.JSON dates have the same format as the ISO-8601 standard: YYYY-MM-DDTHH:mm:ss.sssZ
console.log(myDate.toJSON());

//Convert toDateString()
console.log(myDate.toDateString());

//Convert toTimeString()
console.log(myDate.toTimeString());

//Convert tolocaleDateString()
console.log(myDate.toLocaleDateString());

//Convert tolocaleTimeString()
console.log(myDate.toLocaleTimeString());

// ++++++++++++++++++++++++++++++CREATING OWN DATES IN JAVASCRIPT++++++++++++++++++++++++++++

//Setting date in js
//!IMPORTANT NOTE:- In javaScript month count from 0 to 11.
let myOwnDate = new Date(2000, 4, 3);
console.log(myOwnDate.toDateString());
console.log(myOwnDate.toTimeString());

//HOW WE CAN SET DATE AND TIME
//First way to set time and date are:-
let randomDateTime = new Date(2010, 10, 30, 9, 30);
console.log(randomDateTime.toString());
//Second way to set time and date are:-
let myDateTime = new Date("May 3,2000 , 17:30:00");
console.log(myDateTime.toString()); //this is the way to set date and time in JavaScript

// One more way to declare date and time
let dateTimeToday = new Date("01-07-2024 11:29:00");
console.log(dateTimeToday);

// +++++++++++++++++++++TIMESTAMP IN JS+++++++++++++++++++++

//TimeStamp is mainly used for camparison or to design polls in quiz, hotel room bookings etc.
let myTimeStamp = Date.now();
console.log(Math.floor(myTimeStamp / 1000)); //output in the form of milliseconds

//Comparing two date
//Step1:- let first convert the dateTimeToday into milliseconds value =>To convert in millisecond use getTime()
console.log(Math.floor(myOwnDate.getTime() / 1000));
//!IMPORTANT NOTE=> Interview Question { How to convert a milliseconds to seconds  } => by simply multiply by 1000