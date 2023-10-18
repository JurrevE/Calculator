//functions for basic arithmatic used in the calculator.
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
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
        }
    }
    let firstnumber = [];
    let secondnumber = []
    let operation = "";
    let isOperatorPressed = false;
   
const screennumbers = document.querySelectorAll('.digits');
screennumbers.forEach(digits => {
    digits.addEventListener('click', (e) => {
        document.querySelector(".outputline").insertAdjacentHTML("beforeend", e.target.value);
        if(isOperatorPressed === true) {
        let clickedNumber = e.target.value;
        secondnumber.push(clickedNumber)
        }
        else {
            let clickedNumber = e.target.value;
            firstnumber.push(clickedNumber);
        }
     })
});

const operationsbtn = document.querySelectorAll(".operations");
 operationsbtn.forEach(operations => {
    operations.addEventListener("click", (e) => {
        document.querySelector(".outputline").textContent = ""
         operation = e.target.value;
         console.log(operation);
         isOperatorPressed = true;
     })
})

const enterbtn = document.getElementById("enter")
enterbtn.addEventListener("click", function(){
    const num1 = firstnumber.join("");
    const num2 = secondnumber.join("");

    console.log(`nummer 1 ${num1}, nummer 2 ${num2}`);

    document.querySelector(".outputline").textContent = operate(operation,num1,num2);
})

const clearbtn = document.getElementById("clear")
clearbtn.addEventListener("click", function(){
    document.querySelector(".outputline").textContent = ""
    operation = ""
    secondnumber = [];
    firstnumber = [];
    isOperatorPressed = false;
    // while(firstnumber.length>0){
    //     firstnumber.pop();}
    // while(secondnumber.length>0){
    //     secondnumber.pop();}

    //meowmeow x2
})



