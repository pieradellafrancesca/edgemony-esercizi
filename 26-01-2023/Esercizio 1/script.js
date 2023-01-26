//Esercizio 1

const bodyEl = document.body;
const containerEl = document.createElement('div');
const countDownEl = document.createElement('h1');
const btnEl = document.createElement('button');

containerEl.className = 'container';
countDownEl.className = 'count-down';
countDownEl.textContent = '00:00';
btnEl.textContent = 'STOP';

containerEl.appendChild(countDownEl);
bodyEl.append(containerEl, btnEl);


let timeSecond = 11;

const countDown = setInterval(() => {
    if (timeSecond < 1) {
        bodyEl.style.backgroundColor = 'black';
        containerEl.remove();
        btnEl.remove();
    } else {
        timeSecond--;
        displayTime(timeSecond);
    }  
}, 1000);


let displayTime = (second) => {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    countDownEl.textContent = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`
}

btnEl.addEventListener('click', () => clearInterval(countDown));
