const user = [
    {first:"Rohan", last:"Singh", age:24},
    {first:"Sahil", last:"Kumar", age:21},
    {first:"Shivam", last:"Pandey", age:24},
]

const o1 = user.map((e)=>{console.log(e.first+" "+e.last)});

//1. find age and its count   
const o2 = user.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=acc[curr.age]+1;
    }else{
        acc[curr.age]=1;
    }
    return acc;
}, {});
console.log(o2);


//first name of all the people whose age is 24
const o3=user.filter(function(e){
    if(e.age===24){
        return e.first;
    }
})

const o4 = o3.map(function(e){
    return e.first;
})
console.log(o4);
//Hence we can chain map filter and reduce.
//we can directly use reduce to come up to this solution
