import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const randomFace = ()=>{ const world = document.querySelector("#World");
 
  const myArray = ["A","2","3","4","5","6","7","8","9","10","J","Q","K",]
  const randomDec = Math.random()
  const randomLongNumber = randomDec * myArray.length
  const randomNumNoDec= Math.floor(randomLongNumber)
  world.innerText= randomLongNumber
world.innerHTML = myArray[randomNumNoDec]}
 const button = document.querySelector("#button")
 button.addEventListener("click" randomFace)
}; 
  const sayHello= ()=>{
    console.log ("hello!!!")
  }
  


  const card = document.querySelector("#card");{
  const myArray = ["♦", "♥", "♠", "♣"]
  const randomDec = Math.random()
  const randomLongNumber = randomDec * myArray.length
  const randomNumNoDec= Math.floor(randomLongNumber)
  card.innerText= randomLongNumber
card.innerHTML = myArray[randomNumNoDec]
  }