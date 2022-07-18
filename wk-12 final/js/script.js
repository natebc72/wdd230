//Javascript for final project

//Header 

//this functiion is for the hamburger menu
function toggleMenu(){
	document.getElementById("navigation").classList.toggle("open");
    document.getElementById("drop").classList.toggle("open");
}

const x = document.getElementById("drop")
x.onclick = toggleMenu;


//this is header date display
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', options);

//this is for the weather box 
const temp = document.querySelector('#temp');
const hum = document.querySelector('#hum');
const weatherI = document.querySelector('#weather-icon');
const figCap = document.querySelector('#figCap');

//these are for the bad weather alert banner
const badWeather = document.querySelector("#badweather");
const ban = document.querySelector("#banner");

const url = `https://api.openweathermap.org/data/2.5/weather?q=Tucson&units=imperial&appid=3f64871ce090ee67c00bdac30749b6b1`;

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
    const h = weatherData.main.humidity;

    if(tem >= 95){
      ban.style.display = "block";
      badWeather.textContent = `WEATHER ALERT: Excesive Heat Warning - Temperature in Tucson is ${tem}° F. Exercise caution outside! `;
    }
   

    temp.innerHTML = `${tem}&deg; F`;
    hum.innerHTML = `${h}%`;

    const newI = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = (weatherData.weather[0].description);

    weatherI.setAttribute('src', newI);
    weatherI.setAttribute('alt', desc);
    figCap.textContent = desc;

};

//this is for the weather banner button to close it//
const sheew = document.querySelector("#sheew");
sheew.addEventListener("click", () =>{
	ban.style.display = "none";
});

//this is for the last modified in footer
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;


