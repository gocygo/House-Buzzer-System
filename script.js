// Get the DOM element representing the square
var square = document.getElementById('square');
// Boolean flag to track if the color has been set
var colorSet = false;

// Function to start a countdown from 12 seconds
function startCountdown() {
    if (timerRunning) { // If the timer is already running, do nothing
        return;
    }
    timerRunning = true; // Set the timerRunning flag to true

    let seconds = 12; // Set initial countdown seconds
    const countdownElement = document.getElementById('countdown'); // Get the countdown display element
    countdownElement.style.display = 'block'; // Make the countdown visible

    // Set an interval to update the countdown every second
    const countdownInterval = setInterval(() => {
        countdownElement.innerText = seconds; // Update the countdown display
        if (seconds === 0) { // If countdown reaches 0
            clearInterval(countdownInterval); // Stop the countdown
            resetSquare(); // Reset the square's appearance
            timerRunning = false; // Reset the timerRunning flag
        }
        seconds--; // Decrement the seconds
    }, 1000); // Interval set to 1000ms (1 second)
}

// Function to reset the square's appearance and hide the countdown
function resetSquare() {
    square.style.backgroundImage = ''; // Remove the background image from the square
    square.classList.remove('big'); // Remove the 'big' class from the square
    document.getElementById('countdown').style.display = 'none'; // Hide the countdown display
    document.getElementById('countdown').innerText = ''; // Clear the countdown text
    colorSet = false; // Reset the colorSet flag
    animateDarkModeButtonReset(); // Reset the dark mode button animation
}

// Function to reset the dark mode button animation by setting its margin to 0
function animateDarkModeButtonReset() {
    var darkModeToggle = document.getElementById('dark-mode-toggle'); // Get the dark mode toggle button
    darkModeToggle.style.marginLeft = '0'; // Reset the button's margin to 0
}

// Boolean flag to track if the timer is running
var timerRunning = false;

// Event listener for keydown events on the body element
document.body.onkeydown = function(e) {
   if (!colorSet) { // If no color has been set yet
       // Check which key was pressed and set the square's background image accordingly
       if (e.key == 'v') {
           square.style.backgroundImage = "url('./images/vir_background.png')";
           square.classList.add('big');
           colorSet = true;
           startCountdown(); // Start the countdown
       } else if (e.key == 'l') {
           square.style.backgroundImage = "url('./images/leo_background.png')";
           square.classList.add('big');
           colorSet = true;
           startCountdown(); // Start the countdown
       } else if (e.key == 'b') {
           square.style.backgroundImage = "url('./images/bovis_background.png')";
           square.classList.add('big');
           colorSet = true;
           startCountdown(); // Start the countdown
       } else if (e.key == 'a') {
           square.style.backgroundImage = "url('./images/aquila_background.png')";
           square.classList.add('big');
           colorSet = true;
           startCountdown(); // Start the countdown
       }
   } else if (e.key === '⏧') { // If the ⏧ key is pressed (beacuse if I remove this line it breaks and don't want to figure out how to fix it)
       resetSquare(); // Reset the square
   }
};

// Get the dark mode and light mode toggle buttons
var darkModeToggle = document.getElementById('dark-mode-toggle');
var lightModeToggle = document.getElementById('light-mode-toggle');

// Set the display of the toggle buttons based on whether dark mode is active
if (document.body.classList.contains('dark-mode')) {
    lightModeToggle.style.display = 'inline-block';
} else {
    darkModeToggle.style.display = 'inline-block';
}

// Event listener for clicking the dark mode toggle button
darkModeToggle.onclick = function() {
    document.body.classList.add('dark-mode'); // Activate dark mode
    darkModeToggle.style.display = 'none'; // Hide the dark mode toggle button
    lightModeToggle.style.display = 'inline-block'; // Show the light mode toggle button
};

// Event listener for clicking the light mode toggle button
lightModeToggle.onclick = function() {
    document.body.classList.remove('dark-mode'); // Deactivate dark mode
    lightModeToggle.style.display = 'none'; // Hide the light mode toggle button
    darkModeToggle.style.display = 'inline-block'; // Show the dark mode toggle button
};
