const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const singleIngredient = ingredients.forEach((e) => { //robimy petle po tablicy
  let newElem = document.createElement("li"); //tworzymy nowy element li, który na razie jest pusty
  newElem.textContent = e; //przypisujemy tekst do li (e - jako pojedynczy element z tablicy - iterowaliśmy po niej)
  newElem.setAttribute("class", "item"); //ustawiamy na newElem class o nazwie item
  const list = document.querySelector("#ingredients"); //znajdujemy sobie liste ul
  list.insertAdjacentElement("beforeend", newElem); //dodajemy do znalezionej wczesniej listy elementy li ze skladnikami
});