/*
    making api call using fetch
    It always returns a promise. when promise is resolved, it gives a response object which is a readable
    stream. if you want json file. do, res.json() which again returns a promise. when it is resolved. it
    will give json value.
    This is how fetch function works.


    For handling Errors we use try catch in case of async await
        1. Wrap await in try block
        2. catch err in catch block
    We can use older way too.
    handlePromise().catch((err)=>console.log(err));
*/
const API_URL = "https://api.github.com/users/rohan8789";

async function handlePromise(){
    try{
        const res = await fetch(API_URL); //res is assigned response object(a readable stream)
        console.log(res); //to convert this into json, res.json() which again returns a promise.
        const data = await res.json(); //return a promise
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

handlePromise();