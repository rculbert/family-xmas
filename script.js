// List of participants and categories
const participants = [
  { name: 'Alice', category: 'Books' },
  { name: 'Bob', category: 'Toys' },
  { name: 'Charlie', category: 'Food' },
  { name: 'David', category: 'Clothing' },
  { name: 'Eve', category: 'Tech' },
  { name: 'Frank', category: 'Sports' },
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
