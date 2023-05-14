//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial
//key 03d1a6690dc02cc32c5cc24d48f88cdc

let apiKey = "03d1a6690dc02cc32c5cc24d48f88cdc";
getWeatherData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    const weatherPromise = fetch(url); 
    console.log(city);
    return weatherPromise.then((response) => {
        return response.json()
    })
}

searchCity = () => { 
    const city = document.getElementById("mytext").value;

    getWeatherData (city)
    .then((response) => {
        console.log(response);
        showWeatherData(response);
    })
}

showWeatherData = (weatherData) => {
    document.getElementById("cityName").innerText = weatherData.name;
    document.getElementById("weatherType").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("wind").innerText = weatherData.wind.speed;
    document.getElementById("maxTemp").innerText = weatherData.main.temp_max;
    document.getElementById("minTemp").innerText = weatherData.main.temp_min;

}