const formEl = document.querySelector('#post-form');
const inputTitle = document.querySelector('#title-form');
const inputPrice = document.querySelector('#price-form');
const inputCategory = document.querySelector('#cat-form');
const inputDescription = document.querySelector('#description-form');
const inputImage = document.querySelector('#image-form');

// ESERCIZIO DEL 19-01-2023
// inserimento nuova categoria
const categoryForm = document.querySelector('#category-form');
const categoryName = document.querySelector('#category-name');
const categoryImage = document.querySelector('#category-image');

categoryForm.addEventListener('submit', event => {
  event.preventDefault();
  const newObj2 ={
    name: categoryName.value,
    image: categoryImage.value,
  };

  console.log(newObj2);
  functionPost(newObj2, "categories");
});


formEl.addEventListener('submit', event => {
  event.preventDefault();
  const newObj = {
      title: inputTitle.value,
      price: parseInt(inputPrice.value),
      description: inputDescription.value,
      categoryId: parseInt(inputCategory.value),
      images: [inputImage.value],
  };
  functionPost(newObj, "products");
});

const functionPost = (objBody, parameter) => {
    fetch("https://api.escuelajs.co/api/v1/" + parameter, {
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
  .then(data => {
    console.log(data);
    if (data.statusCode >= 400 && data.statusCode < 500) {
      alert(`${parameter} NOT LOADED: ` + data.message[0]);
    } else {
      alert(`${parameter} LOADED SUCCESSFULLY!`)
    }
  })
  .catch(error => console.log('ERROR: ', error));
}

