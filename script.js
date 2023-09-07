// Get references to elements
var square = document.getElementById('square');
var resetButton = document.getElementById('reset');
var colorSet = false;

// Listen for keydown events on the body
document.body.onkeydown = function(e) {
    if (!colorSet) {
        // Change square image on 'v (vir)', 'l (leo)', 'b (bovis)', or 'a (aquila)' key press



//this is an okay house (vir)
        if (e.key == 'v') {
            square.style.backgroundImage = "url('https://web.archive.org/web/20230907220858if_/https://static.wixstatic.com/media/c71fac_e048ce6f1d204e7ba6a081dfe6dbe50e~mv2.png/v1/fill/w_331,h_309,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/vir_background.png')";
            colorSet = true;
//this is an okay house (leo)
        } else if (e.key == 'l') {
            square.style.backgroundImage = "url('http://web.archive.org/web/20230907221017if_/https://static.wixstatic.com/media/c71fac_9092f637ba2145adbd6fb646cd30904a~mv2.png/v1/fill/w_325,h_309,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/leo_background.png')";
            colorSet = true;
//this is the best house (bovis)
        } else if (e.key == 'b') {
            square.style.backgroundImage = "url('http://web.archive.org/web/20230907221057if_/https://static.wixstatic.com/media/c71fac_5507cc8ff4244a8dad77bb3eed54bb43~mv2.png/v1/fill/w_331,h_309,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bovis_background.png')";
            colorSet = true;
//this is an okay house (aquila)
        } else if (e.key == 'a') {
            square.style.backgroundImage = "url('http://web.archive.org/web/20230907221107if_/https://static.wixstatic.com/media/c71fac_e69868566e1d489c9608ed61769ee865~mv2.png/v1/fill/w_331,h_309,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aquila_background.png')";
            colorSet = true;
        }
    }
};

// Reset square image on button click, or you can use key presses - 'Enter' or 'Space' 
resetButton.onclick = function() {
    square.style.backgroundImage = '';
    colorSet = false;
    if (e.key == 'Enter' || e.key == ' ') {
        square.style.backgroundImage = '';
        colorSet = false;
    }
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