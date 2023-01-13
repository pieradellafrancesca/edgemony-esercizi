import { cE, qS } from './utils.js';

const images = [
    './img/img1.jpg',
    './img/img2.jpg',
    './img/img3.jpg',
];

//Esercizio 1 

const imageContainerEl = qS ('.image-container');
const firstBtnEl = qS ('.first-btn');
const secondBtnEl = qS ('.second-btn');
const thirdBtnEl = qS ('.third-btn');

firstBtnEl.addEventListener('click', () => {
    imageContainerEl.setAttribute('src', images[0]);
    firstBtnEl.style.background = 'gray';
    secondBtnEl.style.background = 'white';
    thirdBtnEl.style.background = 'white';
} );

secondBtnEl.addEventListener('click', () => {
    imageContainerEl.setAttribute('src', images[1]);
    firstBtnEl.style.background = 'white';
    secondBtnEl.style.background = 'gray';
    thirdBtnEl.style.background = 'white';
});

thirdBtnEl.addEventListener('click', () => {
    imageContainerEl.setAttribute('src', images[2]);
    firstBtnEl.style.background = 'white';
    secondBtnEl.style.background = 'white';
    thirdBtnEl.style.background = 'gray';
}
);


//Avanzato

// const bodyEl = qS('body');
// const titleEl = cE('h1');
// const sliderContainerEl = cE('div');
// const imageContainerEl = cE('img');
// const buttonContainerEl = cE('div');
// const firstBtnEl = cE ('button');
// const secondBtnEl = cE ('button');
// const thirdBtnEl = cE ('button');


// titleEl.textContent = 'Slider';

// sliderContainerEl.className = 'slider-container';
// imageContainerEl.className = 'image-container';
// buttonContainerEl.className = 'button-container';
// firstBtnEl.className = 'first-btn';
// secondBtnEl.className = 'second-btn';
// thirdBtnEl.className = 'third-btn';

// bodyEl.append(titleEl, sliderContainerEl);
// sliderContainerEl.append(imageContainerEl, buttonContainerEl);
// buttonContainerEl.append(firstBtnEl, secondBtnEl, thirdBtnEl);


// const create = (images) => { 
//     imageContainerEl.setAttribute('src', images);
// };

// for (let image of images) {
//     create(image);
// }

// firstBtnEl.addEventListener('click', () => {
//     imageContainerEl.setAttribute('src', images[0]);
//     firstBtnEl.style.background = 'gray';
//     secondBtnEl.style.background = 'white';
//     thirdBtnEl.style.background = 'white';
// } );

// secondBtnEl.addEventListener('click', () => {
//     imageContainerEl.setAttribute('src', images[1]);
//     firstBtnEl.style.background = 'white';
//     secondBtnEl.style.background = 'gray';
//     thirdBtnEl.style.background = 'white';
// });

// thirdBtnEl.addEventListener('click', () => {
//     imageContainerEl.setAttribute('src', images[2]);
//     firstBtnEl.style.background = 'white';
//     secondBtnEl.style.background = 'white';
//     thirdBtnEl.style.background = 'gray';
// }
// );
