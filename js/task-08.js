"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  const message = "Please fill in all the fields!"; //zmienna do alert()
  event.preventDefault(); // nie resetuje formularza po przeladowaniu strony
  const {
    elements: { email, password },
  } = event.currentTarget; //zawiera obiekt z linkami do wszystkich jego elementów, które mają atrybut name

  if (email.value === "" || password.value === "") {
    alert(message); //window alert dla uzytkownika jesli zostawi puste pola
  } else {
    console.log({ email: email.value, password: password.value }); //tworzy obiekt danych
    event.currentTarget.reset(); // resetuje formularz po wysłaniu danych
  }
});


