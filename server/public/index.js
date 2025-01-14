function add(first, second) {
    return first + second;
};

function subtract(first, second) {
    return first - second;
};

function multiply(first, second) {
    return first * second;
};

function divide(first, second) {
    return first / second;
};

function operate(operator, first, second) {
    let result = 0;
    switch (operator) {
        case "+":
            result = add(first, second);
        case "-":
            result = subtract(first, second);
        case "*":
            result = multiply(first, second);
        case "/":
            result = divide(first, second);
        default:
            result = 0;
    };
    return result;
};

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
console.log(display);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
    });
});