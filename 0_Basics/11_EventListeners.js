//Whenever you click that button, this callback function is pushed into stack and does the operation
// let c=0;
// document.getElementById("btn").addEventListener("click", function xyz(){
//     console.log("button clicked.", ++c);
// })


/*
    Closure with Event Listener.
        Eg:- Whenever you click a button, button count should increase. (Interview Question)
        One way is to make global variable and but that is not a good practice. For that,
        we can use closure as it ensures data hiding.
    
    To solve this, lets wrap whole thing within a function such that the call back function 
    forms a closure with count and does data hiding. good practice

*/
function wrapUp(){
    let count=0;
    document.getElementById("btn").addEventListener("click", function xyz(){
        console.log("button clicked ", ++count);
    })
}

wrapUp();
/*
    If you carefully see, The callback fun xyz() has access to its closure wrapUp().
    which means it remembers its lexical env.
    it remebers where the count is actually present in the code.
*/

//Lets understand in detail.
/*
    1.  If we inspect browser, we see eventlistener tab, There we see what all event listeners are 
        attached to that page. we see a handler(what will happen on btn click) which is nothing but
        xyz() callback function.
    2.  This Handler xyz() has a scope. This function have the same lexical scope what we have seen
        in starting lectures.
    3.  Guess, what would be inside the scope. Global and closure.
        It would have xyz's parent env. i.e, closure(wrapup) and its parents parent env
        i.e, global.

    4.  And whenever this callback fn is run on btn click, it has its scope attached to it which 
        remembers everything. That is what closure actually is.
*/


//Interview Question
//Garbage collection and removeEventListeners.
/*
    Why do we need to remove Event listeners?
    EventListeners take up space in memory even when they are not in use. 
    Even if the call stack is empty, the program do not free up the memory in
    the code. That is why we need removeEventListeners.
*/