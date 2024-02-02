/*
    Three traditionals ways to write loops.
    1. for, while, do while

    Three ways to iterate html document when converted to array using arr.from() keyword

    forEach, forin, forof

    forof is most used
*/

let arr = [1, 2, 3, 4, 5, 6];

console.log("For loop: ");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], i);
}

console.log("While loop: ");
let i = 0;
while (i < arr.length) {
  console.log(arr[i], i);
  i++;
}

console.log("do-while Loop: ");
i = 0;
do {
  console.log(arr[i], i);
  i++;
} while (i < arr.length);

console.log("Lets see forEach loop. ");
arr.forEach(function (ele, ind, arr) {
  console.log(ele, ind, arr);
});

console.log("Using For in Loop: ");
for (let i in arr) {
  console.log(arr[i], i);
}

console.log("Using For of Loop: ");
for (let i of arr) {
  console.log(i);
}