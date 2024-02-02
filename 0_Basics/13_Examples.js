console.log("Start");
document.getElementById("btn").addEventListener("click", function cb(){
   console.log("Callback function");
})
console.log("Ends");

/*
    1.  GCE created. console start.
        prints start, end. 
    2.  gebi finds id with btn in html doc. addEventListener registers a callback fn cb on an event 
        named "click" inside Weh API environment.
    3.  GEC is popped off program ends.
    
    BUT The event handler will stay there in web API environment until or unless we explicitly remove that
    event listener or close the browser. So this callback function just sits inside the web API environment
    waiting some one will click the button and it will execute cb() inside the stack.
    
    When button is clicked, callback function is moved to callback Queue and waits for its turn to get
    executed.

    EVENT LOOP only job is to continuously monitor the call stack as well as the callback queue.
    If the call stack is empty and there is a function waiting to be executed inside call stack
    event loop takes this function and pushes it inside the call stack.
            and callback func is quickly executed thereafter.
            callback function is now console logged.

    But why do we need callback queue.
    --->suppose a person clicks a button 5-6 times. multipe callback is generated.
*/