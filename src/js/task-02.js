const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const singleIngredient = ingredients.forEach((e) => {
  let newElem = document.createElement("li");
  newElem.textContent = e;
  newElem.setAttribute("class", "item");
  const list = document.querySelector("#ingredients");
  list.insertAdjacentElement("beforeend", newElem);
});