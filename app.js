const button = document.querySelector(".change");
const body = document.querySelector("body");

const colors = ["#0d7bcd","black","yellow","violet","red","#3dc23a"]
console.log("Hola, Estoy afuera del evento");

button.addEventListener("click", changeColor)

function changeColor(){
    
    let random = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[random]
}