//Esercizio 1

const bodyEl = document.body;
const heroEl = document.createElement('div');
const heroTitleEl = document.createElement('h1');
const heroImgEl = document.createElement('img');
const heroDescriptionEl = document.createElement('h3');


heroEl.className = 'hero';

heroImgEl.className = 'heroImg';
heroImgEl.setAttribute('src', "https://picsum.photos/1000/300");
heroImgEl.setAttribute('alt', 'Image description');

heroTitleEl.className = 'heroTitle';
heroTitleEl.textContent = 'Welcome back!';

heroDescriptionEl.className = 'heroDescription';
heroDescriptionEl.textContent = 'Find quality manufacturers';

bodyEl.appendChild(heroEl);
heroEl.append(heroTitleEl, heroImgEl, heroDescriptionEl);


//Esercizio 2

import { products } from "./mocks.js";

const productListEl = document.createElement('section');
productListEl.className ='productList';
bodyEl.appendChild(productListEl);

const createCard  = (item) => {
    
    const cardEl = document.createElement("div");
    const imgEl = document.createElement("img");
    const titleEl = document.createElement("h2");
    const descriptionEl = document.createElement("p");

    cardEl.className = "card";

    imgEl.className = "cardImg";
    imgEl.setAttribute("src", item.img);
    imgEl.setAttribute("alt", item.title);

    titleEl.className = "cardTitle";
    titleEl.textContent = item.title;

    descriptionEl.className = "cardDescription";
    descriptionEl.textContent = item.description;

    productListEl.appendChild(cardEl);
    cardEl.append(imgEl, titleEl, descriptionEl);
}

for (let item of products) {
    createCard(item);
}