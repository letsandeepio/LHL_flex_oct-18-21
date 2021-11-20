const placeOrder = () => {
  return new Promise((resolve, reject)=>setTimeout(resolve,5000))
}

placeOrder().then(()=>console.log("Order has been fullfilled"));

console.log("I can still take other orders")

// Handling async code using Callbacks
// Higher Order function -> callback!

const placeOrder = (cb) => {
  const error = true;
  setTimeout(() => cb(error), 5000);
};

placeOrder((error) => {
  if (error) {
    console.log('Somethig went wrong with the order!');
  } else {
    console.log('Order has been fullfilled');
  }
});
