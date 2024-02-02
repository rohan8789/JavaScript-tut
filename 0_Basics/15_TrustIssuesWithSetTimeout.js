console.log("Start");
setTimeout(function cb(){
    console.log("Timer");
},5000)
console.log("ends with million of js code");
/*
    Lets talk about trust issues with setTimeout. Code starts executing. GEC is created. It prints "start"
    in console and move to next line. Now, setTimeout is registered to webapi and timer of 5000ms is 
    started. since call stack does not wait for async func to return. It will go on executing millions 
    of lines of code. 
    Suppose it takes 10 sec to execute the code. GEC is still in the call stack and timer has end. Now, 
    call back func. cb will move inside callback queue and will wait for GEC to pop. event loop is 
    consistently checking for call stack to be empty. Once call stack is empty it will move callback 
    funct to stack based on priority between callback queue and microtask queue. 

    Hence it is sure that setTimeout is going to take more than 5000ms to execute.
    This is called CONCURRENCY MODEL in js
*/
