//This is for the weather Api
const temp = document.querySelector('#temp');
const weatherI = document.querySelector('#weather-icon');
const windS = document.querySelector('#windS');
const windChill = document.querySelector("#windChill");
const figCap = document.querySelector('#figCap');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Sahuarita&units=imperial&appid=3f64871ce090ee67c00bdac30749b6b1`;

apiFetch(url);

async function apiFetch(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
        console.log(error);
  }
};

function  displayResults(weatherData) {
    const tem = weatherData.main.temp.toFixed(0);
    const sp = weatherData.wind.speed;

    if ((tem <= 50) && (sp >= 3)) {
        const q = 35.74 + (0.6215 * tem) - (35.775 * Math.pow(sp, 0.16)) + (0.4275 * tem * Math.pow(sp, 0.16));
        windChill.textContent = q.toFixed(1) + "&deg; F";
	}    

    temp.innerHTML = `<strong>${tem}</strong>`;
    windS.innerHTML = sp;

    const newI = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = (weatherData.weather[0].description);

    weatherI.setAttribute('src', newI);
    weatherI.setAttribute('alt', desc);
    figCap.textContent = desc;

};

