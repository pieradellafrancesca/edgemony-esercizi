import { GET } from './api.js';
import { cE } from './utils.js';

const bodyEl = document.body;
const inputEl = cE('input');
inputEl.setAttribute("placeholder", "Search by name")

bodyEl.appendChild(inputEl);


const userGen = (data) => {
    const { image, firstName, lastName, email } = data;

    const containerEl = cE('div');
    const imageEl = cE('img');
    const textWrapperEl = cE('div');
    const firstNameEl = cE('h3');
    const lastNameEl = cE('h3');
    const emailEl = cE('p');

    containerEl.className = 'container';
    imageEl.setAttribute('src', image);
    imageEl.setAttribute('alt', firstName + lastName);
    textWrapperEl.className = 'text-wrapper';
    firstNameEl.textContent = firstName;
    lastNameEl.textContent = lastName;
    emailEl.textContent = email;
    // emailEl.setAttribute('href', data.email);

    textWrapperEl.append(firstNameEl, lastNameEl, emailEl);
    containerEl.append(imageEl, textWrapperEl);

    return containerEl;
};


const containersDelete = () => {
    const usersEl = document.querySelectorAll('.container');
    usersEl.forEach((user) => user.remove());
};


let inputValue = '';

inputEl.addEventListener('input', (event) => {
    containersDelete();
    inputValue = event.target.value;
    GET('users?limit=20').then(({users}) => {
        users.map((user) => {
            if (user.firstName.toLowerCase().includes(inputValue)) bodyEl.appendChild(userGen(user));
        })
    });
    GET('users?limit=20').then(({users}) => {
        users.map((user) => {
            if (user.lastName.toLowerCase().includes(inputValue)) bodyEl.appendChild(userGen(user));
        })
    });
});

