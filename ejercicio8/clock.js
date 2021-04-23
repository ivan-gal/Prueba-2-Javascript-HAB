//Seleccionamos los botones

const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');

//Seleccionamos el reloj

const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const points = document.querySelectorAll('.points');
const spans = document.querySelectorAll('span');
const buttons = document.querySelectorAll('button');
const cronDiv = document.querySelector('.clock');

cronDiv.style.cssText =
    ' width : 350px; border: 2px solid black; height : 350px';

spans.forEach(
    (span) =>
        (span.style.cssText =
            'font-size : 4rem; display:inline-block; position: relative; left: 3.5rem; top : 4rem;')
);
buttons.forEach(
    (button) =>
        (button.style.cssText =
            'display : block; position: relative; left:5rem; top : 4rem; margin: 0.5em; padding: 0.5em; width: 10rem')
);

//Creamos la clase del reloj con sus metodos.

class Clock {
    constructor() {
        this.time = 0;
        this.started = false;
        this.paused = false;
        this.resumeInterval;
        this.startInterval;
    }
    startClock() {
        clearInterval(this.started ? this.startInterval : this.resumeInterval);
        this.started = true;
        this.paused = false;
        this.startInterval = setInterval(() => {
            this.time += 1;
            console.log(this.time);
            formatClock(this.time);
        }, 1000);
    }
    resetTime() {
        clearInterval(this.started ? this.startInterval : this.resumeInterval);
        this.started = false;
        this.paused = false;
        this.time = 0;
        formatClock(this.time);
    }
    pauseTime() {
        clearInterval(this.started ? this.startInterval : this.resumeInterval);
        formatClock(this.time);
    }
}

/**
 * Convierte segundos en hh:mm:ss
 * @param {*} timePassed Los segundos que le queramos pasar.
 */

function formatClock(timePassed) {
    let time = [0, 0, 0];
    state = points[0].style.visibility === 'hidden' ? 'visible' : 'hidden';
    points.forEach((point) => (point.style.visibility = state));
    while (timePassed >= 3600) {
        timePassed = timePassed - 3600;
        time[0] += 1;
    }
    while (timePassed >= 60) {
        timePassed = timePassed - 60;
        time[1] += 1;
    }
    while (timePassed > 0) {
        timePassed = timePassed - 1;
        time[2] += 1;
    }
    time = time.map((hms) => {
        return hms < 10 ? `0${hms}` : hms;
    });
    [hour.textContent, minute.textContent, second.textContent] = time;
}

//Creamos el cronómetro y enlazamos los botones con sus funciones.
const cron = new Clock();
startButton.addEventListener('click', () => cron.startClock());
resetButton.addEventListener('click', () => cron.resetTime());
pauseButton.addEventListener('click', () => cron.pauseTime());
