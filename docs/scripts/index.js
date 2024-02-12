// Function to handle flipping articles on click
document.querySelectorAll('article').forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('flip')) {
      // Remove 'flip' class from clicked article
      item.classList.remove('flip');
      // Remove 'active' class from the first paragraph inside '.back'
      item.querySelector('.back p:first-of-type').classList.remove('active');
    } else {
      // Remove 'flip' class from all articles
      document.querySelectorAll('article').forEach(card => {
        card.classList.remove('flip');
        card.querySelector('.back p:first-of-type').classList.remove('active');
      });
      // Add 'flip' class to clicked article
      item.classList.add('flip');
      // Add 'active' class to the first paragraph inside '.back'
      item.querySelector('.back p:first-of-type').classList.add('active');
    }
  });
});

// Function to fetch random facts using an API
fetchRandomFacts(1); 
fetchData();

// Function to fetch data from a JSON API
async function fetchData() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/scripts/about.json');
    const data = await response.json();

    // Update card elements with data from JSON
    updateCardData(data);
  } catch (error) {
    console.error('Error in JSON', error);
  }
}

// Function to update card elements with data from JSON
function updateCardData(data) {
  console.log(data.cards[0].socials)
  // CARD #1
  const card1 = document.querySelector('main section:nth-child(1)');
  if (card1) {
    const avatarIcon = card1.querySelector('.avatarIcon');
    if (avatarIcon) {
      avatarIcon.src = data.cards[0].avatar;
    }
    card1.querySelector('.back h2').textContent = data.cards[0].name;
    card1.querySelector('.back .bio-El').textContent = data.cards[0].bio;
    if (data.cards[0].socials) {
      card1.querySelector('.back .discord').src = data.cards[0].socials.discord;
      card1.querySelector('.back .linkedin').src = data.cards[0].socials.linkedin;
      card1.querySelector('.back .github').src = data.cards[0].socials.github;
    }
  }

  // CARD #2
  const card2 = document.querySelector('main section:nth-child(2)');
  if (card2) {
    card2.querySelector('.back img').src = data.cards[1].avatar;
    card2.querySelector('.back h2').textContent = data.cards[1].title;
    card2.querySelector('.back .bio-El').textContent = data.cards[1].bio;
    if (data.cards[1].icons) {
      card2.querySelectorAll('.icon-El').forEach((icon, index) => {
        if (data.cards[1].icons[index]) {
          icon.src = data.cards[1].icons[index];
        }
      });
    }
  }

  // CARD #3
  const card3 = document.querySelector('main section:nth-child(3)');
  if (card3) {
    card3.querySelector('.back img').src = data.cards[2].avatar;
    card3.querySelector('.back h2').textContent = data.cards[2].title;
    card3.querySelector('.back .bio-El').textContent = data.cards[2].bio;
  }

  // CARD #4
  const card4 = document.querySelector('main section:nth-child(4)');
  if (card4) {
    card4.querySelector('.back img').src = data.cards[3].avatar;
    card4.querySelector('.back h2').textContent = data.cards[3].title;
  }

  console.log("Data successfully fetched and applied to cards.");
}

// Function to fetch random facts using an external API
function fetchRandomFacts(limit) {
  const apiKey = '+1sBxeKIKF0K2wbqzvra6w==MvpkXwEuvs6O7ZhO'; 
  fetch(`https://api.api-ninjas.com/v1/facts?limit=${limit}`, {
      method: 'GET',
      headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
      }
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      const factsElement = document.getElementById('factElement');
      factsElement.textContent = ""; 
      data.forEach(fact => {
          console.log(fact)
          const paragraph = document.createElement('p');
          paragraph.textContent = data[0].fact;
          factsElement.appendChild(paragraph);
      });
  })
  .catch(error => {
      console.error('Fetch error:', error);
  });
}
