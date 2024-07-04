const button = document.getElementById('get-location-button');

function gotLocation(position){

}

function failedToGet(){
    console.log("There was some issue")
}


button.addEventListener("click", async()=>{
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)
})