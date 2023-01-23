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

    let randomId = Math.floor(Math.random() * data.length) + 1;

    cardEl.className = 'quote-card';
    idEl.className = 'id-card';
    idEl.textContent = data[randomId].id;
    quoteEl.textContent = data[randomId].quote;
    authorEl.textContent = data[randomId].author;

    cardEl.append(idEl, quoteEl, authorEl);
    
    return cardEl
}


export { cE, qS, cardGenerator, randomeQuote };