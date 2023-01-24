const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const cardGenerator = (data) => {
    const cardEl = cE('div');
    const idEl = cE('div');
    const quoteEl = cE('p');
    const authorEl = cE('p');

    cardEl.className = 'quote-card';
    idEl.className = 'id-card';
    idEl.textContent = data.id;
    quoteEl.textContent = data.quote;
    authorEl.textContent = data.author;

    cardEl.append(idEl, quoteEl, authorEl);
    
    return cardEl
}

const randomeQuote = (data) => {
    
    const cardEl = cE('div');
    const idEl = cE('div');
    const quoteEl = cE('p');
    const authorEl = cE('p');

    let randomIndex = Math.floor(Math.random() * data.length);

    cardEl.className = 'quote-card';
    idEl.className = 'id-card';
    idEl.textContent = data[randomIndex].id;
    quoteEl.textContent = data[randomIndex].quote;
    authorEl.textContent = data[randomIndex].author;

    cardEl.append(idEl, quoteEl, authorEl);
    
    // return cardEl
}


export { cE, qS, cardGenerator, randomeQuote };