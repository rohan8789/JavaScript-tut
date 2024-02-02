/*
    Object are ref data types which store key value properties. Multiple values can be carried inside an object
    Ways to create Obj
    1. Object literal
    2. Using new
    3. Using constructor

    create Array of obj.
    let a = [
        {

        },
        {

        },
    ]
*/
let obj1={
    name:"Rohan",
    age:18,
    uid:"20bcs4835"
}

console.log(obj1);

let obj2 = new Object({
    name:"Sahil",
    age:15,
    uid:"20bcs4886"
})

console.log(obj2);

class hello{
    public
    constructor(name, age, uid){
        this.n=name;
        this.a=age;
        this.u=uid;
    }
    
    print(){
        console.log(this.n, this.a, this.u);
    }
}

let obj3=new hello("Robin", 20, "20bcs4821");
obj3.print();