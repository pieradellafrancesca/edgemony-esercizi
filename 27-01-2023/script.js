import { GET, GET2 } from "./api.js";
import { qS, qSA, cardGen, modalGen, searchGen } from "./utils.js";

const popularEl = qS(".popular");
const topRatedEl = qS(".top-rated");

Promise.all([GET("tv", "popular"), GET("tv", "top_rated")]).then((data) => {
  data[0].results.map((tv) => popularEl.appendChild(cardGen(tv)));
  data[1].results.map((tv) => topRatedEl.appendChild(cardGen(tv)));
});
// .then(() => {
//     const tvEls = qSA('.tv');

//     tvEls.forEach((tv) =>
//     tv.addEventListener('click', () =>
//     GET('tv', tv.id).then((selectedTv) => {
//         modalEl.appendChild(modalGen(selectedTv));
//         modalEl.style.display = 'flex';
//     }))
//     );
// })

// overlayEl.addEventListener('click', () => {
//     const modalTvEl = qS('.tv-modal');

//     modalEl.style.display = 'none';
//     modalTvEl.remove();
// });

//Avanzato
const yourTvEl = qS(".your-search");
const inputEl = qS(".input-search");

const cardDelete = () => {
  const cardEls = qSA(".info-card");
  cardEls.forEach((tv) => tv.remove());
};

let inputValue = "";

inputEl.addEventListener("input", (e) => {
  cardDelete();
  inputValue = e.target.value;
  GET2("tv", inputValue).then((data) => {
    data.results.map((tv) => {
      if (tv.name.toLowerCase().includes(inputValue))
        yourTvEl.appendChild(searchGen(tv));
    });
  });
});
