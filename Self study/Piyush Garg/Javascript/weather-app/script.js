const button = document.getElementById("search-button")
const input = document.getElementById("shahar-input")

const shaharName = document.getElementById("shahar-name")
const shaharTime = document.getElementById("shahar-time")
const shaharTemp = document.getElementById("shahar-temp")

async function getData(shaharName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=d22bad452dfe4618805111301241406&q=${shaharName}&aqi=yes`)
    return await promise.json();
}

button.addEventListener('click', async ()=>{
    const value = input.value;
    const result = await getData(value);
    shaharName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
    shaharTime.innerText = result.location.localtime;
    shaharTemp.innerText = result.current.temp_c;
})