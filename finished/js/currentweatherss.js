// CURRENT WEATHER SCRIPT
var weatherObject = new XMLHttpRequest ();
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?id=5607916,us&appid=428ce573a70fb23421cf1bbd73ba6e08&units=imperial',true);

weatherObject.send();

weatherObject.onload = function(){
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('weather').innerHTML = weatherInfo.weather["0"].description;

    var currentTemp = parseFloat(document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp);
    var windSpeed = parseFloat(document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed);

    
    var tempF = currentTemp;
    var speed = windSpeed;
    var f= windChill(tempF, speed);

    document.getElementById("outputDiv").innerHTML = f.toFixed(2);

    function windChill (tempF, speed){
       
        var f = 35.74 + (0.6215 * tempF)-35.75 * Math.pow(speed, 0.16) + (0.4275 * tempF * (Math.pow(speed, 0.16)));
        return f;


    
    }}
    // end of CURRENT WEATHER
