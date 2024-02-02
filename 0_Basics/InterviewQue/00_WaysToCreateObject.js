//Using Object Literal
const a1 = {
    name:"Rohan Singh",
    age:25,
    uid:"20bcs4835"
};
console.log(a1);
console.log(a1.uid);


const a2 = new Object({
    name:"Sahil kumar",
    age: 22,
    uid: "20bcs4821"
});
console.log(a2);
console.log(a2.name);




//2. Using constructor function
function Person(name, age, uid){
    this.name=name;
    this.age=age;
    this.uid=uid;
}
const myself = new Person("Robin Singh", 27, "20bcs4886");
console.log(myself);
console.log(myself.uid);




//3. using class
class User{
    constructor(name, age, uid){
        this.name=name;
        this.age=age;
        this.uid=uid;
    }
    display(){
        console.log("Name is: "+this.name+" age is: "+this.age+" Uid is: "+this.uid);
    }
};
const u1 = new User("Rahul Singh", 25, "20021232");
u1.display();