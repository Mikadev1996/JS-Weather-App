import {getWeather, displayData} from "./weatherData";

function getUserLocation() {
    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(successfulLookup, () => {console.log("Error fetching user location")});
    }

     function successfulLookup(position) {
        const {latitude, longitude} = position.coords;
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=b994611087c84fb6b7d522f44f1a9e6d`)
            .then(r => r.json())
            .then(r => {
                const city = r.results[0].components.city;
                getWeather(city)
                    .then(r => displayData(r));
            })
    }

}



export default getUserLocation;