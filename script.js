// List of participants and categories
const participants = [
  { name: 'Robert', category: 'Chocolate', image: 'assets/chocolate.png' },
  { name: 'Jeff', category: 'Beverages Cold', image: 'assets/beverages_cold.png' },
  { name: 'Barb', category: 'Peanut Butter (spreads)', image: 'assets/peanut_butter.png' },
  { name: 'Katherine', category: 'Cheese', image: 'assets/cheese.png' },
  { name: 'Chris', category: 'Condiments', image: 'assets/condiments.png' },
  { name: 'Sue', category: 'Beverages Hot', image: 'assets/beverages_hot.png' },
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
  
  if (participant) {
    categoryName.textContent = participant.category;
    resultDiv.classList.remove('hidden');
  } else {
    categoryName.textContent = 'Error: Participant not found!';
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
