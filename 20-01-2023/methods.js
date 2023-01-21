// import { createSelectCategory } from "./script.js";

const functionPost = (objBody, parameter) => {
    fetch("https://api.escuelajs.co/api/v1/" + parameter, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(objBody)
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


const functionDelete = (callType, idProduct) => {
  fetch("https://api.escuelajs.co/api/v1/" + callType + '/' + idProduct, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
.then(res => res.json())
.then(data => {
  console.log(data);
  if (data != true) {
    alert(`${callType} NOT DELETED: ` + data.name);
  } else {
    alert(`${callType} DELETED SUCCESSFULLY!`)
  }
})
.catch(error => console.log('ERROR: ', error));
}

// functionDelete('products', '14')


const functionPut = (objBody, parameter, idProduct = '') => {
  fetch("https://api.escuelajs.co/api/v1/" + parameter + '/' + idProduct, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(objBody)
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

// const functionGetCat = () => {
//     fetch('https://api.escuelajs.co/api/v1/categories/')
//     .then(res => res.json())
//     .then(data => createSelectCategory(data))
//     .catch(error => console.log(error));
// };

export { functionPost, functionDelete, functionPut };