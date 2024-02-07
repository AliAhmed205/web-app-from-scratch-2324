const container = document.querySelector('.container')
const naam = document.getElementById("mijnNaam")
const githubJsonUrl = 'https://raw.githubusercontent.com/jouwgebruikersnaam/jouwreponaam/hoofdmap/bestandsnaam.json';
let isKaartFlipped = false

container.addEventListener('click', function(event) {
    const kaart = event.target.closest('article')
    if (kaart && !isKaartFlipped) {
        kaart.classList.toggle('flipped')
        isKaartFlipped = true
    }
})

document.addEventListener('click', function(event) {
    if (isKaartFlipped) {
        const clickedElement = event.target
        if (!clickedElement.closest('.container')) {
            const alleKaarten = document.querySelectorAll('.container article')
            alleKaarten.forEach(function(kaart) {
                kaart.classList.remove('flipped')
            })
            isKaartFlipped = false
        }
    }
})

container.addEventListener('mouseover', function(event) {
    const kaart = event.target.closest('article')
    const kaarten = document.querySelectorAll('.container article')

    if (kaart && !isKaartFlipped) {
        kaart.classList.add('hovered')
        kaarten.forEach(function(item) {
            if (item !== kaart) {
                item.classList.add('dimmed')
            }
        })
    }
})

container.addEventListener('mouseout', function(event) {
    const kaart = event.target.closest('article')
    const kaarten = document.querySelectorAll('.container article')
    if (kaart) {
        kaart.classList.remove('hovered')
        kaarten.forEach(function(item) {
            item.classList.remove('dimmed')
        })
    }
})
