

// http://openweathermap.org/img/w/ .png

function ShowCity() {
    let xhr = new XMLHttpRequest();
    let city = document.getElementById('search-city').value;
    xhr.open("GET", `//api.openweathermap.org/data/2.5/weather?q=${city},in&appid=c9eac82f671439a9269d8824959db78f`, true);
    xhr.send()
    let forecast = new XMLHttpRequest();
    forecast.open("GET", `//api.openweathermap.org/data/2.5/forecast?q=${city},in&appid=c9eac82f671439a9269d8824959db78f`, true);
    forecast.send()
    xhr.onload = function () {
        if(xhr.status === 200){
            let res = JSON.parse(xhr.responseText);
            console.log(res);
            document.getElementById('description-image').classList.remove('d-none');
            document.getElementById('city').innerHTML = res.name
            document.getElementById('temperature').innerHTML = (res.main.temp - 273.15).toFixed(2) + "&deg;C";
            document.getElementById('description-span').innerHTML = res.weather[0].main + " , " + res.weather[0].description
            document.getElementById('description-image').src = "//openweathermap.org/img/w/" + res.weather[0].icon + ".png"
            document.getElementById('wind-speed').innerHTML = "Wind Speed : " + res.wind.speed
            forecast.onload = function () {
                let res = JSON.parse(forecast.responseText)
                console.log(res);
                let cl = document.getElementsByClassName('temp');
                let cl1 = document.getElementsByClassName('date');
                let arr = [9,17,25,33];
                for(i=0;i<4;i++){
                    cl[i].innerHTML = ` <span> ${(res.list[arr[i]].main.temp - 273.15).toFixed(2)} &deg;C </span> <img style="height:4vw;width:4vw" src="//openweathermap.org/img/w/${res.list[arr[i]].weather[0].icon}.png">`;
                }
                for(i=0;i<4;i++){
                    cl1[i].innerHTML = res.list[arr[i]].dt_txt  ;
                }
            }
        }
        else{
            alert("Please Enter a valid City Name");
        }
    }
    
    // forecast-indices -> 9,17,25


}
