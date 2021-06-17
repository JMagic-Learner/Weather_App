var apiKEY = "cbe8fc6d3eba09369c7445d7ce20d535";
var unitsMeasurement = "imperial";
var cityTemp ="";
var cityForecast = "";
var cityName = "";
var cityNamePrevious = "";
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
var Atlanta = document.querySelector("#Atlanta");
var onlyMonthDayYear = moment().format("MM/DD/YYYY");


var temperature = "";


//https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}
//https://pro.openweathermap.org/data/2.5/forecast/hourly?q=Seattle&appid=cbe8fc6d3eba09369c7445d7ce20d535
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
  cityNamePrevious = cityName;
  cityName = "Austin";
  getdata();
  colorChange();
}

function chicagoData () {
  cityNamePrevious = cityName;
  cityName = "Chicago";
  getdata();
  colorChange();
}

function newyorkData() {
  cityNamePrevious = cityName;
  cityName = "New York";
  getdata();
  colorChange();
}


function orlandoData() {
  cityNamePrevious = cityName;
  cityName = "Orlando";
  getdata();
  colorChange();
}

function sfData() {
  cityNamePrevious = cityName;
  cityName ="San Francisco";
  getdata();
  colorChange();
}

function seattleData() {
  cityNamePrevious = cityName;
  cityName = "Seattle";
  getdata();
  colorChange();
}

function denverData() {
  cityNamePrevious = cityName;
  cityName = "Denver"
  getdata();
  colorChange();
}

function atlantaData() {
  cityNamePrevious = cityName;
  cityName = "Atlanta"
  getdata();
  colorChange();
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
     console.log("This is " + cityName + "forecast" + data.clouds.all);
     cityTemp =  data.main.temp;
     cityForecast = data.clouds.all;
     console.log("This is a check to see if value is passed to global " + cityTemp);
     replace1.innerHTML = "Temp: " + cityTemp;
     replace2.innerHTML = "Humidity: " + cityForecast;
    
     replace3.innerHTML = data.name + " " + onlyMonthDayYear;
     replace4.innerHTML = "Wind: " + data.wind.speed + " MPH";
     replace5.innerHTML = "UV: " + data.clouds.all + "%";
     localStorage.setItem('previous-search',cityNamePrevious);
     var retrieve = localStorage.getItem('previous-search');
     var pastResult = document.querySelector("#past-search");
     pastResult.innerHTML = retrieve;
    colorChange();
     return cityName;
   });
   
 }


 function colorChange () {
   var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKEY + "&units=" + unitsMeasurement;
   fetch(requestUrl)
   .then(function (response) {
     return response.json();
   })
   .then(function (data) {
    var gradient = data.clouds.all;
    console.log(gradient);
                if (gradient <= 20){
                    $('.uv').css("background-color" , "red");
                } else if (gradient > 20 && gradient <= 40) {
                    $('.uv').css("background-color" , "orange");
                } else if (gradient > 40 && gradient <= 60 ) {
                    $('.uv').css("background-color" , "yellow");
                } else if (gradient > 60 && gradient <= 80) {
                    $('.uv').css("background-color" , "green");
                } else if (gradient > 80 && gradient <= 100) {
                    $('.uv').css("background0color" , "lime");
                }


                getFuture();
    return;
 
   });
   
  }


function getFuture() {
  console.log("getFuture function has initiated");
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKEY + "&units=" + unitsMeasurement;
  fetch(requestUrl)
   .then(function (response) {
     return response.json();
   })
   .then(function (data) {
     $("#day-one-time").text(data.list[0].dt_txt);
     $("#day-two-time").text(data.list[8].dt_txt);
     $("#day-three-time").text(data.list[16].dt_txt);
     $("#day-four-time").text(data.list[24].dt_txt);
     $("#day-five-time").text(data.list[8].dt_txt);
     console.log(data.list[0].dt_txt);
     return;
   });
   
  
}




 

listenButton.addEventListener('click', updateTable);
Austin.addEventListener('click', austinData);
Chicago.addEventListener('click', chicagoData);
NewYork.addEventListener('click', newyorkData);
Orlando.addEventListener('click', orlandoData);
SanFrancisco.addEventListener('click',sfData);
Seattle.addEventListener('click',seattleData);
Denver.addEventListener('click',denverData);
Atlanta.addEventListener('click',atlantaData);

getdata();
getFuture();


console.log("This is a check to see if value is passed to global " + cityTemp);
