/*
    Fetch basically requests a api call and returns a promise.
    and we have to pass a callback function which will be executed once this promise will be resolved.
    Promise is resolved means when we get the data via url then we execute that callback function.
*/
console.log("Start");

setTimeout(function cbT(){
    console.log("CallBack setTimeout");
},5000);

fetch("url").then(function cbF(){
    console.log("CallBack fetch");
});

console.log("End");

//Lets execute
/*
    1.  GEC created.
    2.  line by line execution
    3.  setTimeout will register a callback function in web api and start the timer.
    4.  Moving ahead, fetch is also a webapi used to make network calls. fetch registers the cbF fn to web
        api environment.
    5.  cbT func is waiting for timer to expire so that it can move inside callback queue and go into
        stack for execution
    6.  cbF is waiting for the data to be returned from the server. lets say it turned quickly in 50ms.

    Now what will happen, will cbF directly get executed???
    No.

    MICROTASK QUEUE:- It is similar to callback queue but have higher priority.
    But what comes inside microtask queue????
    --> cbF func. a callback function in case of promises and network calls goes inside mircotask queue.

    7.  Suppose we have thousands of lines in our code which is still to be executed but cbF has
        already been returned. and also cbT has also returned inside callback queue.
    
    8.  Now job of EVENT LOOP is to contuniously check if the call stack is empty and schedule these
        task based on their priority.
    
    start
    end
    callback fetch
    callback timer


    INTERVIEW QUESTION:-
    what is microtask queue what comes in mtqueue?
    --> all the callback function which comes through promises
    
*/

