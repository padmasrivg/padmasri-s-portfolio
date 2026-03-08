const faders = document.querySelectorAll(".fade");

function reveal(){

faders.forEach(element => {

const windowHeight = window.innerHeight;

const elementTop = element.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
element.classList.add("show");
}

});

}

window.addEventListener("scroll", reveal);

reveal();