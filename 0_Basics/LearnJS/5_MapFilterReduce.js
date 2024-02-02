/*
    1. arr.map() vs arr.forEach
        map returns a new object array in return whereas forEach does not have a return type.

    2. arr.filter() does some operation and based on that operation, it return a new filtered obj.

    3. arr.reduce() function reduces the provided array and return a single value
    
*/




let arr = [10, 20, 30, 40, 50, 60];

let x = arr.map((ele, ind, arr) => {
  // console.log(ele,ind,arr);
  return ele + 100;
});
console.log(x);

let arr1 = [15, 16, 26, 35, 40, 19, 12];
let y = arr1.filter((ele, ind, arr) => {
  // console.log(ele,ind,arr);
  return ele % 5 == 0;
});
console.log(y);

let z = arr1.reduce((total, ele) => {
  console.log(total, ele);
  return total + ele;
});
console.log(z);