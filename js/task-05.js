"use strict";

const input = document.querySelector("#name-input"); //szukanie tagu input
const output = document.querySelector("#name-output"); //szukanie tagu span

input.addEventListener("input", (event) => { //nasluchiwanie zdarzenia input
    const inputValue = input.value; //utworzenie zmiennej aby dostac sie no wpisanej przez kogos wartosci w inpucie

    if (inputValue === "") { //jesli w polu input nic nie zostanie wpisane, to:
        output.textContent = "Anymous"; //wyswietli sie "Anymous"
    } else { //w przeciwnym razie (jak pole zostanie wypelnione)
        output.textContent = inputValue; //zostanie wpisane zamiast anymous to, co ktos wpisal w inpucie, np. agata
    }
});