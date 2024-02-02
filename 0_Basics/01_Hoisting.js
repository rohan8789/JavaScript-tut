console.log(x);
greet();

function greet(){
    console.log("Hello Rohan");
}
var x=10;
/*
    Hoisting is a behaviour in javascript in which you can get access to variable and functions even before
    initializing it.
    lets understand it with an example.
    when you put a debugger on first line itself. you will see that js engine has already done a complete 
    scan of code and GCE is created where variable s are assigned undefined as functions are copied
    as it is.
    Hence. acc to example
    console will print undefined. 
    function call will print the code.
    after that variable is assigned 10.
*/
