const container = document.querySelector('.container')
const titleCard = document.querySelector('.title')
const firstnameElement = document.querySelector('.firstName'); 
const age = document.querySelector('.ageNumber')
const githubJsonUrl = 'https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/scripts/about.json'
let isKaartFlipped = false

async function haalJSONop() {
    try {
        const reactie = await fetch(githubJsonUrl)
        const data = await reactie.json()

        titleCard.textContent = data['kaart-1'].title
        firstnameElement.textContent = data['kaart-1'].firstname
        age.textContent = data['kaart-1'].age
        const avatarImgs = document.querySelectorAll('.avatarIcon')
        avatarImgs.forEach(img => {
            img.src = data['kaart-1'].avatar
            img.alt = "Pharaoh Avatar"
        })
        console.log(data)
    } catch (error) {
        console.error('Er is een fout opgetreden bij het ophalen en verwerken van de JSON:', error)
    }
}


haalJSONop()

container.addEventListener('click', function(event) {
    const clickedCard = event.target.closest('article')
    const flippedCard = document.querySelector('.container article.flipped')
    
    if (flippedCard && clickedCard !== flippedCard) {
        flippedCard.classList.remove('flipped')
        isKaartFlipped = false
    }

    if (clickedCard && !clickedCard.classList.contains('flipped')) {
        clickedCard.classList.toggle('flipped')
        isKaartFlipped = true
    }
})

document.addEventListener('click', function(event) {
    if (isKaartFlipped) {
        const clickedElement = event.target
        const clickedCard = clickedElement.closest('.container article')

        if (!clickedCard || !clickedElement.closest('.container')) {
            const flippedCard = document.querySelector('.container article.flipped')
            flippedCard.classList.remove('flipped')
            isKaartFlipped = false
        }
    }
})

container.addEventListener('mouseover', function(event) {
    if (!isKaartFlipped) {
        const kaart = event.target.closest('article')
        const kaarten = document.querySelectorAll('.container article')

        if (kaart) {
            kaart.classList.add('hovered')
            kaarten.forEach(function(item) {
                if (item !== kaart) {
                    item.classList.add('dimmed')
                }
            })
        }
    }
})

container.addEventListener('mouseout', function(event) {
    if (!isKaartFlipped) {
        const kaart = event.target.closest('article')
        const kaarten = document.querySelectorAll('.container article')
        if (kaart) {
            kaart.classList.remove('hovered')
            kaarten.forEach(function(item) {
                item.classList.remove('dimmed')
            })
        }
    }
})

