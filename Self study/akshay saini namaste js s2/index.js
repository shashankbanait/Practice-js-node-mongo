// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function(orderId){
//     proceedToPayment(orderId);
// });

// const promise = createOrder(cart);
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

const GITHUB_API = "http://api.github.com/users/shashankbanait"

const user = fetch(GITHUB_API);     // fetch returns a promise and user is assigned by promise

console.log(user);

user.then(function(data){
    console.log(data);
})