

// Callback hell: one callback inside another callback inside another callback
// ek callback ke andar doosra callback nested callback
// this type of code structure is unreadable and unmaintainable

const cart = ["shoes", "pants", "kurta"];

api.createOrder(function () {
    api.proceedToPayment()
})



// IOC(inversion of control): you loose the control of your code while using callback
