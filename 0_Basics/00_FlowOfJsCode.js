/*
    JS is sync single threaded scripting language. Due to callbacks we are able to do async things in js.
    SSTL means js will run one line at a time and in order.
    What happens when you run a JS Code????
        As soon as you  run a js code, Global execution context is created. It is created in two phases.
        1.  MEMORY CREATION PHASE:
            Here js assign memory to all the variable and functions. variable are assinged undefined dtype.
            functions are copied as it is.
        2.  CODE EXECUTION PHASE:
            Now, js code is executed line by line. It replaces undefined with original value of the var.
            and to execute function, A new execution context is createdand follows the same procedure.
            This way a js code runs.
        It can be explained more clearly using a callstack.

        
    
    When you actually run a code and put a debugger at first line. 
    In first line itself, the program undergo a complete scan and memory execution context is created.
    all variable is initialized with undefined and function are copied as it is.

    then, line by line execution is done.
*/



let a=10;
let b = 20;
let t=a;
a=b;
b=t;
console.log(a,b);