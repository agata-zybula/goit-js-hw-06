"use strict";

const inputArea = document.querySelector("#font-size-control"); //dostajemy sie do inputa
const textSize = document.querySelector("#text"); //dostajemy sie do spana


inputArea.addEventListener("input", (event) => { //uzywamy eventlistenera input ???
    textSize.style.fontSize = inputArea.value + "px"; //dodajemy style do zmiennej textSize które rownaja sie to, co wpisane jest w inpucie + dodajemy jednostke px
});