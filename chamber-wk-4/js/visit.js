//this is for the visit count

const visitsDisplay = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
	visitsDisplay.textContent = `You have visited ${numVisits} time(s)`;
} else {
	visitsDisplay.textContent = `Welcome! This is your first visit here!`;
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);

