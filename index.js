var mainScreen = document.querySelector(".mainScreen");
var currentInput = "";
var previousInput = "";
var operator = null;
var actionPressed = false;

function appendTomainScreen(value) {
  if (["+", "-", "*", "/"].includes(value)) {
    if (actionPressed) {
      operator = value;
    } else {
      operator = value;
      previousInput = currentInput;
      currentInput = "";
      actionPressed = true;
    }
  } else {
    currentInput += value;
    actionPressed = false;
  }
  updateDisplay();
}

function clearmainScreen() {
  currentInput = "";
  operator = null;
  previousInput = "";
  updateDisplay();
}

function calculateResult() {
  if (actionPressed) return;
  var result;
  var prev = parseFloat(previousInput);
  var curr = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = "";
  updateDisplay();
}

function updateDisplay() {
  document.querySelector(".mainScreen").innerText =
    currentInput || previousInput || "0";
}
