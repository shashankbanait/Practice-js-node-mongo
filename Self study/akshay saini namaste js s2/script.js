const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);
console.log(promise);

promise
    .then(function (orderId) {
        console.log(orderId);
    }).catch(function (error) {
        console.log(error.message);
    });

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("cart is not valid");
            return reject(err);
        }

        const orderId = "12345";
        if (orderId) {
            resolve(orderId);
        }
    });
}

function validateCart(cart) {
    return true;
}
