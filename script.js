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
const btn = document.querySelectorAll('.digits');
btn.forEach(digits => {
    digits.addEventListener('click', (e ) => {
        document.querySelector(".outputline").insertAdjacentHTML("beforeend", e.target.value);
        let firstinput = e.target.value
        console.log(firstinput)
    })
});




