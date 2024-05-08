// flow of javascript
// phase 1:
var n = 2;                  // starting of program allocates memory to n aur isko special value assign karta hai named: undefined
function square(num){       // aur is line par aata hai to pura code hi memory space me store kar leta hai
    // pura pura code hi assign kar deta hai isme
    var ans = num * num;
    return ans;
}
var square2 = square(n);    // phir square2 ko memory dega aur usme turant ke liye undefined daal dega
var square4 = square(4);    // phir square4 ko memory dega aur usme turant ke liye undefined daal dega

//_________________________________________________________________________________________________________________

// phase 2: code execution
var n = 2;                  // yahan variable assign karne ka kaam karta hai
function square(num){       // yaha kuchh nhi hoga bs aage chala jayega
    var ans = num * num;
    return ans;
}
var square2 = square(n);    // yaha ab function invocation hota hai to yaha se function me value pass hogi
var square4 = square(4);    