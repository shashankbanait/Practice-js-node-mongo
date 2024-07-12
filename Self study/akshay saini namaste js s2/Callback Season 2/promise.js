const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function(orderId){
    proceedToPayment(orderId);
})

const promise = createOrder(cart);

// {data: orderDetails}     --> promise is like a object which is like a queue and promises to give a function later
// promise me ek object aa jata hai phir
// .then() function ke andar jo likha hota hai vo execute ho jata hai

promise.then(function(orderId){
    proceedToPayment(orderId)
});