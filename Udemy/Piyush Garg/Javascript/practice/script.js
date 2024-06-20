const inputbox = document.getElementById("inputbox");
const mybutton = document.getElementById("mybutton");

mybutton.addEventListener("click", myfunction);

function myfunction(){
    const uname = inputbox.value;
    localStorage.setItem("name", uname);
}