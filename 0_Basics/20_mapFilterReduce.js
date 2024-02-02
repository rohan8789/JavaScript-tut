/*
    map filter and reduce are higher order function in javascript.
*/

const arr=[5,1,3,2,6];

//produce new arr
//double: 10,2,6,4,12
//triple: 15,3,9,6,18
//binary: 101, 1, 11, 10, 110


//map
function solve(e){
    return 2*e;
}

const output=arr.map(solve);

const o2 = arr.map(function solve(e) {
    return 3*e; 
});
const o3 = arr.map((e)=>e.toString(2));
console.log(output, o2,o3);



//filter
console.log("filter");

function isodd(e){
    return e%2!=0;
}

const o4 = arr.filter(isodd);
console.log(o4);

//reduce
console.log("reduce is about returning single value.");

//sum or max
function fsum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    console.log(sum);
}
fsum(arr);

//by reduce
const o5 = arr.reduce((acc,curr)=>{
    return acc+curr;
},0)
console.log(o5);