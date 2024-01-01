let str="  I'm a Software Developer and I'm currently working on  WEB  "
// to convert this text into a small case letter use toLowerCase() string method
let lowerCaseLetter=str.toLowerCase()
// str= str.toLowerCase()
console.log(str) //orginal string
console.log(lowerCaseLetter) //convert to lowerCase Letter
// console.log(str)

// TO UPPERCASE STRING METHOD
let upperCase=str.toUpperCase()
console.log(upperCase)


// STRING METHOD : toString()
let num=78;
console.log(typeof(num))
let stringMethod= num.toString()
console.log(`This the string method which convert any value to string ${stringMethod} this 78 value is converted to number to  string value`)
console.log(typeof(stringMethod))

// SUBSTRING METHOD:substring()
let string="SOFTWARE"
let subString=string.substring(1,7)
console.log(subString)

// INCLUDES METHOD: includes()
let includeMethod= str.includes("company")
console.log(includeMethod)

//MATCH METHOD: match()
//USING regular expression 
let exp=/Software/; //regular expression used in match method 
let matchMethod=str.match(exp)
console.log(matchMethod)
//Without using regular expression 
let result=str.match("Software")
console.log(result)


//CONCAT method in string:concat()
let conCatString=str.concat(" and I'm currently learing string methods in JavaScript!")
console.log(conCatString)

//TRIM method in string:trim()
let trimString=str.trim()//remove the extra white space from the string
console.log(trimString)

//EVALUATE method in string: eval()
let expression="9+1"
let evalMethod=eval(expression);
console.log(evalMethod)

//REPLACE method in string:replace(firststring which is to be replaced,secondstring that is to be replaced firststring)
let value1="Happy birthday!"
let value2=value1.replace("birthday","newyear")
console.log(value2)

//REPEAT string method: repeat()
let repeatMethod='Hii!'.repeat(3);
console.log(repeatMethod)

//SEARCH string method: search()
let searchMethod=str.search('Software Developer')
console.log(searchMethod)

//CHARAT string method: charat()
let charatMethod=str.charAt(4)
console.log(charatMethod)