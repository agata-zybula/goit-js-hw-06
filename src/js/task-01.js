"use strict";

const lengthOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${lengthOfCategories.length}`);


const sumOfCategories = lengthOfCategories.forEach((e) => {
    console.log(`Category: ${e.querySelector("h2").textContent}\nElements: ${e.querySelector("ul").childElementCount}`
  );
});
