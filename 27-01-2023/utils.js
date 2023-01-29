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
    imageEl.setAttribute('alt', data.name);

    cardEl.appendChild(imageEl);

    return cardEl;
}

const modalGen = (data) => {
    const modalEl = cE("div");
    const imgEl = cE("img");
    const wrapperTextEl = cE("div");
    const titleEl = cE("h2");
    const overviewEl = cE("p");
    const numberEpisodes = cE("p");
    const voteAverageEl = cE("p");
  
    modalEl.className = "tv-modal";
    if (data.poster_path) {
        imgEl.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    }
    imgEl.alt = data.name;
    wrapperTextEl.className = 'wrapper-text';
    titleEl.textContent = data.name;
    overviewEl.textContent = data.overview;
    numberEpisodes.textContent = `Episodes: ${data.number_of_episodes}`;
    voteAverageEl.textContent = `Average rating: ${data.vote_average}`;
  
    wrapperTextEl.append(titleEl, overviewEl, numberEpisodes, voteAverageEl);
    modalEl.append(imgEl, wrapperTextEl);
    return modalEl;
  };

  
  const searchGen = (data) => {
    const cardEl = cE('div');
    const imageEl = cE('img');
    const wrapperTextEl = cE("div");
    const titleEl = cE("h2");
    const overviewEl = cE("p");
    const voteAverageEl = cE("p");

    cardEl.className = 'info-card';
    cardEl.setAttribute('id', data.id);
    if (data.poster_path) {
        imageEl.setAttribute('src', `https://image.tmdb.org/t/p/w500/${data.poster_path}`);
    }
    imageEl.setAttribute('alt', data.name);
    wrapperTextEl.className = 'info-card-text';
    titleEl.textContent = data.name;
    overviewEl.textContent = data.overview;
    voteAverageEl.textContent = `Average rating: ${data.vote_average}`;

    wrapperTextEl.append(titleEl, overviewEl, voteAverageEl);
    cardEl.append(imageEl, wrapperTextEl);

    return cardEl;
}


export { qS, qSA, cardGen, modalGen, searchGen };