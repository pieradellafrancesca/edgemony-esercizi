//Esercizio 1

//Primo evento al cui click del mouse cambia il colore del testo:

// function changeColor() {
//     cardEl.style.color = 'blue';
// }

const cardEl = document.querySelector('.card');

const btnClickEl = document.querySelector('.btn');

// btnClickEl.addEventListener('click', changeColor);


//Evento per il quale al primo click il colore del testo diventa blu, al secondo click la card scompare:
let step = 0;

function hideCard() {
    if (step === 0) {
        cardEl.style.color = 'blue';
        step = 1;
    } else {
        cardEl.style.display = 'none';
        step = 0;
    } 
}

btnClickEl.addEventListener('click', hideCard);


//Esercizio 2

//solo iniziato...

// function quoteGen(quoteText) {
//     const quoteEl = document.createElement('div');
//     const textEl = document.createElement('p');
//     const quoteListEl = document.querySelector('.quote-list');

//     quoteEl.className = 'quote';
//     textEl.textContent = quoteText;

//     quoteEl.appendChild(textEl);
//     quoteListEl.appendChild(quoteEl);
// }

// const quotes = [
//     {
//       id: 1,
//       quote: 'Life isn’t about getting and having, it’s about giving and being.',
//       author: 'Kevin Kruse'
//     },
//     {
//       id: 2,
//       quote: 'Whatever the mind of man can conceive and believe, it can achieve.',
//       author: 'Napoleon Hill'
//     },
//     {
//       id: 3,
//       quote: 'Strive not to be a success, but rather to be of value.',
//       author: 'Albert Einstein'
//     },
//     {
//       id: 4,
//       quote:
//         'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
//       author: 'Robert Frost'
//     },
//     {
//       id: 5,
//       quote: 'I attribute my success to this: I never gave or took any excuse.',
//       author: 'Florence Nightingale'
//     },
//     {
//       id: 6,
//       quote: 'You miss 100% of the shots you don’t take.',
//       author: 'Wayne Gretzky'
//     },
//     {
//       id: 7,
//       quote:
//         'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.',
//       author: 'Michael Jordan'
//     },
//     {
//       id: 8,
//       quote:
//         'The most difficult thing is the decision to act, the rest is merely tenacity.',
//       author: 'Amelia Earhart'
//     },
//     {
//       id: 9,
//       quote: 'Every strike brings me closer to the next home run.',
//       author: 'Babe Ruth'
//     },
//     {
//       id: 10,
//       quote: 'Definiteness of purpose is the starting point of all achievement.',
//       author: 'W. Clement Stone'
//     },
//     {
//         id: 11,
//         quote: 'We must balance conspicuous consumption with conscious capitalism.',
//         author: 'Kevin Kruse'
//       },
//       {
//         id: 12,
//         quote: 'Life is what happens to you while you’re busy making other plans.',
//         author: 'John Lennon'
//       },
// ];

// quotes.forEach((item) => quoteGen(item.quote));
