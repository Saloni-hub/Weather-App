//  api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// 36bc90f4b28d1035b9a2e18748c83a50 

const weatherApi = {
    KEY: '36bc90f4b28d1035b9a2e18748c83a50 ',
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
}

const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
         console.log(searchInputBox.value);
         getWeatherReport(searchInputBox.value);
    }
});

// Get Weather Repoart
function getWeatherReport (city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.KEY}`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport)
}

// show weather repoart

function showWeatherReport(weather) {
    console.log(weather)
    let city = document.getElementById('city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;

    let temprature = document.getElementById('temp');
    temprature.innerText = `${Math.round(weather.main.temp)}`;

    let min= document.getElementById('min-max');
    min.innerText = `${Math.floor(weather.main.temp_min)}(min) / ${Math.ceil(weather.main.temp_max)}(max)`

    let weatherType = document.getElementById('weather');
    weatherType.innerText=`${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText=dateManage(todayDate);

    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('1.jpg')";
    }
   else if(weatherType.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('2.jpg')";
    }
    else if(weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('3.jpg')";
    } 
    else if(weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('4.jpg')";
    } 
    else if(weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('5.jpg')";
    }  
    else if(weatherType.textContent == 'Smoke') {
        document.body.style.backgroundImage = "url('6.jpg')";
    }  else {
        document.body.style.backgroundImage = "url('7.jpg')"
    }
}

// dATE MNGAGE
function dateManage(dateArg) {
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
    let months = ["January","February", "March","April","May","June","July","August","Septamber","October","Novemebr","December"];
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
    return `${date} ${month} (${day}), ${year}`;
}