let display=document.getElementById('display')
let currentInput = 0;
function updateDisplay() {
  display.value = currentInput;
}
function clearDisplay(){
    currentInput = 0;
    updateDisplay();
}
function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === "" || currentInput === "-") currentInput = "0";
  updateDisplay();
}
function appendNumber(number) {
    if(currentInput=="0")
        currentInput=number;
    else 
        currentInput += number;
    updateDisplay();
}
function appendOperator(op) {
  const lastChar = currentInput.slice(-1);
  if ("+-*/%".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    currentInput += op;
  }
  updateDisplay();
}
function appendDot() {
  let parts = currentInput.split(/[\+\-\*\/%]/);
  let lastPart = parts.pop();
  if (!lastPart.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}
function calculate() {
  try {
    let result = Function("return " + currentInput)();
    if (result === Infinity || isNaN(result)) {
      currentInput = "Error";
    } else {
      currentInput = result.toString();
    }
  } catch (e) {
    currentInput = "Error";
  }
  updateDisplay();
}