
/* GLOBAL */

const card = document.querySelectorAll(".card")
const coups = document.querySelector("#coups")
const pseudo = document.querySelector("#pseudo")
const end = document.querySelector("#end")

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

        if (temps === 0) {
            endScreen(pseudo, coups, temps)
        }

    }, 1000)
}
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

let checkEnd = 0

function match(cardOne, cardTwo) {

    coups.innerHTML = parseInt(coups.innerHTML) + 1

    if (cardOne.dataset.index === cardTwo.dataset.index) {
        cardOne.classList.remove('flip')
        cardTwo.classList.remove('flip')
        cardOne.classList.add('match')
        cardTwo.classList.add('match')

        checkEnd++

        if (checkEnd === 6) { endScreen(pseudo, coups, temps) }
    }
    else {
        setTimeout(() => {
            cardOne.classList.remove('flip')
            cardTwo.classList.remove('flip')
        }, 500)
    }
}

const endText = document.querySelector("#endText")
const endTemps = document.querySelector("#endTemps")
const endCoups = document.querySelector("#endCoups")

function endScreen(pseudo, coups, temps) {

    if (temps > 0) {
        endText.innerHTML = `C'est gagné ${pseudo.innerHTML} 😉`
    }
    else {
        endText.innerHTML = `C'est perdu ${pseudo.innerHTML} 🙄`
    }

    endCoups.innerHTML = `Nombres de coups : ${parseInt(coups.innerHTML)}`
    endTemps.innerHTML = `Temps restant : ${temps} secondes`

    end.style.display = "flex"
}

