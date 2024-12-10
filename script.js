document.getElementById('newsletter-button').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('confirmation-message').textContent = 
        "Congratulations! You just started your English learning journey. I'll see you in your inbox soon.";
});
