
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'fcee92ca1ffbdf406dbbb53124c8d16a';

const getWeatherData = (city) => {
    fetch(`${apiBase}?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => displayUI(data))
}


const searchButton = document.getElementById('search-btn');
searchButton.addEventListener('click', function () {
    const inputCity = document.getElementById('getLocation').value;
    getWeatherData(inputCity);
});


const displayUI = (data) => {
    document.getElementById('city-name').innerText = data.name || 'Unknown Location';
    document.getElementById('city-temperature').innerText = data.main.temp;
    document.getElementById('weather-status').innerText = data.weather[0].main;
    document.getElementById('icon').setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('getLocation').value = '';
} 


getWeatherData('Dhaka');