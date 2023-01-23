import { cE, qS, cardGenerator, randomeQuote } from "./utils.js";
import { GET } from "./api.js";

const bodyEl = qS('body');
const containerEl = cE('div');
containerEl.className = 'container';

const btnEl = cE('button');
btnEl.textContent = 'Random Quote';

bodyEl.appendChild(containerEl);
containerEl.appendChild(btnEl)



GET('quotes/2')
.then((data) => containerEl.appendChild(cardGenerator(data)));





btnEl.addEventListener('click', () => 
    GET('quotes')
    .then((data) => containerEl.appendChild(randomeQuote(data)))
)