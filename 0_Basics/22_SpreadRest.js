const numbers = [1, 2, 3];
function sum1(a,b,c){
    return a+b+c;
}
function sum2(...n){
    let s=0;
    for(let i=0; i<n.length; i++)s+=n[i];
    return s;
}


const res1 = sum1(...numbers);
const res2 = sum2(12,34,-1,4,12,56);
console.log(res1, res2);