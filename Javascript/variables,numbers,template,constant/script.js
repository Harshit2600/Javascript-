//Example of let//
let myAge=20;
console.log(myAge)

//Example of const//
const score=5;
console.log(score)

//Example of string data type
let myName="Harshit Pratap Singh Bhadauria";
console.log(myName)

//Concatenation
let firstName="Harshit";
let lastName="Pratap Singh Bhadauria";
let fullName= firstName+lastName;
console.log(fullName)
// In concatenation , bring space in between
console.log(firstName,lastName)

//Acessing Characters
console.log(firstName[0])

//Length of Variable
firstNameLength=firstName.length;
console.log(firstNameLength)

//Converting to lowercase and uppercase
console.log(firstName.toLocaleUpperCase())
console.log(lastName.toLocaleLowerCase())

//Replacing character with something else
console.log(firstName.replace("H","v"))
console.log(lastName.replaceAll("a","q"))

//Getting substring from the string
console.log(lastName.substring(0,10,))

//Use of tempate literals
let result=`My name is ${fullName} i am ${myAge} years old and i scored ${score} in test`;
console.log(result)