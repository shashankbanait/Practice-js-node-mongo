// const button = document.getElementById("clickButton");
// const uname = document.getElementById("input-username");

// button.addEventListener("click", ()=>{
//     const value = uname.value;
//     console.log(value);
//     localStorage.setItem("name", value);
// })

// window.addEventListener("load", ()=>{
//     const value = localStorage.getItem('name');
//     username.innerText = value;
// });

let value = "Om";
localStorage.setItem("name", "Shashank")
localStorage.setItem("surname", "Banait")
localStorage.setItem("nickName", value)
let nick = localStorage.getItem("nickName");
console.log(nick)
let name = localStorage.getItem("name");
console.log(name);
localStorage.removeItem("nickName");
localStorage.clear();

