//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
const API_KEY = '7133b1aa183d16d5f3117e10ee321dee';
const weatherBlock = document.querySelector('#weather');
async function loadWeather() {
   // e.preventDeefault();
    weatherBlock.innerHTML = ` <div class="weather__loading">
  <img src="./images/Loading_icon.gif" alt="Loading">
 </div>`;
    const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Dnipro&appid=7133b1aa183d16d5f3117e10ee321dee';
    const resp = await fetch(server, {
        method: 'GET',
    });

const respResult = await resp.json();
if (resp.ok) {
    getWeather(respResult);
} else {
    weatherBlock.innerHTML = respResult.message;
}
}


function getWeather(data) {

    const location = data.name;
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;

    const template = ` <div class="weather_header">
      <div class="weather_main">
        <div class="weather-city">${location}</div>
        <div class="weather-status">${weatherStatus}</div>
      </div>
      <div class="weather-icon">
        <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="Clouds">
      </div>
    </div>
    <div class="weather__temp">${temp}</div>
    <div class="weather__feels-like">Feels like: ${feelsLike}</div>`;
    weatherBlock.innerHTML = template;
}
if (weatherBlock) {
    loadWeather();
}