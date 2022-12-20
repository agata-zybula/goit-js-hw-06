"use strict";

const inputArea = document.querySelector("#validation-input"); //dobranie sie do samego inputa
const lengthValue = inputArea.getAttribute("data-length"); //dobranie sie do atrybutu data-length

inputArea.addEventListener("blur", (e) => { // ???
  if (parseInt(lengthValue) === inputArea.value.trim().length) { //uzywmay parseInt aby przekonwertowac liczbe w stringu "6" na liczbe zwykla - 6, aby mozna bylo policzyc ilosc wpisywanych znakow. czyli jesli ilosc znakow wynoszaca 6 (podane w kodzie html) jest scisle rowna ilosci znakow pisanej przez uzytkownaika - liczymy to za pomoca lenght i trim() - trim usuwa spacje jako znaki
      inputArea.classList.add("valid"); //to dodajemy wtedy klase valid
      inputArea.classList.remove("invalid"); //a usuwamy invalid
  } else { //w przeciwnym razie
      inputArea.classList.add("invalid"); //dodajemy klase invalid
      inputArea.classList.add("valid"); //a usuwamy valid
  }
});