
console.log('Variables in JavaScript');
//Variables in js
//let var const
var name = 'Rohan Singh';
var channel = 'Educational';
var marks = 234;
console.log(name, channel, marks);

//Rules for creating js variables
/*
1. Cannot start with numebrs
2. can start with letters numbers or $
3. they are case sensitive
*/

//Stay away from using _ and $
//Variable is changable/updatable.
//Const can never be changed.
//const always need a = value.
const ownername = 'ROhan Singh';
console.log(ownername);

const arr1 = [12, 23, 44, 53, 11];
arr1.push(233);
console.log(arr1);

/*
    1. Let vs var.  let creates local var, var creates global variable
    2. let is available for a block of code defined under a scope.
    3. If declared var, It will be available for whole function
*/

var city = 'Patna';
{
    let city = 'Gaya';
    console.log(city);
}
console.log(city);

/*
    Most common case in programming
    1. camelCase
    2. kabab-case
    3. snake_case
    4. PascalCase
*/
