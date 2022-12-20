const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


//  const list = document.querySelector(".gallery");

// images.forEach((e) => {
//   let newLi = document.createElement("li");
//   let newImg = document.querySelector("img");
//   newLi.textContent = e;
//   list.insertAdjacentHTML('afterBegin', newLi);
// });

const list = document.querySelector(".gallery"); //szukamy listy ul po classie
const imageCode = images.map((image) => `<li class="item"><img class="image" src=${image.url} alt="${image.alt}" /></li>`).join(""); //mapem iterujemy po tablicy images, pozniej tworzymy tag li o klasie item, img o klasie image, dodaje zrodlo do imgae url i alt url, wstawiam join aby usunac grawisy
list.insertAdjacentHTML("afterbegin", imageCode); //dodanie elementow do listy