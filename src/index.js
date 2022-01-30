const searchInput = document.getElementById("search");

window.addEventListener("keydown", (e) => {
    if (e.key !== "" && e.key === "Enter") {
        console.log(e.key);
        getWeather(e.key).then(r => displayData(r)).catch(err => {console.log("Error: ", err)});
    }
});

async function getWeather(search) {
    const response =  await fetch(`http://api.weatherapi.com/v1/current.json?key=5a33c28134404542864203800222901&q=${search}&aqi=yes`, {mode: "cors"});
    return await response.json();

}

function displayData(data) {
    console.log(data);
}