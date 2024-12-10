document.getElementById('newsletter-button').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('success-message').textContent = 
        "Congratulations! You just started your English learning journey. I'll see you in your inbox soon.";
});

document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});

document.addEventListener('click', (e) => {
    const popup = document.getElementById('popup');
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('popup').style.display = 'none';
    }
});
