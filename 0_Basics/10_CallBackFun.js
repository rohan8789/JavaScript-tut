/*
    When a function is passed into another function as an args is known as Callback function.
    It gives us access to whole async world in sync singe threaded language.
    JS is sync single threaded language. Due to callbacks we are able to do async things in js.
    function x(y){
        console.log("i am x")
    }
    
    x(function y(){
        console("i am calback function, but why am i called as callback fuction.")
    })

    ->  This function is known as call back function because you call this function sometime else in your
        code. Its not called overthere, it is just a fun definiton. for eg: In above program, its upto x
        when it wants to call this y.

    ->  synchronous programming is concept that allows your code to run in the background without blocking 
        the main thread of the program.
*/

//Lets see how callbacks are used in async tasks. lets take eg of SetTimeout();


//Just like a function call
setTimeout(function(){
    console.log("Timer called");
},5000);

function x(y){
    console.log("x function called");
    y(); 
}

x(function y(){
    console.log("Y function called");
});

/*
    Program flow, GEC created. setTimeout creates its own execution context but wont wait to finish. 
    (that's what async is). then js will create the copy of x function in GEC. then call x function 
    in code section.
    It will print "x func called"
    then immediately EC of y is created and then prints "Y function called.".

    Till this moment 5000ms in not finished. (not even 1000ms).
    then after 5sec 
    it will print "Timer called".

*/

//2. Blocking Main Thread:
/*
    Javascript has just one Call stack that we call as main thread.
    whatever executed inside the page is executed through call stsck only.
    If any operation blocks this call stack. 
    That is known as blocking this main thread.

    Suppose your function x() has very heavy operation which takes around 20-30 sec to complete.
    since, js has only one call stack, it wont be able to execute any other function in the code. 
    everything would be block in the code.
    That's why we say we should never block main thread.
    We should always try to use async operation for things which take time(just like settimeout()).

    IF js did not have this First class functions, no call back fun, we would not have been able to
    do async operations.
*/

