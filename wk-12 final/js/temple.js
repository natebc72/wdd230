const requestURL = 'https://natebc72.github.io/wdd230/wk-12 final/temples.json';
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
  });

function displayTemples(temple) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address= document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let image = document.createElement('img');
    let announced = document.createElement('p');
    let groundbreaking = document.createElement('p');
    let dedicated = document.createElement('p');
    let like = document.createElement('button')

    h2.textContent = `${temple.name}`;
    address.textContent = `Address: ${temple.address}`;
    phone.textContent = `Phone: ${temple.phone}`;
    email.textContent = `Email: ${temple.email}`;
    announced.textContent = `Announced: ${temple.announced}`;
    groundbreaking.textContent = `Groundbreaking: ${temple.groundbreaking}`;
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    like.textContent = `Like`
    

    image.setAttribute('src', temple.image);
    image.setAttribute('alt', ` ${temple.name} pic`);
    image.setAttribute('loading', 'lazy');

    like.setAttribute('class', `tem-btn`);
    like.setAttribute('onclick',`like(this)`)


    card.appendChild(h2);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(announced);
    card.appendChild(groundbreaking);
    card.appendChild(dedicated);
    card.appendChild(like);

    document.querySelector('div.cards').appendChild(card);
};

var state = true;

function like(){
    if(state){
        var like = document.querySelector('.tem-btn');
        like.style.background = "#e2cb46";
        localStorage.setItem("storedLike", "#e2cb46");

    }else{
        var like = document.querySelector('.tem-btn');
        like.style.background = "grey";
        localStorage.setItem("storedLike", "grey");
    }
    state = !state;
}

window.addEventListener('DOMContentLoaded', e => {
    like.style.color = localStorage.getItem("storedLike");
});