// Open the popup
document.getElementById('newsletter-button').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'flex';
});

// Close the popup
document.getElementById('close-popup').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none';
});

// Close the popup when clicking outside it
document.addEventListener('click', (e) => {
  const popup = document.getElementById('popup');
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// Close the popup when pressing the Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('popup').style.display = 'none';
  }
});
