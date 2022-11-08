
/*Cards*/
const card = document.querySelectorAll(".card")

randomCard()
clickCard()

/*Création aléatoire cartes*/
function randomCard() {

    card.forEach(e => {
        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random() * card.length)
        e.style.order = num[random]
    })

}

/*Comportement cards au clique dessus*/
function clickCard() {

    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('click', () => {
            card[i].classList.add('flip')

            const flippedCard = document.querySelectorAll('.flip')

            if (flippedCard.length === 2) {
                match(flippedCard[0], flippedCard[1])
            }
        })
    }
}

/*Comportement jeu lorsque les cartes correspondent ou non*/
function match(cardOne, cardTwo) {
    if (cardOne.dataset.index === cardTwo.dataset.index) {
        cardOne.classList.remove('flip')
        cardTwo.classList.remove('flip')
        cardOne.classList.add('match')
        cardTwo.classList.add('match')
    }
    else {
        setTimeout(() => {
            cardOne.classList.remove('flip')
            cardTwo.classList.remove('flip')
        }, 500)
    }
}

/*Timer*/
class Timer {
    constructor() {
        this.isRunning = false;
        this.startTime = 0;
        this.overallTime = 0;
    }

    _getTimeElapsedSinceLastStart() {
        if (!this.startTime) {
            return 0;
        }

        return Date.now() - this.startTime;
    }

    start() {
        if (this.isRunning) {
            return console.error('Timer is already running');
        }

        this.isRunning = true;

        this.startTime = Date.now();
    }

    stop() {
        if (!this.isRunning) {
            return console.error('Timer is already stopped');
        }

        this.isRunning = false;

        this.overallTime = this.overallTime + this._getTimeElapsedSinceLastStart();
    }

    reset() {
        this.overallTime = 0;

        if (this.isRunning) {
            this.startTime = Date.now();
            return;
        }

        this.startTime = 0;
    }

    getTime() {
        if (!this.startTime) {
            return 0;
        }

        if (this.isRunning) {
            return this.overallTime + this._getTimeElapsedSinceLastStart();
        }

        return this.overallTime;
    }
}

const timer = new Timer();
timer.start();
setInterval(() => {
    const timeInSeconds = Math.round(timer.getTime() / 1000);
    document.getElementsByClassName('time').innerText = timeInSeconds;
}, 100)