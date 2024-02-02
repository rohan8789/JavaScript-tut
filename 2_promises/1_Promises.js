/*
    Lets see how a promise code actually look like...
    fetch:- (actually that outer code we talked about in last slide.) 
            it is an API by browser to make external calls. by design, fetch return a promise.
*/


//This code solves inversion of control
function xyz(){
    const promise = fetch("https://api.github.com/users/rohan8789");
    console.log(promise); //returns a promise in func
    promise.then(function(res){
        console.log(res); //returns a response in func
    })
}
xyz();
/*  
    Once, this line is executed. It return a promise object. if we console promise...
    Inside promise object we have
    Initially,
        prototype
        promise state: pending.
        promise result: undefined
    When data is recieved,
        a. prototype
        b. promise state: fulfilled.
        c. promise result: stores data 
    Promise can be resolved only once. either it can be success or failure.
    There are 3 states in promises. pending, fulfiled , rejected.
    promise objects are immutable.
*/

/*
    INTERVIEW:
    What is promise in javascript.
*/

