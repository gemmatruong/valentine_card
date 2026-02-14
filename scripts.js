// Generate floating hearts
const heartsContainer = document.querySelector('.hearts-container');
for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💗';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 8 + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heartsContainer.appendChild(heart);
}

// Button interactions
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const reveal = document.getElementById('reveal');

// Make "No" button run away
noBtn.addEventListener('mouseenter', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth - 100;
    const maxY = window.innerHeight - noBtn.offsetHeight - 100;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.3s ease';
});

// Handle "Yes" click
yesBtn.addEventListener('click', () => {
    // Generate sparkles
    const sparklesContainer = document.getElementById('sparkles');
    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';

        const sparkleTypes = ['🌹', '🍁', '🍌', '🌸'];
        sparkle.textContent = sparkleTypes[Math.floor(Math.random() * sparkleTypes.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparklesContainer.appendChild(sparkle);
    }
    
    reveal.classList.add('active');
});

// Prevent "No" button from being clicked (extra security!)
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const randomX = Math.random() * (window.innerWidth - 200);
    const randomY = Math.random() * (window.innerHeight - 200);
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});