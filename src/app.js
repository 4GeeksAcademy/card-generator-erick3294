import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  const randomCard = () => {

    const divFace = document.querySelector("#card");

    const faceArray = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",]

    const randomFaceDec = Math.random()

    const randomLongNumber = randomFaceDec * faceArray.length

    const randomNumberNoDec = Math.floor(randomLongNumber)

    divFace.innerHTML = faceArray[randomNumberNoDec]


    const divSuit = document.querySelectorAll(".suit");

    const suitArray = ["♦", "♥", "♠", "♣"]

    const randomSuitDec = Math.random()

    const randomSuitLongNumber = randomSuitDec * suitArray.length

    const randomNumNoDec = Math.floor(randomSuitLongNumber)

    divSuit.forEach(
      (colorDivElement) => {
         if (suitArray[randomNumNoDec] == "♦") {
      colorDivElement.style.color = "red"
      console.log("diamond")
    }
    if (suitArray[randomNumNoDec] == "♥") {
      colorDivElement.style.color = "red"
    }
    if (suitArray[randomNumNoDec] == "♠" || suitArray[randomNumNoDec] == "♣") {
      colorDivElement.style.color = "black"
    }

    colorDivElement.innerHTML = suitArray[randomNumNoDec]
        colorDivElement.style.backgroundColor = "blue"

      }
    )
    
    if (suitArray[randomNumNoDec] == "♦") {
      divSuit.style.color = "red"
      console.log("diamond")
    }
    if (suitArray[randomNumNoDec] == "♥") {
      divSuit.style.color = "red"
    }
    if (suitArray[randomNumNoDec] == "♠" || suitArray[randomNumNoDec] == "♣") {
      divSuit.style.color = "black"
    }

    divSuit.innerHTML = suitArray[randomNumNoDec]
  }



  const myButton = document.querySelector(".button");
  myButton.style.backgroundColor = "green"
  myButton.addEventListener("click", randomCard)

  const mySuit = document.querySelector("#suit");
  mySuit.addEventListener("click", randomCard)
};







