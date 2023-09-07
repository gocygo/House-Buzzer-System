# House Buzzer System

Welcome to the House Buzzer System README! 🏠🔔

This is a detailed walkthrough of a buzzer system, similar to the one used in quiz games. The code provided includes two main functionalities:

1. **Changing the background image**: Different images can be chosen by pressing keys 'v', 'l', 'b', or 'a'. Each key press changes the background image of a square defined on the webpage. For instance, 'v' links to an image for option "Vir", 'l' for "Leo", 'b' for "Bovis", and 'a' for "Aquila". The images are then set as the background for the div element with the id `square`. Once a background image is set, no other images can replace it until the system is reset. 
2. **Switching between dark and light modes**: Two icons at the bottom of the page (represented by the moon and sun icons) allow the user to toggle between light and dark modes.

## Detailed Code Explanation

### HTML Structure

The HTML structure comprises a `div` container that includes another `div` for the square, a button for resetting the image, and two buttons for toggling between light and dark modes. 

At the bottom of the page, there's another `div` for credits.

```html
<div id="container">
    ...
    <div id="credit">Made by: [YourUsername]</div>
</div>
```

### CSS: Styling the Elements

The CSS section offers styling for all HTML elements and unique dark mode styles. For instance, in dark mode, the background color of the body changes to `#2c3e50` and the text color to `#ecf0f1`. The code includes transition animations, hover effects, and other aspects to make the interaction smoother and aesthetically pleasing.

### JavaScript: Enabling Interactivity

The JavaScript section detects keydown events and button click events. 

- Keydown events: Upon pressing 'v', 'l', 'b', or 'a', the corresponding image is set as the background of the square. If any other key is pressed, no changes occur. Notably, a boolean (`colorSet`) prevents multiple changes unless the system is reset. 

- Reset functionality: The reset button clears the current background image of the square and allows another keydown event to change it. It's also designed to trigger reset on pressing 'Enter' or 'Space'. However, there seems to be a minor coding mistake where this has been included within the button onclick - this should be separated out into a keydown event listener.

- Dark / Light Mode Toggle: Clicking on the sun or moon icon triggers toggling between light and dark modes. In the dark mode, the sun icon shows for switching back and vice versa.

Please note: You can replace the links to the background images with any images of your choice and adapt the functionalities for your unique use case. Following this model, you can easily extend it to fit the user interaction you require.
