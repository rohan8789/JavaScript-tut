
/*
Two Types of data types:- Primitive and Reference Data types
    1. Primitive data types examples:-
        string, numbers, boolean, Null, Undefined, symbol
        -Made in stack

    2. Reference data types:-
        Array, objext literals, functions, dates
        -made in heap
*/
let name = 'Rohan Singh'
console.log('My name is '+ name);
console.log('My name is '+  typeof(name));

let marks = 98;
console.log('My marks is '+ marks);
console.log('My marks is '+ typeof(marks));

//boolean
let boolean = true;
console.log('He speaks ' +boolean);
console.log('He speaks ' +typeof(boolean));

//null
let nullvar = null;
console.log(typeof(nullvar));

//undefined
let undef = undefined;
console.log(typeof(undef));

//Reference data types
//array
let myarr = [1, 32, 12, false, 'ROhan SIngh'];
console.log(typeof(myarr));

//object literals
let stmarks = {
    Rohan : 92, 
    harry : 34, 
    shubham:35
}
console.log(stmarks);
console.log(typeof(stmarks));

//Function
function findfun(){

}
console.log(typeof(findfun));

//date
let date = new Date();
console.log(typeof date);
console.log(typeof(date));

