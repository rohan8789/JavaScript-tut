

//consuming
const cart = ["Shirt", "pant", "Shoes", "kurta", "pajama"];
createOrder(cart)
    .then(function (orderId) {
        console.log(orderId); //executes when promise is resolved.
    })
    .then(function(){
        proceedToPayment(); //and so onn...
    })
    .catch(function (err) {
        console.log(err); //executes when promise is rejected.
    });

//Be a creator
function createOrder(cart) {
  //Promise takes a callback function
  const returnPromise = new Promise(function (resolve, reject) {
    if (!ValiditeCart(cart)) {
      const err = new Error("Cart Item is not available");
      reject(err);
    }
    const orderId = "878947";
    if (!orderId) {
      const err = new Error("ID is undefined");
      reject(err);
    } else {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return returnPromise;
}


function ValiditeCart(orderId) {
  return true;
}
