
let x = {
    name:"Rohan Singh",
    age:21,
    uid:'@0bcs4835'
}
x.last = "sam";
for(let keys in x){
    document.write(`The ${keys} of an employee is ${x[keys]} <br>`)
}


/*
    22. What are object prototypes?
        A prototype is a blueprint of an object. The prototype allows us to use properties and 
        methods on an object even if the properties and methods do not exist on the current object.

        Date objects inherit properties from the Date prototype
        Math objects inherit properties from the Math prototype
        Array objects inherit properties from the Array prototype.

        eg:- var arr=[];
        arr.push(10);

        var s=new String("Rohan");
        s.charAt();
*/
        