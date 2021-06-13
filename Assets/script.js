var apiKEY = "cbe8fc6d3eba09369c7445d7ce20d535";
var cityName = "Seattle";



var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

function cityWeather() {
     fetch(queryURL);
    console.log();
}

cityWeather();