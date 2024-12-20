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

document.querySelector('.sendfox-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission
  const form = e.target;

  // Wait for SendFox form to complete its AJAX submission
  setTimeout(() => {
    // Check for any errors
    const responseText = form.querySelector('.sendfox-form-response').innerText;
    if (!responseText.includes('error')) {
      // Clear the form and show success message
      form.reset();
      alert('Thank you for subscribing! Check your inbox for confirmation.');
      document.getElementById('popup').style.display = 'none'; // Close popup
    }
  }, 2000); // Allow time for the form submission to complete
});
