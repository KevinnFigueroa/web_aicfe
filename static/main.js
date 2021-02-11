var mymap = L.map("mapid").setView([-34.6083, -58.3712], 13);
// API KEY: at_7NtOVTbokqDttdukaooZLHPA4focy

//TODO: hacer validacion de que ese string sea una ip o un dominio.
function takeValue(){
    var value = document.getElementById("locationByIpAddress").value;
    requestLocation(value);
}
document.getElementById("search").addEventListener("click", takeValue); 

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(mymap);

L.control.scale().addTo(mymap);

L.marker([41.66, -4.71], {
    draggable: true
}).addTo(mymap);

function goToNewLatLng(lat, lng){
    mymap.panTo({lat: lat, lng: lng});
}

function requestLocation(ipAddress){
    fetch("https://geo.ipify.org/api/v1?apiKey=at_7NtOVTbokqDttdukaooZLHPA4focy&ipAddress=" + ipAddress).then(function(response) {
        return response.json();
    }).then(function(data) {
        let lat = data["location"]["lat"];
        let lng = data["location"]["lng"];

        goToNewLatLng(lat,lng);
    }).catch(function(error){
        console.log("error :"+ error);
    });
}

