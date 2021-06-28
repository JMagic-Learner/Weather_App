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
var previousCity = document.querySelector("#previous-data");


var temperature = "";


//https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}
//https://pro.openweathermap.org/data/2.5/forecast/hourly?q=Seattle&appid=cbe8fc6d3eba09369c7445d7ce20d535
//https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=cbe8fc6d3eba09369c7445d7ce20d535&unit=metric



function updateTable () {
  event.preventDefault();
  var text = $('.search').val();
  
  localStorage.setItem('previous-search',text);
  console.log("updateTable has a localstorage vauloe of " + localStorage.getItem('previous-search'));
  cityName = text;
  $("#previous-data").text(localStorage.getItem('previous-search'));
  //requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKEY + "&units=" + unitsMeasurement;
  getdata();
}

function austinData () {
  console.log("austinData has started");
  localStorage.setItem('previous-search',cityName);
  console.log("austinData has the localstorage value of" + localStorage.getItem('previous-search'));
  
  cityName = "Austin";
  $("#previous-data").text(localStorage.getItem('previous-search'));
  getdata();
  colorChange();
}

function chicagoData () {
  console.log("chicagoData has started");
  localStorage.setItem('previous-search',cityName);
  console.log("chicagoData has the localstorage value of" + localStorage.getItem('previous-search'));
  cityName = "Chicago";
  $("#previous-data").text(localStorage.getItem('previous-search'));
  getdata();
  colorChange();
}

function newyorkData() {
  console.log("newYorkData has started");
  localStorage.setItem('previous-search',cityName);
  console.log("newyorkData has the localstorage value of" + localStorage.getItem('previous-search'));
  cityName = "New York";
  $("#previous-data").text(localStorage.getItem('previous-search'));
  getdata();
  colorChange();
}


function orlandoData() {
  console.log("orlandoData has started");
  localStorage.setItem('previous-search',cityName);
  console.log("orlandoData has the localstorage value of" + localStorage.getItem('previous-search'));
  cityName = "Orlando";
  $("#previous-data").text(localStorage.getItem('previous-search'));
  getdata();
  colorChange();
}

function sfData() {
  console.log("sfData has started");
  localStorage.setItem('previous-search',cityName);
  console.log("sfData has the localstorage value of" + localStorage.getItem('previous-search'));
  cityName ="San Francisco";
  $("#previous-data").text(localStorage.getItem('previous-search'));
  getdata();
  colorChange();
}

function seattleData() {
  console.log("seattleData has started");
  localStorage.setItem('previous-search',cityName);
  console.log("seattleData has the localstorage value of" + localStorage.getItem('previous-search'));
  cityName = "Seattle";
  $("#previous-data").text(localStorage.getItem('previous-search'));
  getdata();
  colorChange();
}

function denverData() {
  console.log("denverData has started");
  localStorage.setItem('previous-search',cityName);
  console.log("denverData has the localstorage value of" + localStorage.getItem('previous-search'));
  cityName = "Denver"
  $("#previous-data").text(localStorage.getItem('previous-search'));
  getdata();
  colorChange();
}

function atlantaData() {
  console.log("atlantaData has started");
  localStorage.setItem('previous-search',cityName);
  console.log("atlantaData has the localstorage value of" + localStorage.getItem('previous-search'));
  cityName = "Atlanta"
  getdata();
  colorChange();
}


function getdata () {
  console.log(localStorage.getItem('previous-search'));
  console.log(cityName);
  var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKEY + "&units=" + unitsMeasurement;
  fetch(requestUrl)
   .then(function (response) {
     return response.json();
   })
   .then(function (data) {
     
     console.log(data);
     console.log("This is the city's temperature " + data.main.temp );
     console.log("This is " + cityName + "forecast" + data.clouds.all);
     var iconCode = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
     $("#icon").attr('src', iconCode);
     cityNamePrevious = cityName;
     cityTemp =  data.main.temp;
     cityForecast = data.clouds.all;
     console.log("This is a check to see if value is passed to global " + cityTemp);
     replace1.innerHTML = "Temp: " + cityTemp;
     replace2.innerHTML = "Humidity: " + cityForecast;
    
     replace3.innerHTML = data.name + " " + onlyMonthDayYear;
     replace4.innerHTML = "Wind: " + data.wind.speed + " MPH";
     replace5.innerHTML = "UV: " + data.clouds.all + "%";
     
    
     
    colorChange();
     return;
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
    var iconCode1 = "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
     $("#icon1").attr('src', iconCode1);
     var iconCode2 = "https://openweathermap.org/img/w/" + data.list[8].weather[0].icon + ".png";
     $("#icon2").attr('src', iconCode2);
     var iconCode3 = "https://openweathermap.org/img/w/" + data.list[16].weather[0].icon + ".png";
     $("#icon3").attr('src', iconCode3);
     var iconCode4 = "https://openweathermap.org/img/w/" + data.list[24].weather[0].icon + ".png";
     $("#icon4").attr('src', iconCode4);
     var iconCode5 = "https://openweathermap.org/img/w/" + data.list[32].weather[0].icon + ".png";
     $("#icon5").attr('src', iconCode5);

    $("#city-name1").text(cityName);
    $("#city-name2").text(cityName);
    $("#city-name3").text(cityName);
    $("#city-name4").text(cityName);
    $("#city-name5").text(cityName);
     $("#day-one-time").text(data.list[0].dt_txt);
     $("#day-two-time").text(data.list[8].dt_txt);
     $("#day-three-time").text(data.list[16].dt_txt);
     $("#day-four-time").text(data.list[24].dt_txt);
     $("#day-five-time").text(data.list[32].dt_txt);
     console.log(data.list[0].dt_txt);
     $("#day-one-temperature").text("Temperature " +data.list[0].main.temp);
     $("#day-two-temperature").text("Temperature " +data.list[8].main.temp);
     $("#day-three-temperature").text("Temperature " +data.list[16].main.temp);
     $("#day-four-temperature").text("Temperature " +data.list[24].main.temp);
     $("#day-five-temperature").text("Temperature "+ data.list[32].main.temp);
     //Finds Humidity in next 5 days
     $("#day-one-precipitation").text("Precipitation % " +data.list[0].pop);
     $("#day-two-precipitation").text("Precipitation % " +data.list[8].pop);
     $("#day-three-precipitation").text("Precipitation % " +data.list[16].pop);
     $("#day-four-precipitation").text("Precipitation % " +data.list[24].pop);
     $("#day-five-precipitation").text("Precipitation % "+ data.list[32].pop);
    // Finds Wind Forecast
     $("#day-one-wind").text("Wind " +data.list[0].wind.speed);
     $("#day-two-wind").text("Wind " +data.list[8].wind.speed);
     $("#day-three-wind").text("Wind " +data.list[16].wind.speed);
     $("#day-four-wind").text("Wind " +data.list[24].wind.speed);
     $("#day-five-wind").text("Wind "+ data.list[32].wind.speed);
     // Finds Weather
   
     $("#day-one-weather").text("weather " +data.list[0].weather.description);
     $("#day-two-weather").text("weather " +data.list[8].weather.description);
     $("#day-three-weather").text("weather " +data.list[16].weather.description);
     $("#day-four-weather").text("weather " +data.list[24].weather.description);
     $("#day-five-weather").text("weather "+ data.list[32].weather.description);
   });
   
  
}

function previousData() {
  console.log("The previousData function is running");
  console.log("The previousData function has" + localStorage.getItem('previous-search') + "for the value of cityNamePrevious");
 
 
  
  $("#previous-data").text(localStorage.getItem('previous-search'));
  cityName = localStorage.getItem('previous-search');
  
  getdata();
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
previousCity.addEventListener('click', previousData);


getdata();
getFuture();



console.log("This is a check to see if value is passed to global " + cityTemp);
