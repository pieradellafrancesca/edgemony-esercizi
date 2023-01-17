const productsEl = document.querySelector('.products');
const btnEl = document.querySelector('.btn');
const loaderEl = document.querySelector('.loader');

const cart = [];

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
        titleEl.textContent = item.title.slice(0, 10); // utilizzo del metodo slice() per il primo punto dell'esercizio 1

        const descriptionEl = document.createElement('p');
        descriptionEl.className = 'description';
        descriptionEl.textContent = item.description.slice(0, 30); // utilizzo del metodo slice() per il primo punto dell'esercizio 1

        const priceEl = document.createElement('h4');
        priceEl.className = 'price';
        priceEl.textContent = '$ ' + item.price;

        const addBtn = document.createElement('button');
        addBtn.className = 'basket-btn';
        addBtn.textContent = 'Add to basket';

        // SECONDO PUNTO DELL'ESERCIZIO 1: aggiungere alert()
        addBtn.addEventListener('click', () => {
            cart.push(item);
            cartCreator();
            window.alert('Item added successfully!');
            console.log(cart);
        })

        cardEl.append(imageEl, titleEl, descriptionEl, priceEl, addBtn);
        productsEl.appendChild(cardEl);
    });
};


//Avanzato

const navbarEl = document.querySelector('.navbar');
const dropDownEl = document.querySelector('.drop-down');

navbarEl.addEventListener('click', () => dropDownEl.classList.toggle('show'));

const cartCreator = () => {
    dropDownEl.innerHTML = "";
    cart.forEach((item) => {

        const container = document.createElement('div');
        container.className = 'cart-container';

        const cartEl = document.createElement('p');
        cartEl.textContent = item.title;

        const cartPrice = document.createElement('p');
        cartPrice.textContent = '$ ' + item.price;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        deleteBtn.className = 'delete';

        deleteBtn.addEventListener('click', () => {
            container.remove();
            cart.pop();
        });
        
        container.append(cartEl, cartPrice, deleteBtn);
        dropDownEl.appendChild(container);
    })
}