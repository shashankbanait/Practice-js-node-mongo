// Object literal
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("got user details from database");
    }
}

console.log(user.username);
console.log(user.getUserDetails());