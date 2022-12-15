"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
    const inputValue = input.value;

    if (inputValue === "") {
        output.textContent = "Anymous";
    } else {
        output.textContent = inputValue;
    }
});