function sayHello(message, m2){
    console.log("Hello "+this.name+", We are greeting you."+" you are "+message+m2);
}
let p1={
    name:"Sahil Singh"
}
sayHello.call(p1, "awesome", "great");


/* 
    Call() is a predefined js method used to invoke an object using function/method of different object.
    Call() method also accepts argument.
*/
let p={
    name:"Rohan Singh",
    age:25,
    getAge:function(){
        console.log(this.age);
    }
}
let p2={
    age:52,
}
p.getAge.call(p2);



//02. Apply()
//Same as call but the difference is call takes argument seperately but apply takes argument as an array.
//["Awesome"]

//03. Bind() everything is same, bind returns a new function


