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
const requestURL = 'https://natebc72.github.io/wdd230/chamber-wk-4/member.json';
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const members = jsonObject['members'];
    members.forEach(displayMembers);
  });

function displayMembers(member) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let site = document.createElement('p');
    let image = document.createElement('img');
    let slogan = document.createElement('h4');
    let membership = document.createElement('h5');

    h2.textContent = `${member.name}`;
    slogan.textContent = `${member.slogan}`;
    phone.textContent = `Phone: ${member.phone}`;
    email.textContent = `Email: ${member.email}`;
    site.textContent = `Site: ${member.website}`;
    membership.textContent = `${member.membership} Member`;

    image.setAttribute('src', member.image);
    image.setAttribute('alt', ` ${member.name} logo`);
    image.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(image);
    card.appendChild(slogan);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(site);
    card.appendChild(membership);

    document.querySelector('div.cards').appendChild(card);
};

const gridbtn = document.querySelector("#grid");
const listbtn = document.querySelector("#list");
const display = document.querySelector('article')


gridbtn.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbtn.addEventListener("click", () => {
	display.classList.add("list");
	display.classList.remove("grid");
});