
const card = document.querySelectorAll(".card")

randomCard()
clickCard()

function randomCard() {

    card.forEach(e => {
        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random() * card.length)
        e.style.order = num[random]
    })

}

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

//timer
const departMinutes = 1
        let temps = departMinutes * 60

        const timerElement = document. getElementById("time")

        setInterval(() => {
        let minutes = parseInt(temps / 60, 10)
        let secondes = parseInt(temps % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        secondes = secondes < 10 ? "0" + secondes : secondes

        timerElement.innerText = `${minutes}:${secondes}`
        temps = temps <= 0 ? 0 : temps - 1
        }, 1000)