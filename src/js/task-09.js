"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const pressButton = document.querySelector(".change-color"); //dostanie sie do buttona
const addColor = document.querySelector(".color"); //dostanie sie do spana(w ktorym wyswietla sie numer koloru)
const global = document.querySelector("body"); //dostanie sie do boyd w ktorym zmienia sie kolor

pressButton.addEventListener("click", (e) => { //wywolanie eventlistenera klikiem na buttonie
  addColor.textContent = getRandomHexColor(); //przypisanie funkcji(callback?)-numeru koloru do spana(zmaiast myslnika ktory jest w html
  global.style.backgroundColor = addColor.textContent; //zmiana koloru w body
});

