document.addEventListener("DOMContentLoaded", function () {
    const resultInput = document.getElementById("result");
    const buttons = document.getElementById("buttons");
  
    let currentValue = "";
    let operator = "";
    let previousValue = "";
  
    function updateResult() {
      resultInput.value = currentValue;
    }
  
    function clearResult() {
      currentValue = "";
      operator = "";
      previousValue = "";
      updateResult();
    }
  
    buttons.addEventListener("click", function (event) {
      if (event.target.classList.contains("number")) {
        currentValue += event.target.textContent;
        updateResult();
      } else if (event.target.classList.contains("operator")) {
        if (currentValue) {
          if (previousValue) {
            const result = calculateResult();
            currentValue = result.toString();
            previousValue = "";
          }
          operator = event.target.textContent;
          previousValue = currentValue;
          currentValue = "";
        }
      } else if (event.target.id === "clear") {
        clearResult();
      } else if (event.target.id === "equals") {
        if (previousValue && currentValue) {
          currentValue = calculateResult().toString();
          previousValue = "";
          operator = "";
        }
      }
      updateResult();
    });
  
    function calculateResult() {
      const num1 = parseFloat(previousValue);
      const num2 = parseFloat(currentValue);
      switch (operator) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
          return num1 * num2;
        case "/":
          if (num2 === 0) {
            return "Error: Division by zero";
          }
          return num1 / num2;
        default:
          return currentValue;
      }
    }
  });
  