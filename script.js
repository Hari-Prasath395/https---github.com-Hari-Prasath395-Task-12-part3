const apiUrl = 'https://cat-fact.herokuapp.com/facts';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('card-container');
    data.forEach(cat => {
      const card = document.createElement('div');
      card.classList.add('card');
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = cat.text;
      cardBody.appendChild(cardText);
      card.appendChild(cardBody);
      cardContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching cat facts:', error);
  });


