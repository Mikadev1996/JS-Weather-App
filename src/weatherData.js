const searchInput = document.getElementById("search");

window.addEventListener("keydown", (e) => {
    if (e.key !== "" && e.key === "Enter") {
        console.log(e.key, searchInput.value);
        getWeather(searchInput.value).then(r => displayWeather(r)).catch(err => handleError(err));
        getForecast(searchInput.value).then(r => displayForecast(r)).catch(err => handleError(err));
    }
});

function handleError(err) {
    console.log(err);
    const search = document.getElementById('search');
    const searchParent = search.parentElement;
    searchParent.className = "form-control error top-bar-content"
}

async function getWeather(search) {
    const response =  await fetch(`https://api.weatherapi.com/v1/current.json?key=5a33c28134404542864203800222901&q=${search}&aqi=yes`, {mode: "cors"});
    return await response.json();

}

async function getForecast(search) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5a33c28134404542864203800222901&q=${search}&days=7&aqi=no&alerts=no`,{mode: "cors"});
    return await response.json();
}

function displayWeather(data) {
    const search = document.getElementById('search');
    const searchParent = search.parentElement;
    searchParent.className = "form-control top-bar-content"
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
        let date = new Date(day.date).getDay();
        const arrayOfWeekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let weekdayName = arrayOfWeekdays[date];

        let weatherDayDisplay = document.getElementById(`day-${i}`);
        weatherDayDisplay.textContent = weekdayName;

        let maxTempDisplay = document.getElementById(`max-day-${i}`);
        let minTempDisplay = document.getElementById(`min-day-${i}`);
        maxTempDisplay.textContent = day.day.maxtemp_c + "°C";
        minTempDisplay.textContent = day.day.mintemp_c + "°C";
    }
}

export {getForecast, getWeather, displayWeather, displayForecast};