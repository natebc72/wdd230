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
};

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
    } else{
	imagesToLoad.forEach((img) =>{
		loadImages(img);
	});
};

