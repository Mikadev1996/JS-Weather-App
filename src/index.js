
fetch('http://api.weatherapi.com/v1/current.json?key=5a33c28134404542864203800222901&q=London&aqi=yes', {mode: "cors"})
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response);
    })
