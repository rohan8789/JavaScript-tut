/*
    Javascript is a sync single threaded language. It has one call stack and can do one thing at a time.
    This call stack is present inside js engine and the code of js is executed inside the call stack.

    We know how the code works in call stack.
    function a(){
        console.log("start");
    }
    a();
    console.log("end");

    Its just like anyother programming language. it quickly ececutes. Thats how call stack works.
    But Hold on !!!! What if we need to wait. what if we want some script to execute in 5 seconds.
    can we do that in JS???
    No we can not do that. because whatever comes inside the callstack executes quickly. SUppose you say a 
    call stack to wait and then execute. it can not do that. To achieve this, we need superpowers.
    But How can we get those SUPERPOWERS????
    Here comes the browser.
    To access all those super powers. we need web APIs
        1. setTimeout()
        2. DOM api
        3. fetch api
        4. Local storage
        5. console
        6. location
        any many more...
    
    These are not a part of javascript. neither settimeout nor console. these are part of browser.
    we get access to all these using window.object or obj.
*/

//Lets execute code below and see how this works.
console.log("Start");
setTimeout(function a(){
    console.log("Callback");
}, 5000);
console.log("End");

/*
    CallStack:- GEC----->
    console:-  prints start. print end, Timer
    Line 34 we use console api and print start
    In next line, setTimeout api is called. If you pass a callback function in settimeout with some delay,
    It registers a callback and start the timer and js moves to next line.
    Lastly, When program ends, global execution context pops off the stack.

    As soon as the timer ends, The callback function needs to be executed. we know all the code in js 
    is run inside call stack. we somehow need to move that callback function inside the stack.

    Should we directly execute that callback function????
    This would be dumb to do so. There might be several such callback function.

    To do that we need "EVENT LOOP + CALLBACK QUEUE";

    After the time expires, callback function moves inside callback queue.
    and job of event loop is to check the call back queue and put these callback function into the stack.
    and then it prints timer.


*/