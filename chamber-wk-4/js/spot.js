const requestURL = '';
const cards = document.querySelector("#spotlight");

async function getMembers() {
    let response = await fetch(requestURL);
    if (response.ok) {
      let data = await response.json();
      const members = selectMembers(data);
      displayMembers(members)
    } else {
      throw Error(response.statusText);
    }
  }

function randomSelect(data) {
    const randomindex = Math.floor(Math.random() * data.length)
    const spotlights = data[randomindex]
    // Removes the selected item so it is not selected twice
    data.splice(randomindex, 1)
    return spotlights
}

function selectMembers(data) {
    const members = data.members.filter(member =>
      member.membership == "Saguaro" || member.membership == "Yucca")
    let spotlightArray = [];
    for (let i = 0; i < 3; i++) {
      spotlightArray.push(randomSelect(members))
    }
    return spotlightArray
  }

  function displayMembers(data) {
    // Create elements to add to the document
    data.forEach(member => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let phone = document.createElement('p');
      let email = document.createElement('p');
      let site = document.createElement('p');
      let slogan = document.createElement('p');
      let image = document.createElement('img');
      let membership = document.createElement('p');
  
      h2.textContent = `${member.name}`;
      slogan.textContent = `${member.slogan}`;
      phone.textContent = `Phone: ${member.phone}`;
      email.textContent = `Email: ${member.email}`;
      site.textContent = `Website: ${member.website}`;
  
      image.setAttribute('src', member.image);
      image.setAttribute('alt', `${member.name} logo`);
      image.setAttribute('loading', 'lazy');
  
      card.appendChild(h2);
      card.appendChild(image);
      card.appendChild(slogan);
      card.appendChild(phone);
      card.appendChild(email);
      card.appendChild(site);
      card.appendChild(membership);
  
      // Add/append the existing HTML div with the cards class with the section(card)
      document.querySelector('div#spotlight').appendChild(card);
    });
  }
  getMembers()