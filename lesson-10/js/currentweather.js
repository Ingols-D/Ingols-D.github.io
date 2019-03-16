var weatherObject = new XMLHttpRequest ();
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?zip=83263,us&appid=428ce573a70fb23421cf1bbd73ba6e08&units=imperial',true);

weatherObject.send();

weatherObject.onload = function(){
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;


}//end of the function