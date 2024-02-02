/*
    fetch is a external api which returns a promise. means, promises are created by the developers of fetch
    to returned to consumer developer.

    But Rohan, How can you create your own fetch??? you are also an aspiring developer. you must must must
    know how to create your own fetch, your own promise. lets see...
*/

//consuming
const cart = ["Shirt", "pant", "Shoes", "kurta", "pajama"];
const promise = createOrder(cart);
promise
.then(function(orderId){
    console.log(orderId);//executes when promise is resolved. Actual data found here.
})
.catch(function(err){
    console.log(err);//executes when promise is rejected.
})


//Be a creator
function createOrder(cart){
    //Promise takes a callback function
    const returnPromise = new Promise(function(resolve, reject){
        if(!ValiditeCart(cart)){
            const err = new Error("Cart Item is not available");
            reject(err);
        }
        const orderId = "878947";
        if(!orderId){
            const err = new Error("ID is undefined");
            reject(err);
        }else{
            setTimeout(function(){
                resolve(orderId);
            },5000)
        }
    });
    return returnPromise;
}


/*
    But what if it return false, At this moment we have not handled failure part. If we don't handle 
    errors. It would create problem in production hence, use always handle your errors. Write catch()
*/
function ValiditeCart(orderId){
    return false;
}