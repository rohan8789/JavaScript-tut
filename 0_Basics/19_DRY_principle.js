/*  DO NOT REPEAT yourself  */
const radius = [6,9,5,3];

//These three are callback function
const area = function(rad){
    return Math.PI*rad*rad;
}

const circumference = function(rad){
    return 2*Math.PI*rad;
}

const diameter = function(rad){
    return 2*rad;
}

//solve is higher order function
const solve = function(r, helper){
    const output=[];
    for(let i=0; i<r.length; i++){
        output.push(helper(r[i]));
    }
    return output;
}

Array.prototype.solve = function (helper) {
  const output = [];
  for (let i = 0; i < r.length; i++) {
    output.push(helper(r[i]));
  }
  return output;
};

console.log(radius.map(area));
console.log(solve(radius, area)); //We wrote our own map
console.log(radius.solve(area));//same
// console.log(solve(radius, circumference));
// console.log(solve(radius, diameter));