var button = document.getElementById("push");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll('ul>li');


function inputLength() {
	return input.value.length;
}

function createListElement() {

  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "btn");
  deleteButton.appendChild(document.createTextNode("Delete"));
  

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li).addEventListener("click", toggleList); 
	input.value = "~";
  

  ul>li.appendChild(deleteButton).addEventListener("click", removeItem);
  
}
  
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


var list = document.querySelectorAll('ul>li');
for (var i = 0; i < list.length; i++) {
list[i].addEventListener("click", toggleList);
}
function toggleList() {
  this.classList.toggle("done");
 }

var elements = document.getElementsByClassName("btn");
for (var i = 0; i < elements.length; i++){
  elements[i].addEventListener("click", removeItem);
}
  
function removeItem(){
this.parentNode.remove();
}       
