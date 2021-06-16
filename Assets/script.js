var apiKEY = "cbe8fc6d3eba09369c7445d7ce20d535";
var unitsMeasurement = "imperial";
var cityTemp ="";
var cityForecast = "";
var cityName = "";
var replace1 = document.querySelector(".temperature");
var replace2 = document.querySelector(".precipitation");
var replace3 = document.querySelector(".city");
var replace4 = document.querySelector(".wind");
var replace5 = document.querySelector(".uv")
var listenButton = document.querySelector(".search-button");
var Austin = document.querySelector("#Austin");
var Chicago = document.querySelector("#Chicago");
var NewYork = document.querySelector("#NewYork");
var Orlando = document.querySelector("#Orlando");
var SanFrancisco = document.querySelector("#SanFrancisco");
var Seattle = document.querySelector("#Seattle");
var Denver = document.querySelector("#Denver");
var temperature = "";


 
//https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=cbe8fc6d3eba09369c7445d7ce20d535&unit=metric



function updateTable () {
  event.preventDefault();
  var text = $('.search').val();
  localStorage.setItem('query', text);
  cityName = localStorage.getItem('query');
  cityName = text;
  console.log(cityName);
  requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKEY + "&units=" + unitsMeasurement;
  getdata();
}

function austinData () {
  cityName = "Austin";
  getdata();
}

function chicagoData () {
  cityName = "Chicago";
  getdata();
}

function newyorkData() {
  cityName = "New York";
  getdata();
}


function orlandoData() {
  cityName = "Orlando";
  getdata();
}

function sfData() {
  cityName ="San Francisco";
  getdata();
}

function seattleData() {
  cityName = "Seattle";
  getdata();
}


function getdata () {
  var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKEY + "&units=" + unitsMeasurement;
  fetch(requestUrl)
   .then(function (response) {
     return response.json();
   })
   .then(function (data) {
     
     console.log(data);
     console.log("This is the city's temperature " + data.main.temp );
     console.log("This is " + cityName + "forecast" + data.clouds.all)
     cityTemp =  data.main.temp;
     cityForecast = data.clouds.all;
     console.log("This is a check to see if value is passed to global " + cityTemp)
     replace1.innerHTML = "Temp: " + cityTemp;
     replace2.innerHTML = "Humidity: " + cityForecast;
     replace3.innerHTML = data.name;
     replace4.innerHTML = "Wind: " + data.wind.speed + " MPH";
     replace5.innerHTML = "UV: " + data.clouds.all + "%";
 
     return cityTemp;
   });
 }

listenButton.addEventListener('click', updateTable);
Austin.addEventListener('click', austinData);
Chicago.addEventListener('click', chicagoData);
NewYork.addEventListener('click', newyorkData);
Orlando.addEventListener('click', orlandoData);
SanFrancisco.addEventListener('click',sfData);
Seattle.addEventListener('click',seattleData);

getdata();


console.log("This is a check to see if value is passed to global " + cityTemp)
