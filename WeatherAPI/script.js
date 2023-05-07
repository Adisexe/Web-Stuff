const apiKey = "23ff823d2fbd4ce5e1d2574e93363a1c";

async function sendRequestWeather(city){
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&units=metric&appid=${apiKey}`;
    const response = await fetch(apiURL);
    var data = await response.json();
    if (data.cod == '404'){
        alert('Nie ma takiego miasta');
    }
    
    var timezone = data.timezone/3600;
    document.getElementById("city-name").innerHTML = data.name;
    document.getElementById("city-time").innerHTML = `(GMT ${timezone}:00)`;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    var temp_main = data.main.temp
    document.getElementById("temp-main").innerHTML = `${temp_main.toFixed(1)}°C`
    console.log(data);
}


const searchBarForm = document.getElementById("search-bar-form");

searchBarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log()
    sendRequestWeather(document.getElementById("search-bar").value);
    
});

/*
Widoczność
Kraj
Temperatura obecna
Temperatyra min
Temperatyra max
Temperatura odczuwalna
Zachmurzenie


*/