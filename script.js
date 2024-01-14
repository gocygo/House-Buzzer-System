// Get references to elements
var square = document.getElementById('square');
var resetButton = document.getElementById('reset');
var colorSet = false;

// Listen for keydown events on the body
document.body.onkeydown = function(e) {
    if (!colorSet) {
      // Change square image and size on 'v (vir)', 'l (leo)', 'b (bovis)', or 'a (aquila)' key press
      if (e.key == 'v') {
        square.style.backgroundImage = "url('./images/vir_background.png')";
        square.classList.add('big'); // Make the square big
        colorSet = true;
    } else if (e.key == 'l') {
        square.style.backgroundImage = "url('./images/leo_background.png')";
        square.classList.add('big'); // Make the square big
        colorSet = true;
    } else if (e.key == 'b') {
        square.style.backgroundImage = "url('./images/bovis_background.png')";
        square.classList.add('big'); // Make the square big
        colorSet = true;
    } else if (e.key == 'a') {
        square.style.backgroundImage = "url('./images/aquila_background.png')";
        square.classList.add('big'); // Make the square big
        colorSet = true;
        }
    }
};

// Reset square image and size on button click
resetButton.onclick = function() {
    square.style.backgroundImage = '';
    square.classList.remove('big'); // Make the square normal size
    colorSet = false;
};


// Get references to dark mode and light mode toggle buttons
var darkModeToggle = document.getElementById('dark-mode-toggle');
var lightModeToggle = document.getElementById('light-mode-toggle');

// Check if the body has the 'dark-mode' class when the page loads
if (document.body.classList.contains('dark-mode')) {
    lightModeToggle.style.display = 'inline-block';
} else {
    darkModeToggle.style.display = 'inline-block';
}

// Listen for click events on the dark mode toggle
darkModeToggle.onclick = function() {
    // Apply dark mode styles
    document.body.classList.add('dark-mode');
    darkModeToggle.style.display = 'none';
    lightModeToggle.style.display = 'inline-block';
};

// Listen for click events on the light mode toggle
lightModeToggle.onclick = function() {
    // Remove dark mode styles if you're weird
    document.body.classList.remove('dark-mode');
    lightModeToggle.style.display = 'none';
    darkModeToggle.style.display = 'inline-block';
};
