//Callback hell is solved by promise chaining.
const cart = ["shirt", "pant", "shoes", "jacket"];

//This is callback hell.
createOrder(cart, function (orderId) {
  procedTopayment(orderId, function(payInfo){
      orderSummary(payInfo, function(){
          updateWalletBalance();
      });
  });
});


//Callback hell is solved via promise chaining and avoid horizontal growth of code.
/*
    A bug sometimes arise due to our mistake is that, Whatever is the response of that createOrder
    should pass into this chain. and whatever returned from procedToPayment should pass down the chain. 
    For that, you must return. we always return a promise from a promise when we chain it.

    .then is used to process the recieved data
*/

//You can use arrow function instead. 
createOrder(cart) //fetch
    .then(function(orderId){
        return procedTopayment(orderId);
    })
    .then(function(paymentInfo){
        return orderSummary(paymentInfo);
    })
    .then(function(paymentInfo){
        return updateWalletBalance(paymentInfo);
    })