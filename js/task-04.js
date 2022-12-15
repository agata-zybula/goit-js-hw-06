"use strict";

let value = document.querySelector("#value");
let counterValue = 0;

const decrement = document.querySelector("button[data-action = 'decrement']");
decrement.addEventListener("click", (e) => {
    counterValue--;
    e.preventDefault();
    value.innerHTML = counterValue;
});


const increment = document.querySelector("button[data-action = 'increment']");
increment.addEventListener("click", (e) => {
    counterValue++;
    e.preventDefault();
    value.innerHTML = counterValue;
});