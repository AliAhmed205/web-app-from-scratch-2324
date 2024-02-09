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
  fetchData();

async function fetchData() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/scripts/about.json');
    const data = await response.json();
    
    // Kaart #1
    const card1 = document.querySelector('main section:nth-child(1)');
    if (card1) {
        card1.querySelector('.avatarIcon').src = data.cards[0].avatar;
        card1.querySelector('.back h1').textContent = data.cards[0].title;
        card1.querySelector('.back .bio-El').textContent = data.cards[0].bio;
        if (data.cards[0].icons) {
            card1.querySelector('.back .linkedin').src = data.cards[0].icons[0];
            card1.querySelector('.back .github').src = data.cards[0].icons[1];
            card1.querySelector('.back .discord').src = data.cards[0].icons[2];
            // card1.querySelector('.back .icon-El:nth-of-type(2)').src = data.cards[0].icons[1];
            // card1.querySelector('.back .icon-El:nth-of-type(3)').src = data.cards[0].icons[2];
        }
    }
    
    // Kaart #2
    const card2 = document.querySelector('main section:nth-child(2)');
    if (card2) {
        card2.querySelector('.front img').src = data.cards[1].avatar;
        card2.querySelector('.back h1').textContent = data.cards[1].title;
        card2.querySelector('.back .bio-El').textContent = data.cards[1].bio;
        if (data.cards[1].icons) {
            card2.querySelectorAll('.icon-El').forEach((icon, index) => {
                if (data.cards[1].icons[index]) {
                    icon.src = data.cards[1].icons[index];
                }
            });
        }
    }
    
    // Kaart #3
    const card3 = document.querySelector('main section:nth-child(3)');
    if (card3) {
        card3.querySelector('.front img').src = data.cards[2].avatar;
        card3.querySelector('.back h1').textContent = data.cards[2].title;
        card3.querySelector('.back .bio-El').textContent = data.cards[2].bio;
    }
    
    // Kaart #4
    const card4 = document.querySelector('main section:nth-child(4)');
    if (card4) {
        card4.querySelector('.front img').src = data.cards[3].avatar;
        card4.querySelector('.back h1').textContent = data.cards[3].title;
    }
    
    console.log("Data successfully fetched and applied to cards.");
  } catch (error) {
    console.error('Error in JSON', error);
  }
}

 // fetchData();
//  updateTitles()
//  updateAvatar()
//  updateBio()



// async function fetchJSONdata() {
//   try {
//       const response = await fetch("https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/scripts/about.json")
//       const cardsData = await response.json()
//       return cardsData.cards 
//   } catch (error) {
//       console.error('Error fetching JSON data:', error)
//       return null
//   }
// }

// async function updateTitles() {
//   const cards = await fetchJSONdata()
//   if (cards) {
//       const h1Elements = document.querySelectorAll('h1')
//       h1Elements.forEach((h1, index) => {
//           h1.textContent = cards[index].title 
//       })
//   }
// }

// async function updateBio() {
//   const cards = await fetchJSONdata()
//   if (cards) {
//       const bioElements = document.querySelectorAll('.bio-El')
//       bioElements.forEach((p, index) => {
//         p.textContent = cards.cards[index].bio 
//     })
//   }
// }



// async function updateAvatar() {
//   const cards = await fetchJSONdata()
//   if (cards) {
//       const avatarEls = document.querySelectorAll('.avatarIcon');
//       avatarEls.forEach((img, index) => {
//         if (cards[index] && cards[index].avatar) {
//           img.src = cards[index].avatar
//         } else {
//           img.src = this.avatar;
//         }
//       })
//   }
// }

// async function fetchData() {
//   try {
//     const response = await fetch('https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/scripts/about.json');
//     const data = await response.json();
//     console.log(data.cards[0]);
//   } catch (error) {
//     console.error('Error in JSON', error);
//   }
// }


