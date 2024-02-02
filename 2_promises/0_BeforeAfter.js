//Before.
/*
    Suppose we have a cart to purchase product. we have two async apis. createorder and proceedtopayment.
    These two apis are interdependent. we can only proceed to payment once order is created. This can be
    achieved only by callbacks. 
*/
const cart = ["Shoes", "kurta", "Shirt", "Pant"];
createOrder(cart, function(){
    proceedToPayment(orderId);
})

/*
    Now, it is responsibility of create order api to create an order and then proceed to payment with id.
    But the issue is, Inversion of control. we have passed our own written callback function to an api 
    written by someone else. Its no more in our control. How can we trust blindly on external source.
    HOW TO SOLVE !!!!!!!!!
    we design our api in such a way that this external createOrder api will not longer take a callback
    function. but, It will return us a promise.

    Promise ia an empty object which will store whatever createOrder will return. Initially in memory,
    promise is initialized with undefined. later, it will be filled with data once createOrder() is 
    executed.

    Now, we will attach a callback function to this promise object. 
    There is a huge difference in passing a function and attaching a function. Here with the help of
    promises, we retain the control of the program with ourselves.
*/

//after
const promise = createOrder(cart);
promise.then(function () {
  proceedToPayment(orderId);
});

