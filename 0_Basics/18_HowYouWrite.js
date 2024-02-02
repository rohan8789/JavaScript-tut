const radius = [6,3,9,5];

const area = function(r){
    const output=[];
    for(let i=0; i<r.length; i++){
        output.push(Math.PI*r[i]*r[i]);
    }
    return output;
}
console.log(area(radius));

const circumference = function (r) {
  const output = [];
  for (let i = 0; i < r.length; i++) {
    output.push(2 * Math.PI * r[i]);
  }
  return output;
};
console.log(circumference(radius));

const diameter = function(r){
    const output=[];
    for(let i=0; i<r.length; i++){
        output.push(2*r[i]);
    }
    return output;
}
console.log(diameter(radius));