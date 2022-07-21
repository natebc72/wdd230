const foreCast = document.getElementsByClassName('three-day')[0];
const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=Tucson&units=imperial&cnt=3&appid=3f64871ce090ee67c00bdac30749b6b1`;

function getWeatherData() {
    let headers = new Headers();
  
    return fetch(URL, {
      method: 'GET',
      headers: headers
    }).then(data => {
      return data.json();
    });
}

getWeatherData().then(weatherData => {
    let dailyForecast = weatherData.list;
  
    renderData(dailyForecast);
  });

  renderData = (forecast) => {
    // render each daily forecast
    forecast.forEach(day => {
      let date = new Date(day.dt * 1000);
      let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
      let name = days[date.getDay()];
      let dayBlock = document.createElement("div");
      dayBlock.className = 'forecast__item';
      dayBlock.innerHTML =
        `<div class="forecast-item__heading">${name}</div>
        <div class="forecast-item__info">
        <i class="wi ${applyIcon(day.weather[0].icon)}"></i>
        <span class="degrees">${Math.round(day.temp.day)}
        <i class="wi wi-degrees"></i></span></div>`;
      foreCast.appendChild(dayBlock);
    });
  }