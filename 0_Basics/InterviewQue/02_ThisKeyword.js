//Example 01
function doSomething(){
    // console.log(this);
}
doSomething();
/*
    In the above code, the function is a property of which object?
    Since the function is invoked in the global context, the function is a property of the global object.
*/

//Example 02
var obj1={
    name:"Rohan Singh",
    getName:function(){
        console.log(this);
        console.log(this.name);

    }
}
obj1.getName();
/*
    In the above code, at the time of invocation, the getName function is a property of the object obj ,
*/


//Example 3:
var obj = {
    name:"Sahil Kumar",
    address:"Mohali, chandigarh",
    getNames:function(){
        console.log(this.name);
    }
}

var getnames=obj.getNames;

var obj2={
    name:"Kumar sahil",
    getnames
}
obj2.getnames();
// obj2.address();//will give error, no such property
/*
    output would we kumar sahil. why??
    Although the getName function is declared inside the object obj, but at the time of invocation,
    getName() is a property of obj2, therefore the “this” keyword will refer to obj2.

    The silly way to understand the “this” keyword is, whenever the function is invoked, 
    check the object before the dot. The value of this . keyword will always be the object before the dot.

    If there is no object before the dot-like in example1, the value of this keyword will be the global object.
*/