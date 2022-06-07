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

