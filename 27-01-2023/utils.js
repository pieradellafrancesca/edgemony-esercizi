const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);
const cE = (element) => document.createElement(element);

const cardGen = (data) => {
    const cardEl = cE('div');
    const imageEl = cE('img');

    cardEl.className = 'tv';
    cardEl.setAttribute('id', data.id);
    if (data.poster_path) {
        imageEl.setAttribute('src', `https://image.tmdb.org/t/p/w500/${data.poster_path}`);
    }
    imageEl.setAttribute('alt', data.title);

    cardEl.appendChild(imageEl);

    return cardEl;
}



export { qS, qSA, cE, cardGen };