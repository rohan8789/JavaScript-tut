/*
    1. map is a js object that holds key-value pair 
    2. map vs object
        Order is preserved in map
        map can store any data type obj store integer string symbol

    set, get and size method;
*/

// const mymap = new Map();
const mymap = new Map([
  ["name", "Rohan Sigh"],
  ["age", 19],
]);

mymap.set("uid", "20bcs4835");
console.log(mymap.get("uid"));
