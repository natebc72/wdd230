//this is for the date banner in header//
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);

//this is the function for the begining of the week banner//
let d = new Date().getDay();
const meet = document.getElementById("meet");
if (d == 1 || d ==2) {
	meet.style.display = "block";
}
//this is for the banner button to close it//
const sheew = document.querySelector("#sheew");
sheew.addEventListener("click", () =>{
	meet.style.display = "none";
});

//this functiion is for the hamburger menu
function toggleMenu(){
	document.getElementById("navigation").classList.toggle("open");
    document.getElementById("drop").classList.toggle("open");
}

const x = document.getElementById("drop")
x.onclick = toggleMenu;


//this is for the last modified in footer
document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

//this is for the lazy loading
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src')};
};


if('IntersectionObserver' in window){
	const imgObserver = new IntersectionObserver((items,) =>{
		items.forEach((item) => {
			if(item.isIntersecting){
				loadImages(item.target);
				imgObserver.unobserve(item.target)
			}
		})
	}, imgOptions);

	imagesToLoad.forEach((img) =>{
		imgObserver.observe(img);
	});
}

else{
	imagesToLoad.forEach((img) =>{
		loadImages(img);
	});
}

//this is for the visit count


//This is for the join page. It holds the form submit date


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


//this is for the directory page
const requestURL = 'https://natebc72.github.io/wdd230/Chamber-wk4/data/member.json';
const cards = document.querySelector(".cards");

async function getAffiliates() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    displayAffiliates(data);
  } else {
    throw Error(response.statusText);
  }
}

function displaymembers(data) {
  data.members.forEach(members => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let website = document.createElement('p');
    let image = document.createElement('img');
    let slogan = document.createElement('p')
    let membership = document.createElement('p');

    h2.textContent = `${members.name}`;
    phone.textContent = `Phone ~ ${members.phone}`;
    email.textContent = `Email ~ ${members.email}`;
    website.textContent = `Website ~ ${members.website}`;
    membership.textContent = `${members.membership} Member`;

    image.setAttribute('src', members.image);
    image.setAttribute('alt', `Bussiness logo of ${members.name}, Little Saguaro Chamber of Commerce Member`);
    image.setAttribute('loading', 'lazy');

    card.classList.add('card')
    card.classList.add('backcolor')
    card.appendChild(h2);
    card.appendChild(image);
    card.appendChild(slogan)
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(website);
    card.appendChild(membership);

    document.querySelector('div.cards').appendChild(card);
});
}

getmembers()

const gridbtn = document.querySelector("#grid");
const listbtn = document.querySelector("#list");

gridbtn.addEventListener("click", () => {
	cards.classList.add("grids");
	cards.classList.remove("lists");
});

listbtn.addEventListener("click", () => {
	cards.classList.add("lists");
	cards.classList.remove("grids");
});
