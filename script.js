document.getElementById('newsletter-button').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('success-message').textContent = 
        "Congratulations! You just started your English learning journey. I'll see you in your inbox soon.";
});
