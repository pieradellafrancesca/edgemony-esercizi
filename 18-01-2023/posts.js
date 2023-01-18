//Esercizio 1

const formEl = document.querySelector('#form');
const inputTitle = document.querySelector('#title-form');
const inputPrice = document.querySelector('#price-form');
const inputCategory = document.querySelector('#category-form');
const inputDescription = document.querySelector('#description-form');
const inputImage = document.querySelector('#image-form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const newObj = {
        title: inputTitle.value,
        price: parseInt(inputPrice.value),
        description: inputDescription.value,
        categoryId: parseInt(inputCategory.value),
        images: [inputImage.value],
    };
    // console.log(newObj); //STAMPA IN CONSOLE L'OGGETTO
    functionPost(newObj);
});

//Avanzato

const functionPost = objBody => {
    fetch("https://api.escuelajs.co/api/v1/products", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(objBody) // body data type must match "Content-Type" header
  })
  .then(res => res.json())
  .then(data => console.log('POST REPLY: ', data))
  .catch(error => console.log('ERROR: ', error));
}
  