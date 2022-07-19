const requestURL = 'https://natebc72.github.io/wdd230/chamber-wk-4/member.json';
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
    let like = document.createElement('button');

    h2.textContent = `${temple.name}`;
    address.textContent = `Address: ${temple.address}`
    phone.textContent = `Phone: ${temple.phone}`;
    email.textContent = `Email: ${temple.email}`;
    announced.textContent = `Announced: ${temple.announced}`;
    groundbreaking.textContent = `Groundbreaking: ${temple.groundbreaking}`;
    dedicated.textContent = `Dedeicated: ${temple.dedicated}`;
    like.textContent = `Like`

    image.setAttribute('src', temple.image);
    image.setAttribute('alt', ` ${temple.name} pic`);
    image.setAttribute('loading', 'lazy');


    card.appendChild(h2);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(announced);
    card.appendChild(groundbreaking);
    card.appendChild(like);

    document.querySelector('div.cards').appendChild(card);
};