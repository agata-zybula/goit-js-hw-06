"use strict";

const lengthOfCategories = document.querySelectorAll(".item"); //dostajemy sie do li z klasą item
console.log(`Number of categories: ${lengthOfCategories.length}`); //liczymy ilosc li z klasą item + wpisujemy w konsoli łańcuch szablonowy


const sumOfCategories = lengthOfCategories.forEach((e) => { //robimy pętlę po liście li.item
    console.log(`Category: ${e.querySelector("h2").textContent}\nElements: ${e.querySelector("ul").childElementCount}` //dobranie sie do tekstu naglowka(h2), \n - newline, + dobranie sie do ul i policzenie dzieci ul
  );
});
