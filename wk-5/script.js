const inputText = document.querySelector('#txt');
const myButton = document.querySelector('.btn-list');
const list = document.querySelector('.conatiner ul');
myButton.addEventListener('click', (e)=> {
    if(inputText.value != ""){
        e.preventDefault();

        const myLi = document.createElement('li');
        myLi.innerText = inputText.value;
        list.appendChild(myLi);

        const mySpan = document.createElement('span');
        mySpan.innerText = 'x';
        myLi.appendChild(mySpan);  
    }

    const close = document.querySelectorAll("span");
    for(let i=0; i<close.length; i++){
        close[i].addEventListener("click", ()=>{
            close[i].parentElement.style.display = "none";
        })
    }
    inputText.value = "";
});
