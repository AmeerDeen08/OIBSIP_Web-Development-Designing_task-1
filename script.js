const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");

let expression = "";
let answer = 0;

document.querySelectorAll(".buttons button").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "clear") {
      expression = "";
      resultDisplay.textContent = "0";
    } else if (value === "del") {
      expression = expression.slice(0, -1);
    } else if (value === "ans") {
      expression += answer.toString();
    } else if (value === "ENTER") {
      try {
        const evalResult = eval(expression);
        resultDisplay.textContent = evalResult;
        answer = evalResult;
      } catch {
        resultDisplay.textContent = "Error";
      }
    } else if (value === "+/-") {
      if (expression) {
        try {
          expression = (-1 * eval(expression)).toString();
        } catch {
          resultDisplay.textContent = "Error";
        }
      }
    } else if (value === "√") {
      try {
        expression = Math.sqrt(eval(expression)).toString();
      } catch {
        resultDisplay.textContent = "Error";
      }
    } else {
      expression += value;
    }

    expressionDisplay.textContent = expression;
  });
});
