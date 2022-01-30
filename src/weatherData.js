const searchInput = document.getElementById("search").value;

window.addEventListener("keydown", (e) => {
    if (e.key !== "" && e.key === "Enter") {
        console.log(e.key);
        getWeather(searchInput.value).then(r => displayWeather(r)).catch(err => {console.log("Error: ", err)});
    }
});

async function getWeather(search) {
    const response =  await fetch(`https://api.weatherapi.com/v1/current.json?key=5a33c28134404542864203800222901&q=${search}&aqi=yes`, {mode: "cors"});
    return await response.json();

}

async function getForecast(search) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5a33c28134404542864203800222901&q=${search}&days=7&aqi=no&alerts=no`,{mode: "cors"});
    return await response.json();
}

function displayWeather(data) {
    const city = document.getElementById("city");
    city.textContent = data.location.name;

    const cityData = document.getElementById("city-data");
    cityData.textContent = `${data.current.temp_c}°C Feels like ${data.current.feelslike_c}°C`;

}

function displayForecast(data) {
    const weekForecast = data.forecast.forecastday;
    console.log(weekForecast);
    for (let i = 0; i < weekForecast.length; i++) {
        let day = weekForecast[i];
        console.log(day.date, day.maxtemp_c, day.mintemp_c);

    }
}

export {getForecast, getWeather, displayWeather, displayForecast};