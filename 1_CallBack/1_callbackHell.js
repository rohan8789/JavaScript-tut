const cart = ["shirt", "pant", "shoes", "jacket"];

createOrder(cart, function (orderId) {
  procedTopayment(orderId, function (payInfo) {
    orderSummary(payInfo, function () {
      updateWalletBalance();
    });
  });
});


//callback hell and inversion of control