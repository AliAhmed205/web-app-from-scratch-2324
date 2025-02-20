
<p align="center"><img width="80%" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/77ff6549-30d0-41b0-a684-2b34a7032b8e" alt="Logo"></p>
<p>Welcome to Deck of Ali, your personalized gateway to getting to know Ali better! Deck of Ali is a simple yet engaging web app that showcases four cards, each containing intriguing information about Ali. Whether you're curious about who Ali is, their skills, hobbies, or just want to discover some interesting facts, Deck of Ali has got you covered.</p>

<img width="50%" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/392ba802-0357-4ef7-9f80-2cd0ec60a60b">
<p>Get to Know Ali Better. Deck of Ali offers a unique opportunity to learn more about Ali in a fun and interactive way. With just a flip of a card, you can delve into Ali's background, skills, and interests.</p>

<img width="100%" alt="Scherm­afbeelding 2024-02-12 om 23 54 33" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/d2f41664-1b5f-4c17-9bef-849d5e63277f" alt="">

<p>The design journey of Deck of Ali began with conceptual sketches, which were then translated into digital mockups using Figma. These mockups not only visualize the layout and aesthetics of the web app but also include annotations indicating potential HTML elements such as images (img), paragraphs (p), and sections. For a detailed breakdown of each stage of the design process, including insights into decision-making, challenges faced, and lessons learned, please refer to my comprehensive design process document. This document provides an in-depth exploration of the journey from concept to realization, offering valuable insights for fellow designers and enthusiasts alike.</p>

<img width="30%" alt="deck-of-cards-1" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/60e99d09-ecdc-4a55-b1c8-d3508e23e6d3">
<img width="30%" alt="back-detail" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/7f879aef-7377-41cb-9056-15947c92feb2">
<img width="30%" alt="CSS-JS settings" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/d3106a26-e4e3-4bbe-86f7-888ad5960444">
<img width="30%" alt="front-details" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/3ab08cb0-a6d9-4f41-9557-23f469a4b594">
<img width="300px" height="200px" alt="Scherm­afbeelding 2024-02-13 om 00 12 35" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/b20cd607-cd22-4bc6-b3f0-0ecd667c083e">

<br>
<br>
<img width="70%" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/102a2538-17dd-4fae-b6ba-e39422d67d6a">
<p>The design of Deck of Ali is both visually appealing and user-friendly, making it enjoyable to explore and interact with. The consistent back of the cards adds a delightful element of surprise as you reveal new information with each flip.</p>
<p>
<img src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/4d4fd5f3-d9d0-437f-b032-1c2fd3a83fa7" alt="">
</p>

<br>
<img width="70%" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/2edde8fd-2914-48c0-b2c2-0d2c92b9436f">
<p>Most of the information presented on Deck of Ali is dynamically generated from a JSON file, making it easy to update and customize. This means you can easily apply this format to showcase your own data, making it a versatile tool for personal branding or sharing information about yourself.</p>

```JSON
{
    "cards": [
        {
            "name": "Ali Ahmed",
            "age": 23,
            "bio": "I'm Ali Ahmed, 23 years old. I'm from Egypt but was born and raised in the Netherlands. With a background in design, I'm now eager to delve more into the technical side.",
            "avatar": "https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/content/memoji.png",
            "socials": { 
               "discord": "https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/content/golden-discord.svg", 
               "github": "https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/content/golden-github.svg", 
               "linkedin":"https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/content/golden-linkedin.svg"
                        }
            },
         
         {
            "title": "Skills",
            "bio": "I'm quite proficient with these software tools. I often combine them while working, as they complement each other well.",
            "avatar": "https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/content/skills.png",
            "icons": ["https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/content/adobe_photoshop.svg", 
                     "https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/content/adobe_illustrator.svg", "https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/content/figma.svg", 
                     "https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/content/HTML_logo-01.svg", 
                     "https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/content/CSS-icon.svg", "https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/content/JS_logo.svg"]
         },
         {
            "title": "Hobbies",
            "bio": "You're probably familiar with the classic saying: 'Turn your hobby into your job.' I often immerse myself in HTML/CSS and enjoy crafting engaging websites.",
            "avatar": "https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/content/hobbies.png"
         },
         {
            "id": "4",
            "title": "Fun Facts",
            "avatar": "https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/content/feitjes.png"
         }


    ]
    
}
```
<br>
<br>
<img width="30%" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/b0fbd604-ff1a-40a5-b82c-569825a814a1" alt="">
<p>
<a href="#personalized-cards">Personalized Cards</a> - Each card reveals different aspects of Ali's personality and interests.</p>
<a href="#interactive-flipping">Interactive Flipping</a> - Simply click or tap on a card to flip and reveal the information.</p>
<a href="#dynamic-data-handling">Dynamic Data Handling</a> - The majority of the content is fetched from a JSON file, allowing for easy customization and updates.</p>
<a href="#api-integration">API Integration</a> - One of the cards showcases interesting facts fetched from an external API, adding a touch of novelty and intrigue.</p>
</p>

<img id="personalized-cards" width="50%" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/56d52b78-5112-43ba-8e3a-f5b129ad16ba" alt="">
<p>The HTML code presents a set of personalized cards featuring information about me. Each card includes dynamic content updated via JavaScript, such as unique avatar images, my name, biography, social media links, icons related to UI design and web development, My age is displayed alongside a diamond symbol, and a section for random facts fetched from an external API on the fourth card. The cards are structured within container sections, with both front and back sides that toggle visibility on click. The use of elements are supported by clear annonations to provide the reader of my code clearness, context and logic.</p>
<img width="925" alt="Scherm­afbeelding 2024-02-13 om 10 44 07" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/f6f209b3-ddee-4bcf-839c-63a2af45144a">


<img id="interactive-flipping" width="70%" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/6aad03a9-d618-47dd-b448-cfa52b55ada8" alt="">
<p>The code enables flipping articles/cards upon click events. It iterates through all the articles on the page, adding event listeners to each one. When an article is clicked, it toggles the "flip" class on the clicked article. Additionally, it ensures that only the clicked article's back content is displayed while others are hidden.

```javascript
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
```
<br>
<img width="20%" src="https://i.stack.imgur.com/pU4rt.gif" alt="">
</p>
<br>
<img id="dynamic-data-handling" width="80%" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/f9ff01f4-4536-4518-88da-dcf99eb32b59">
<p>The fetchData() function asynchronously fetches data from a JSON API endpoint (https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/scripts/about.json). Once the data is fetched successfully, it updates the content of each card element on the page based on the retrieved data. Each card represents different information about me, including my name, bio, socials, and avatar.
<br>

```javascript
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
```
</p>
<br>
<br>
<img id="api-integration" width="90%" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/e7d3fef9-3130-4034-9930-d91907e58670" alt="">
<p>The fetchRandomFacts() function fetches random facts from an external API (https://api.api-ninjas.com/v1/facts). It accepts a limit parameter to specify the number of facts to fetch. The retrieved facts are then displayed on the page within an element with the ID "factElement."</p>

```javascript
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
          console.log(fact);
          const paragraph = document.createElement('p');
          paragraph.textContent = data[0].fact;
          factsElement.appendChild(paragraph);
      });
  })
  .catch(error => {
      console.error('Fetch error:', error);
  });
}
```

<img width="50%" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/6edc3cb3-c1ab-47b2-9fe5-81ac4311ebf2" alt="">
<p>The code includes error handling for both fetching data from the JSON API and the external API. If there's an error in fetching data, appropriate error messages are logged to the console.</p>

<p>Overall, this code facilitates an interactive and dynamic user experience by flipping articles/cards, fetching and displaying data from JSON and external APIs, and handling errors effectively. It provides users with an engaging way to explore information about me and discover interesting facts.</p>


### 🃏 Technologies Used 🃏
<p>Deck of Ali is built using JavaScript, CSS, and HTML, ensuring compatibility across various browsers and devices while maintaining a seamless and responsive experience.</p>
<img width="50%" src="https://github.com/AliAhmed205/web-app-from-scratch-2324/assets/118130116/4ee4d9f8-955f-4149-a928-662bdce27f2d" alt="">

### Explore Deck of Ali today and discover the many facets of Ali's world!

