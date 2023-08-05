const buttons = document.querySelectorAll("button"); // Select all button elements

const display = document.getElementById("result"); // Get the display element where the result will be shown

// Attach a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => handleButtonClick(button.textContent));
});

// Attach a keydown event listener to the entire document
document.addEventListener("keydown", (event) => handleKeyDown(event.key));

function handleButtonClick(buttonValue) {
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
}

function handleKeyDown(key) {
  if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    removeNumber();
  } else if (key.match(/[0-9x÷]/)) {
    handleButtonClick(key);
  }
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
