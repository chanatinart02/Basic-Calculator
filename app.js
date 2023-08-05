const buttons = document.querySelectorAll("button"); // Select all button elements

const display = document.getElementById("result"); // Get the display element where the result will be shown

// Loop through each button and add a click event listener
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    // Get the text content of the clicked button
    const buttonValue = buttons[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "DEL") {
      removeNumber();
    } else if (buttonValue === "x") {
      // Handle multiplication
      appendValue("*"); // Replace "x" with "*"
    } else if (buttonValue === "÷") {
      // Handle division
      appendValue("/"); // Replace "÷" with "/"
    } else {
      // Call function to append the clicked value to the display
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  display.value = "";
}

//calculate and display the result using the eval function
function calculateResult() {
  display.value = eval(display.value);
}

function removeNumber() {
  display.value = display.value.slice(0, -1); // Remove the last character from the display
}

function appendValue(buttonValue) {
  display.value += buttonValue; // Append the button value to the display
}
