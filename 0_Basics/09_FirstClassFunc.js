//1. Function Statement
function a(){ console.log("Function statement requires a function name."); }

//2. Function Expression
var x=function(){ console.log("function acts like a value."); }

/*
    3. FS vs FE
    Main difference is Hoisting. Recall Hositing. a() x()
    Function statement and function declaration is the same thing.

    If there was no function expression then, to achieve the same behaviour, we would have to declare
    function as function declaration. But, if we are not planning to use the function somewhere else
    in the code. It does not make sense to usedeclaration of fn. rather we go with FE.

*/

//4. Anonymous Function:- function(){}
/*
    AF:- function expression without a name/identity.
    Use:- AF are used in a place where function are used as values.
*/

//5. Named function Expression
var y=function abc(){}
/*
    y() is ok
    abc() throws reference error. But Why??
    abc is not created as a function in global scope
*/

//6. Arguments and parameter 
/*
    f(3,5)//args
    function f(a,b){}//parameters
*/

//7. FIRST CLASS FUNCTION:- also called first class citizen
/*
    The ability of function to be used as values and 
    can be passed as an args to another function and
    can be returned from a function is known as FCFS.
*/