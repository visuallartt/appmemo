
/*Constantes*/

const card = document.querySelectorAll(".card")
const coups = document.querySelector("#coups")
const pseudo = document.querySelector("#pseudo")
const end = document.querySelector("#end")

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

    coups.innerHTML = parseInt(coups.innerHTML) + 1

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

//timer

const departMinutes = 1
let temps = departMinutes * 60

const timerElement = document.getElementById("time")

if (timerElement) {

    console.log('start')

    setInterval(() => {
        let minutes = parseInt(temps / 60, 10)
        let secondes = parseInt(temps % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        secondes = secondes < 10 ? "0" + secondes : secondes

        timerElement.innerText = `${minutes}:${secondes}`
        temps = temps <= 0 ? 0 : temps - 1

        if (temps === 55) {

            let score = {
                pseudo: pseudo.outerText,
                coups: parseInt(coups.outerText),
                time: temps
            }

            end.style.display = "flex"
        }
    }, 1000)

}

