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

function applyPreferences() {
    const userName = localStorage.getItem('userName');
    const backgroundColor = localStorage.getItem('backgroundColor');
    const foregroundColor = localStorage.getItem('foregroundColor');
  
    const greetingElement = document.getElementById('greeting');
    if (userName) {
      greetingElement.textContent = `Welcome back, ${userName}!`;
    } else {
      greetingElement.textContent = '';
    }
  
    if (backgroundColor) {
      document.body.style.backgroundColor = backgroundColor;
    }
    if (foregroundColor) {
      document.body.style.color = foregroundColor;
    }
  }
  
