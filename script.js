// List of participants and categories
const participants = [
  { name: 'Barb', category: 'Snacks', description:'Chips, candy, nuts, trail mix', image: 'assets/fall-snack-mix.jpg' },
  { name: 'Katherine', category: 'Hot Drinks', description:'Hot chocolate, coffee, tea', image: 'assets/Hot-drinks-2025.jpg' },
  { name: 'Robert', category: 'Sauces', description:'Hot sauce, condiments, mustard, chocolate sauce', image: 'assets/Sauces-2025.jpeg' },
  { name: 'Jeff', category: 'Cold Drinks', description:'Pop, beer, wine', image: 'assets/Coldrinks-2025.webp' },
  { name: 'Sue', category: 'Spreads', description:'Jam, peanut butter, cinnamon toast spread', image: 'assets/spreads-2025.webp' },
  { name: 'Chris', category: 'Cookies / Bakery Items', description:'Could bake your own or buy', image: 'assets/Cookies-2025.jpg' },
];
// Reveal button logic
document.getElementById('reveal-button').addEventListener('click', () => {
  // Get the query parameter for the participant (e.g., ?name=Alice)
  const urlParams = new URLSearchParams(window.location.search);
  const participantName = urlParams.get('name');

  // Find the participant
  const participant = participants.find(p => p.name === participantName);

  // Display their category or an error if not found
  const resultDiv = document.getElementById('result');
  const categoryName = document.getElementById('category-name');
  const categoryDescription = document.getElementById('category-description');
  const categoryImage = document.getElementById('category-image');
  
  if (participant) {
    categoryName.textContent = participant.category;
    categoryDescription.textContent = participant.description;
    categoryImage.src = participant.image;  // Use the image directly from the participant object
    categoryImage.alt = `${participant.category} Image`;
    resultDiv.classList.remove('hidden');
  } else {
    categoryName.textContent = 'Error: Participant not found!';
    categoryDescription.textContent = '';
    categoryImage.src = ''; 
    resultDiv.classList.remove('hidden');
  }
});

const audio = document.getElementById("christmasAudio");
document.getElementById("reveal-button").addEventListener("click", () => {
  // Start playback after user interaction
  if (audio.paused) {
    audio.play().catch(err => console.error("Audio playback error:", err));
  }
});
