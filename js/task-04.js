"use strict";

let value = document.querySelector("#value"); //dostajemy sie do spana
let counterValue = 0; //ustalamy sobie zmienna z wartoscia poczatkowa 0 (jak w poleceniu zadania)

const decrement = document.querySelector("button[data-action = 'decrement']"); //dobranie sie do buttona za pomoca data set (atrybuty danych) - bo nie mamy klasy
decrement.addEventListener("click", (e) => { // wywolanie eventlistenera click na zmiennej decrement
    counterValue--; //nasza zmienna zdefiniowana wyzej pomniejszamy o 1 (--)
    e.preventDefault(); //dopisujemy aby zapobiegac przeladowywaniu sie strony
    value.innerHTML = counterValue; // ???
});


const increment = document.querySelector("button[data-action = 'increment']");
increment.addEventListener("click", (e) => {
    counterValue++;
    e.preventDefault();
    value.innerHTML = counterValue;
});