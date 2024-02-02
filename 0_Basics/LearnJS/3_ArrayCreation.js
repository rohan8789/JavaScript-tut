/*
    Array is a reference data type that store more than one variable of different data types

    Ways to create:-
    1. Array literals
    2. Using new Keyword

    Methods:-
    1. push, unshift
    2. pop, shift
    3. reverse, length
    4. sort
    5. slice
    6. join, concat -> joins array using a seperator.
*/


let MultVarArr = [
  12,
  54,
  32,
  false,
  "Rohan",
  ["a", "b", "c"],
  { name: "Rohan", age: 12 },
];
console.log(MultVarArr);

let arr = new Array(3, 10, 40, 5, 20);
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

arr.push(100);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(100);
console.log(arr);
arr.shift();
console.log(arr);

let s = arr.toString();
console.log(typeof s);

console.log("Sorting by alphabet: ");
arr.sort();
console.log(arr);

console.log("Sorting by number: ");
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);

console.log("Using join: ");
let m = arr.join("-");
console.log(m);

let x = arr.slice(2, 5); //slice(startInd, EndInd);
console.log(x);

