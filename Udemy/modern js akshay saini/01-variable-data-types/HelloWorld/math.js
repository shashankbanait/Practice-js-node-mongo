function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

// module.exports = add;        // module: predefined function, exports: keyword to export
// module.exports = sub;        // aise karenge to override kar lega

// To doosra tarika:
// module.exports = {
//     add, sub,
// }


// sirt rename kiya hai
// module.exports = {
//     addFn: add,
//     subFn: sub,
// }

// export karne ka ek aur tarika
exports.add = (a, b) => a + b;      // this way to export the function using annonymous function