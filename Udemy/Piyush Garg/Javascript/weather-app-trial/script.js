const button = document.getElementById("button");
const inputcity = document.getElementById("input-city")

const city = document.getElementById("city")
const citytime = document.getElementById("citytime")
const temperature = document.getElementById("temperature")

async function getData(city){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=d22bad452dfe4618805111301241406&q=${city}&aqi=yes`)
    return await promise.json();
}

button.addEventListener('click', async ()=>{
    const value = inputcity.value;
    const result = await getData(value);

    city.innerText = result.location.name;
    citytime.innerText = result.location.localtime;
    temperature.innerText = result.current.temp_c;
})