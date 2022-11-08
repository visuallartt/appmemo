
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