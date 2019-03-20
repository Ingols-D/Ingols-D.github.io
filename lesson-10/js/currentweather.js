var weatherObject = new XMLHttpRequest ();
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?zip=83263,us&appid=428ce573a70fb23421cf1bbd73ba6e08&units=imperial',true);

weatherObject.send();

weatherObject.onload = function(){
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('weather').innerHTML = weatherInfo.weather["0"].description;

    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

    var iconcode = weatherInfo.weather[0].icon;
    var icon_path="//openweathermap.org/img/w/" +iconcode + ".png";
    document.getElementById("weather_icon").src=icon_path;
   
    function winddChill ()
    var { tempF, speed } = newFunction();
        var f = 35.74 + (0.6215 * tempF)-35.75 * Math.pow(speed, 0.16) + (0.4275 * tempF * (Math.pow(speed, 0.16)));
        var windChill = f.toFixed(2)+"&deg;";
          document.getElementById(windChill).innerHTML;

function newFunction() {
        var tempF = currentTemp;
        var speed = windSpeed;
        return { tempF, speed };
    }
}
        
//end of the function