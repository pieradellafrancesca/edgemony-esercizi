import { cE, qS } from "./utils.js";

// // Esercizio 1

// import myJson from './mock.json' assert {type: 'json'};

// const bodyEl = document.body;
// const highlightEl = cE('h1');
// highlightEl.className = 'products-store';
// highlightEl.textContent = 'Products Store';

// bodyEl.appendChild(highlightEl)


// const productCard = (myJson) => {
//     const containerEl = cE('div');
//     const imageEl = cE('img');
//     const textWrapperEl = cE('div');
//     const titleEl = cE('h3');
//     const descriptionEl = cE('p');
//     const priceEl = cE('p');

//     containerEl.className = 'product-card';
//     imageEl.setAttribute('src', myJson.images[0]);
//     imageEl.setAttribute('alt', myJson.description);
//     textWrapperEl.className = 'product-card-text';
//     titleEl.textContent = myJson.title;
//     descriptionEl.textContent = myJson.description;
//     priceEl.textContent = `$ ${myJson.price}`;

//     textWrapperEl.append(titleEl, descriptionEl, priceEl);
//     containerEl.append(imageEl, textWrapperEl);

//     return containerEl;
// }

// myJson.products.forEach((product) => bodyEl.appendChild(productCard(product)));



//Avanzato

const BASE_URL = "https://dummyjson.com/";

const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();
  return data;
};

const bodyEl = document.body;
const containerEl = cE('div');
const titleEl = cE('h1');

containerEl.className = 'container';
titleEl.className = 'title';
titleEl.textContent = 'Height Users';


bodyEl.append(titleEl, containerEl);



const statusBarGenerator = (value, userHeight) => {
    const wrapperEl = cE('div');
    const textEl = cE('h4');
    const statusEl = cE('div');

    wrapperEl.className = 'height-status-bar';
    textEl.textContent = value;
    statusEl.className = 'height-status-bar-status';
    statusEl.style.height = `${userHeight * 10}px`;

    statusEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    wrapperEl.append(textEl, statusEl);
    
    return wrapperEl;
}

let firstSection, secondSection, thirdSection, fourthSection, fifthSection, sixthSection;
let sectionCount = [];

GET('users?limit=80')
.then(({ users }) => {
    const userHeight = users.map((user) => user.height);
    firstSection = {
        height: userHeight.filter((height) => height <= 160),
        text: '< 161'
    };
    secondSection = {
        height: userHeight.filter((height) => height >= 161 && height <= 170),
        text: '161 - 170'
    };
    thirdSection = {
        height: userHeight.filter((height) => height >= 171 && height <= 180),
        text: '171 - 180'
    };
    fourthSection = {
        height: userHeight.filter((height) => height >= 181 && height <= 190),
        text: '181 - 190'
    };
    fifthSection = {
        height: userHeight.filter((height) => height >= 191 && height <= 200),
        text: '191 - 200'
    };
    sixthSection = {
        height: userHeight.filter((height) => height >= 201),
        text: '> 200'
    };

    sectionCount.push(firstSection, secondSection, thirdSection, fourthSection, fifthSection, sixthSection);
})
.then(() => {
    sectionCount.map((section) => containerEl.appendChild(statusBarGenerator(section.text, section.height.length)))
});