
//Type conversion 
//type coercion is implicit whereas type conversion can be either implicit or explicit.
console.log('Type conversion and Type coersion');
let myvar = 34;
myvar = String(34);
console.log(myvar, typeof(myvar));

//boolean
let booleanvar = true;
booleanvar = String(true);
console.log(booleanvar, typeof(booleanvar));

//dates
let date = new Date();
date = String(new Date());
console.log(date, typeof(date));

//arrays
let arr = [1,2,3,4,5];
console.log(arr, typeof(arr));
console.log(arr.length);

arr = String([1,2,3,4,5]);
console.log(arr, typeof(arr));
console.log(arr.length);

//toString() method also convert var to string
let i = 75;
console.log(i.toString());

//convert string to number
let str = "3434";
str = Number(str);
str = Number("234e"); //NaN ----> Not a Number
str = Number(false);
str = Number([1,2,3,4,5,6,7]);
console.log(str, typeof(str));

let num1 = '34.098';
num = parseInt(34.098);  //gives 34
num = parseFloat('34.098');  //gives 34.098

console.log(num.toFixed(10), typeof(num));

//Type coercion;
let v1 = Number("345");
let v2 = 45;

console.log(v1+v2);
