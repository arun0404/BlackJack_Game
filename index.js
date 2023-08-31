let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// let messageEl = document.querySelector("#message-el")  #Alternate to getElementById
let sumEL = document.querySelector("#sum-el")
let cardsEL = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    
    cardsEL.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " "
    }

    sumEL.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 7
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}