document.querySelectorAll('article').forEach(item => {
      item.addEventListener('click', () => {
          if (item.classList.contains('flip')) {
              item.classList.remove('flip')
          } else {
              document.querySelectorAll('article').forEach(card => {
                  card.classList.remove('flip')
              })
              item.classList.add('flip')
          }
      })
  })
 updateTitles()
 updateAvatar()
 updateBio()



async function fetchJSONdata() {
  try {
      const response = await fetch("https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/scripts/about.json")
      const cardsData = await response.json()
      return cardsData.cards 
  } catch (error) {
      console.error('Error fetching JSON data:', error)
      return null
  }
}

async function updateTitles() {
  const cards = await fetchJSONdata()
  console.log(cards)
  if (cards) {
      const h1Elements = document.querySelectorAll('h1')
      h1Elements.forEach((h1, index) => {
          h1.textContent = cards[index].title 
      })
  }
}

async function updateBio() {
  const cards = await fetchJSONdata()
  console.log(cards)
  if (cards) {
      const bioElements = document.querySelectorAll('.bio-El')
      bioElements.forEach((p, index) => {
        p.textContent = cards.cards[index].bio 
    })
  }
}



async function updateAvatar() {
  const cards = await fetchJSONdata()
  if (cards) {
      const avatarEls = document.querySelectorAll('.avatarIcon');
      avatarEls.forEach((img, index) => {
        if (cards[index] && cards[index].avatar) {
          img.src = cards[index].avatar
        } else {
          img.src = this.avatar;
        }
      })
  }
}
