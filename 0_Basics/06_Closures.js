/*
    1. Closures:
    Closure is the combination of a function bundled together with its lexical environment(reference to
    its surrounding state). even after the outer function has finished executing, it has access to variables 
    in its outer (enclosing) function's scope. 
    you can assign a func to a variable, can pass a func inside a func and can also return a func.

    
    closure = function + its scope
    
    2. returning vs calling:
    When you call a function it creates new GEC and actually executes the code---->> xyz();
    When you return a function it return the whole function along with reference to 
    its surrounding states and here that magic of closure happens.------> return xyz;
    
    USES:-
    1. async state management
    2. data hiding.
    It's like a "memory bubble" that preserves the outer scope's variables for the inner function.
        Imagine this:
        You have an outer function that creates a special environment, like a bubble filled with variables 
        and values. Inside this bubble, you define an inner function.
        The inner function, even after it leaves the outer function's body, carries this bubble around with 
        it. This bubble holds the outer scope's variables in their original state, accessible only to the
        inner function.

    This allows for private variables and data encapsulation.
        The outer function's scope is not accessible directly from the outside.
        The inner function, however, retains access to the outer scope's variables due to the closure.
        This allows the inner function to act as an interface for controlled interaction with the encapsulated variable.
*/

function abc(){
    var a=20;
    function xyz(){
        console.log(a);
    }
    a=99;
    // xyz();//calling
    return xyz; //when you return a func, it not only return a function but a closure.
}

var z=abc();
console.log(z);
z();

/*
    It means functions even after returning, maintains their lexical scope.
    They still remember where they were present inside the program,
    it remember the reference to the variable and other functions where it was present.
*/

function p(){
    var m=900;
    function q() {
      var n = 20;
      function r() {
        console.log(m,n);//forms closure with m i.e from its parent-parent, and with n i.e, its parent
      }
      n = 400;
      r();
    }
    q();
}
p();

var z = abc();
console.log(z);
z();


//If no closure, then all values a,b,m,n would have become undefined. func return func.
//we havw seen this before.
