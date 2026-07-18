 const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");
  let currentInput = "";
  let resultDisplayed = false;

  function calculate() {
    try {
      currentInput = eval(currentInput).toString();
      display.textContent = currentInput;
      resultDisplayed = true;
    } catch {
      display.textContent = "Error";
      currentInput = "";
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const value = btn.textContent;

      if (value === "C") {
        currentInput = "";
        display.textContent = "0";
        resultDisplayed = false;
      } else if (value === "=") {
        calculate();
      } else {
        if (resultDisplayed && !isNaN(value)) {
          currentInput = "";
          resultDisplayed = false;
        }
        currentInput += value;
        display.textContent = currentInput;
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    const key = e.key;
    if (/[0-9+\-*/.]/.test(key)) {
      if (resultDisplayed && !isNaN(key)) {
        currentInput = "";
        resultDisplayed = false;
      }
      currentInput += key;
      display.textContent = currentInput;
    } else if (key === "Enter") {
      calculate();
    } else if (key === "Escape") {
      currentInput = "";
      display.textContent = "0";
      resultDisplayed = false;
    }
  });