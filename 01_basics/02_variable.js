const accountId=4321
let accountEmail="abhi@gmail.com"
let accountpassword="12345"
let accountcity="Delhi"
let accountphonenumber;
console.log(accountId);
console.table([accountId,accountEmail,accountcity,accountpassword,accountphonenumber])
/*
Multiline comment in js 
{const} {let} {var} are the keyword that specific that particular variable in constent value or let value or var value.
->constent value is not change once it was declared.
->let value can be changed further.
->var value is also changed further. But there is one problem with var that it has a problem with scoping.
->console.log is used to display a output on screen.
->By using console.table we use table format to display values in a tabular form.
->NOTE:- Mostly developer use {let} and {const} value in there program because it provide more control over the program.
->Single line comment define by // forward slash
->Multiline comment define by /*
->If we do not define the value it will be Undefined eg:-accountphonenumber is undefined
*/