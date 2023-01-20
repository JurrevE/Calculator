//functions for 
function add(a, b){
    return parseFloat(a) + parseFloat(b);
}

function subtract(a,b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a,b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a,b) {
    if (b === 0) {
        return "cant do this for u boss"
    }
    else {
        return parseFloat(a) / parseFloat(b)
    }
}
//operate function
function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
           return add(num1,num2);
           break;
        case "-":
            return subtract(num1,num2);
            break;
        case "*":
            return multiply(num1,num2);
            break
        case "/":
            return divide(num1,num2);
            break;
        }
    }

//funtions to populate the screen with numbers when pressing number buttons.
// let changeNumber = function() {
//     document.querySelector(".outputline").innerHTML = "monkeballs";

// }
const btn = document.querySelector('.digits');
btn.addEventListener('click', (e) => {
    document.querySelector(".outputline").innerHTML = e.target.value;
}
);

// let numBtns = document.querySelectorAll(".digits");
// numBtns.forEach(function (i) {
//     i.addEventListener("click", changeNumber())

// }
// )


