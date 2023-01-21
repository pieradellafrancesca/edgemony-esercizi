import { functionPost, functionDelete, functionPut } from "./methods.js";

const formEl = document.querySelector('#post-form');
const inputTitle = document.querySelector('#title-form');
const inputPrice = document.querySelector('#price-form');
const inputCategory = document.querySelector('#cat-form');
const inputDescription = document.querySelector('#description-form');
const inputImage = document.querySelector('#image-form');

const categoryForm = document.querySelector('#category-form');
const categoryName = document.querySelector('#category-name');
const categoryImage = document.querySelector('#category-image');

const deleteForm = document.querySelector('#delete-form');
const inputDeleteId = document.querySelector('#delete-id');


categoryForm.addEventListener('submit', event => {
  event.preventDefault();
  const newObj ={
    name: categoryName.value,
    image: categoryImage.value,
  };

  console.log(newObj);
  functionPost(newObj, "categories");
});


formEl.addEventListener('submit', event => {
  const method = event.target[0].value;
  const idProduct = event.target[1].value;

  event.preventDefault();

  const newObj = {
      title: inputTitle.value,
      price: parseInt(inputPrice.value),
      description: inputDescription.value,
      categoryId: parseInt(inputCategory.value),
      images: [inputImage.value],
  };
  console.log(event);
  
  if (method === 'POST') {
    functionPost(newObj, "products");
  } else if (method === 'PUT') {
    functionPut(newObj, "products", idProduct);
  }
});


deleteForm.addEventListener('submit', event => {
  event.preventDefault();
  functionDelete('products', inputDeleteId.value);
});


