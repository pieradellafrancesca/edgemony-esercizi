// import { functionGetCat } from "./methods.js";

const productsEl = document.querySelector('.products');
const btnEl = document.querySelector('.btn');
const loaderEl = document.querySelector('.loader');

const select = document.querySelector('#category-select');


// let listaProdotti;

// select.addEventListener('change', () => {
//     console.log(select.value);
//     filterByCat(select.value);
// });

// const filterByCat = idCat => {
//     const filteredProducts = listaProdotti.filter(
//       item => item.category.id === parseInt(idCat)
//     );
//     dataManipulating(filteredProducts, ".products");
//   };

const cart = [];



btnEl.addEventListener('click', () => {
    loaderEl.textContent = 'loading...';
    fetch('https://api.escuelajs.co/api/v1/products/')
    .then(res => res.json())
    .then(data => dataManipulating(data))
    .catch(error => {
        loaderEl.textContent = "An error has occured";
        console.log(error)
    });
});

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
        imageEl.setAttribute('src', item.category.image);
        imageEl.setAttribute('alt', 'Image description');

        const titleEl = document.createElement('h2');
        titleEl.className = 'title';
        titleEl.textContent = item.title.slice(0, 10);

        const descriptionEl = document.createElement('p');
        descriptionEl.className = 'description';
        descriptionEl.textContent = item.description.slice(0, 30); 

        const priceEl = document.createElement('h4');
        priceEl.className = 'price';
        priceEl.textContent = '$ ' + item.price;

        const addBtn = document.createElement('button');
        addBtn.className = 'basket-btn';
        addBtn.textContent = 'Add to basket';

        addBtn.addEventListener('click', () => {
            cart.push(item);
            cartCreator();
            console.log(cart);
        })

        cardEl.append(imageEl, titleEl, descriptionEl, priceEl, addBtn);
        productsEl.appendChild(cardEl);
    });
};


const hamburgerEl = document.querySelector('.hamburger');
const dropDownEl = document.querySelector('.drop-down');

hamburgerEl.addEventListener('click', () => dropDownEl.classList.toggle('show'));

// functionGetCat();

const cartCreator = () => {
    dropDownEl.innerHTML = "";
    cart.forEach((item, index) => {

        const container = document.createElement('div');
        container.className = 'cart-container';

        const cartImg = document.createElement('img');
        cartImg.setAttribute('src', item.category.image);
        cartImg.setAttribute('alt', 'Image description');
        cartImg.className = 'cart-img';

        const cartEl = document.createElement('p');
        cartEl.textContent = item.title;

        const cartPrice = document.createElement('p');
        cartPrice.textContent = '$ ' + item.price;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.className = 'delete';

        deleteBtn.addEventListener('click', () => {
            container.remove();
            cart.splice(index, 1);
        });
        
        container.append(cartImg, cartEl, cartPrice, deleteBtn);
        dropDownEl.appendChild(container);
    })
};


// const createSelectCategory = arrayCat => {
//     arrayCat.forEach(item => {
//       const optionValue = document.createElement("option");
//       optionValue.textContent = item.name;
//       optionValue.setAttribute("value", item.id);
//       select.appendChild(optionValue);
//     });
//   };

export { dataManipulating }