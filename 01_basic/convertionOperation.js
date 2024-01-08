let number = "33a";
let convertNumber = Number(number);

console.log(number);
console.log(typeof number);
console.log(convertNumber);
console.log(typeof convertNumber);

// "33" - 33
// "33ab" - NaN
// true - 1, false - 0

let user = "";
let userConvert = Boolean(user);
console.log(userConvert);

// 1 = true, 0 = false
// "" = false, "a" " " = true

let string = "33";
let convertString = String(string);
console.log("String convert type of - ", typeof(convertString));

/*-----------------Operations-----------------------*/
console.log(10**3);