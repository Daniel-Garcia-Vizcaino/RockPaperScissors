const item1 = document.querySelector(".giveRandom");

function changeColor(){
    item1.classList.toggle("green");
}

function returnNumber(){
    console.log(Math.floor(Math.random()*3));
}

item1.addEventListener("dblclick", returnNumber);

