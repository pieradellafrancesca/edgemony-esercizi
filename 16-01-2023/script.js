//Esercizio 1
// fetch('https://api.escuelajs.co/api/v1/products')
// .then(res => res.json())
// .then(data => print(data));

// const print = (data) => {
//     data.forEach((item) => {
//         console.log('--------------');
//         console.log(item.title);
//         console.log(item.description);
//     });
// }


//Avanzato
const productsEl = document.querySelector('.products');
const btnEl = document.querySelector('.btn');
const loaderEl = document.querySelector('.loader');

btnEl.addEventListener('click', () => {
    loaderEl.textContent = 'loading...';
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(data => dataManipulating(data))
    .catch(error => {
        loaderEl.textContent = "An error has occured";
        console.log(error)
    });
});

const dataManipulating = (data) => {
    loaderEl.textContent = '';

    data.forEach((item) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'card';

        const imageEl = document.createElement('img');
        imageEl.className = 'image';
        imageEl.setAttribute('src', item.images);
        imageEl.setAttribute('alt', 'Image description');

        const titleEl = document.createElement('h2');
        titleEl.className = 'title';
        titleEl.textContent = item.title;

        const descriptionEl = document.createElement('p');
        descriptionEl.className = 'description';
        descriptionEl.textContent = item.description;

        const priceEl = document.createElement('h4');
        priceEl.className = 'price';
        priceEl.textContent = '$ ' + item.price;
        
        // const heartEl = document.querySelector('ion-icon');

        // heartEl.addEventListener('click', () => heartEl.classList.toggle('active'));

        cardEl.append(imageEl, titleEl, descriptionEl, priceEl);
        productsEl.appendChild(cardEl);

       
    });
}