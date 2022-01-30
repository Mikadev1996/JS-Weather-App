const searchInput = document.getElementById("search").value;

window.addEventListener("keydown", (e) => {
    if (e.key !== "" && e.key === "Enter") {
        console.log(e.key);
        getWeather(searchInput.value).then(r => displayData(r)).catch(err => {console.log("Error: ", err)});
    }
});

async function getWeather(search) {
    const response =  await fetch(`https://api.weatherapi.com/v1/current.json?key=5a33c28134404542864203800222901&q=${search}&aqi=yes`, {mode: "cors"});
    return await response.json();

}

function displayData(data) {
    const city = document.getElementById("city");
    city.textContent = data.location.name;
    console.log(data);

}

export {getWeather, displayData};