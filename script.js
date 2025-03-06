// Get the DOM elements and store them in variables
const square = document.getElementById('square');
const countdownElement = document.getElementById('countdown');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const lightModeToggle = document.getElementById('light-mode-toggle');

// Boolean flags to track the state
let colorSet = false;
let timerRunning = false;
let countdownInterval;

// Object mapping keys to background image URLs
const backgroundImages = {
    'v': './images/vir_background.png',
    'l': './images/leo_background.png',
    'b': './images/bovis_background.png',
    'a': './images/aquila_background.png'
};

// Function to start a countdown from 8 seconds
function startCountdown() {
    if (timerRunning) {
        return;
    }
    timerRunning = true;
    let seconds = 8;
    
    // Set the initial countdown value before displaying the element
    countdownElement.innerText = seconds;
    countdownElement.style.display = 'block';
    
    countdownInterval = setInterval(() => {
        seconds--;
        
        if (seconds < 0) {
            clearInterval(countdownInterval);
            resetSquare();
            timerRunning = false;
        } else {
            countdownElement.innerText = seconds;
        }
    }, 1000);
}

// Function to reset the square's appearance and hide the countdown
function resetSquare() {
    square.style.backgroundImage = '';
    square.classList.remove('big');
    square.classList.remove('clickable');
    countdownElement.style.display = 'none';
    countdownElement.innerText = '';
    colorSet = false;
    timerRunning = false;
    clearInterval(countdownInterval);
    animateDarkModeButtonReset();
}

// Function to reset the dark mode button animation by setting its margin to 0
function animateDarkModeButtonReset() {
    darkModeToggle.style.marginLeft = '0';
}

// Event listener for keydown events on the body element
document.body.addEventListener('keydown', function(e) {
    if (!colorSet) {
        const pressedKey = e.key.toLowerCase();
        if (backgroundImages.hasOwnProperty(pressedKey)) {
            square.style.backgroundImage = `url('${backgroundImages[pressedKey]}')`;
            square.classList.add('big');
            square.classList.add('clickable');
            colorSet = true;
            startCountdown();
        }
    } else if (e.key === '⏧') {
        resetSquare();
    }
});

// Event listener for clicking the square element
square.addEventListener('click', function() {
    if (colorSet) {
        resetSquare();
    }
});

// Set the display of the toggle buttons based on whether dark mode is active
if (document.body.classList.contains('dark-mode')) {
    lightModeToggle.style.display = 'inline-block';
} else {
    darkModeToggle.style.display = 'inline-block';
}

// Event listeners for clicking the dark mode and light mode toggle buttons
darkModeToggle.addEventListener('click', function() {
    document.body.classList.add('dark-mode');
    darkModeToggle.style.display = 'none';
    lightModeToggle.style.display = 'inline-block';
});

lightModeToggle.addEventListener('click', function() {
    document.body.classList.remove('dark-mode');
    lightModeToggle.style.display = 'none';
    darkModeToggle.style.display = 'inline-block';
});
