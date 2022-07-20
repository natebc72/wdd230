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


gridbtn.addEventListener("click", () => {
	cards.classList.add("grid");
	cards.classList.remove("list");
});

listbtn.addEventListener("click", () => {
	cards.classList.add("list");
	cards.classList.remove("grid");
});
