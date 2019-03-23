var forecastObject = new XMLHttpRequest();
forecastObject.open('GET', '//api.openweathermap.org/data/2.5/forecast?id=5603240&appid=428ce573a70fb23421cf1bbd73ba6e08&units=imperial', true);

forecastObject.send();

forecastObject.onload = function () {
 var forecastInfo = JSON.parse(forecastObject.responseText)   
   console.log(forecastInfo); 
//Day 1
    document.getElementById("tempHi1").innerHTML = forecastInfo.list[1].main.temp_max;
        
    document.getElementById("tempLo1").innerHTML = forecastInfo.list[1].main.temp_min;
        
    document.getElementById("description1").innerHTML = forecastInfo.list[1].weather["0"].description;

    document.getElementById("speed1").innerHTML = forecastInfo.list[1].wind.speed;
    
//Day 2
     document.getElementById("tempHi2").innerHTML = forecastInfo.list[2].main.temp_max;
        
    document.getElementById("tempLo2").innerHTML = forecastInfo.list[2].main.temp_min;
        
    document.getElementById("description2").innerHTML = forecastInfo.list[2].weather["0"].description;

    document.getElementById("speed2").innerHTML = forecastInfo.list[2].wind.speed;
    
//Day 3
     document.getElementById("tempHi3").innerHTML = forecastInfo.list[3].main.temp_max;
        
    document.getElementById("tempLo3").innerHTML = forecastInfo.list[3].main.temp_min;
        
    document.getElementById("description3").innerHTML = forecastInfo.list[3].weather["0"].description;

    document.getElementById("speed3").innerHTML = forecastInfo.list[3].wind.speed;
    
//Day 4
     document.getElementById("tempHi4").innerHTML = forecastInfo.list[4].main.temp_max;
        
    document.getElementById("tempLo4").innerHTML = forecastInfo.list[4].main.temp_min;
        
    document.getElementById("description4").innerHTML = forecastInfo.list[4].weather["0"].description;

    document.getElementById("speed4").innerHTML = forecastInfo.list[4].wind.speed;
    
//Day 5
     document.getElementById("tempHi5").innerHTML = forecastInfo.list[5].main.temp_max;
        
    document.getElementById("tempLo5").innerHTML = forecastInfo.list[5].main.temp_min;
        
    document.getElementById("description5").innerHTML = forecastInfo.list[5].weather["0"].description;

    document.getElementById("speed5").innerHTML = forecastInfo.list[5].wind.speed;
}
//end of the forecast function