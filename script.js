const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const resultContainer = document.getElementById('resultContainer');
const kittyGif = document.getElementById('kittyGif');

// When Yes is clicked
yesButton.addEventListener('click', () => {
    // Show the result container
    resultContainer.classList.remove('hidden');
    
    // Hide the buttons
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
});

// Make the No button run away from cursor
noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// If somehow they manage to click No
noButton.addEventListener('click', () => {
    alert('Sorry, that button is just for decoration 😉');
}); 