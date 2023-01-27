import { GET } from "./api.js";
import { qS, qSA, cardGen } from "./utils.js";


const popularEl = qS('.popular');
const topRatedEl = qS('.top-rated');


Promise.all([
    GET('popular'),
    GET('top_rated')
])
.then((data) => {
    data[0].results.map((tv) => popularEl.appendChild(cardGen(tv)));
    data[1].results.map((tv) => topRatedEl.appendChild(cardGen(tv)));
})
// .then(() => {
//     const tvEls = qSA('.tv');
//     tvEls.forEach((tv) => tv.addEventListener('click', () => GET(tv.id).then((x) => console.log(x))));
// })


//Avanzato
// const yourTvEl = qS('.your-tv');
// const btnSearch = qS('.btn-search');

// let inputValue = '';

// btnSearch.addEventListener('click', (e) => {
//     inputValue.event.target.value;
//     GET(tv.id).then((data) => {
//         data[0].results.map((tv) => {
//             if (tv.title.includes(inputValue)) yourTvEl.appendChild(cardGen(tv))
//         })
        
//     }) 
// })