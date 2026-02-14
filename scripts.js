// Generate floating hearts
const heartsContainer = document.querySelector('.hearts-container');
const heartCount = window.innerWidth < 768 ? 10 : 20; // Fewer hearts on mobile

for (let i = 0; i < heartCount; i++) {
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
const letterContainer = document.querySelector('.letter');

// Function to move "No" button to random position within the letter area
function moveNoButton() {
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;
    
    // Get letter container boundaries
    const letterRect = letterContainer.getBoundingClientRect();
    
    // Create a safe zone within the letter (with padding from edges)
    const padding = 30;
    
    // Calculate safe boundaries within the letter
    const minX = letterRect.left + padding;
    const maxX = letterRect.right - buttonWidth - padding;
    const minY = letterRect.top + padding + 80; // Extra space from top for title
    const maxY = letterRect.bottom - buttonHeight - padding;
    
    // Ensure we have valid ranges
    const safeMaxX = Math.max(minX, maxX);
    const safeMaxY = Math.max(minY, maxY);
    
    // Generate random position within safe boundaries
    const randomX = Math.random() * (safeMaxX - minX) + minX;
    const randomY = Math.random() * (safeMaxY - minY) + minY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.3s ease';
}

// Make "No" button run away on hover (desktop)
noBtn.addEventListener('mouseenter', moveNoButton);

// For mobile: move button on touch start
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Handle "Yes" click
yesBtn.addEventListener('click', () => {
    // Generate sparkles
    const sparklesContainer = document.getElementById('sparkles');
    const sparkleCount = window.innerWidth < 768 ? 30 : 50; // Fewer sparkles on mobile
    
    for (let i = 0; i < sparkleCount; i++) {
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
    moveNoButton();
});

// Handle window resize - reposition button if it goes out of bounds
window.addEventListener('resize', () => {
    if (noBtn.style.position === 'fixed') {
        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;
        const currentLeft = parseInt(noBtn.style.left);
        const currentTop = parseInt(noBtn.style.top);
        
        // Check if button is out of bounds
        if (currentLeft + buttonWidth > window.innerWidth || 
            currentTop + buttonHeight > window.innerHeight) {
            moveNoButton();
        }
    }
});