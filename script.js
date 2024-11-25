// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.

// Function to apply the preferences if they exist in localStorage
function applyPreferences() {
    // Retrieve the stored user name from localStorage
    const userName = localStorage.getItem('userName');
    // Retrieve the stored background color from localStorage
    const backgroundColor = localStorage.getItem('backgroundColor');
    // Retrieve the stored foreground (text) color from localStorage
    const foregroundColor = localStorage.getItem('foregroundColor');
  
    // Select the greeting element in the DOM
    const greetingElement = document.getElementById('greeting');
    // If a user name is stored, update the greeting text
    if (userName) {
      greetingElement.textContent = `Welcome back, ${userName}!`;
    } else {
      // If no user name is stored, clear the greeting text
      greetingElement.textContent = '';
    }
  
    // If a background color is stored, apply it to the body
    if (backgroundColor) {
      document.body.style.backgroundColor = backgroundColor;
    }
    // If a foreground color is stored, apply it to the body
    if (foregroundColor) {
      document.body.style.color = foregroundColor;
    }
}
  
// Add an event listener for the form submission
document.getElementById('preferences-form').addEventListener('submit', function (event) {
    // Prevent the default form submission behavior (e.g., page reload)
    event.preventDefault();
  
    // Get the value entered in the name field
    const userName = document.getElementById('name').value;
    // Get the value chosen in the background color picker
    const backgroundColor = document.getElementById('background-color').value;
    // Get the value chosen in the foreground color picker
    const foregroundColor = document.getElementById('foreground-color').value;
  
    // Store the user's name in localStorage
    localStorage.setItem('userName', userName);
    // Store the selected background color in localStorage
    localStorage.setItem('backgroundColor', backgroundColor);
    // Store the selected foreground color in localStorage
    localStorage.setItem('foregroundColor', foregroundColor);
  
    // Notify the user that their preferences have been saved
    alert('Your preferences have been saved!');
  
    // Immediately apply the preferences after saving them
    applyPreferences();
});
  
// Add an event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', applyPreferences);
// This ensures the preferences are applied as soon as the page loads
