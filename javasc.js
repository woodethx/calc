let firstOp = "";
let secondOp = "";
let opSign = "";
let operators = ["x","+","-","/"]
const buttons = document.querySelectorAll("#topButtons > button");
const display = document.querySelector("#inner");
const clear = document.querySelector("#clear");
const enter = document.querySelector("#enter");

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function operate(a,b,c){
    first = parseFloat(a);
    second = parseFloat(c);
    if(b == "/" && c == "0") return "Nice Try :)"
    switch(b){
        case "+":
            return add(first,second);
        case "-":
            return subtract(first,second);
        case "x":
            return multiply(first,second);
        case "/":
            return divide(first, second);
    }
}

let firstNum = "";
let secondNum = "";
let operator = "";


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(operator != "" && operators.includes(button.textContent) && secondNum == "") return;
        if(operator != "" && operators.includes(button.textContent) && secondNum != ""){
            let result = String(Math.round(operate(firstNum,operator,secondNum)*100)/100);
            display.textContent = result;
            firstNum=result;
            secondNum="";
            operator="";
        }
        if(firstNum == "" && operators.includes(button.textContent)) return;
        if(operator == "" && operators.includes(button.textContent)) operator = button.textContent;
        if(operator == "") firstNum+=button.textContent;
        if(operator != "" && !operators.includes(button.textContent)) secondNum+=button.textContent;
        display.textContent += button.textContent;
        console.log(firstNum+" "+operator+" "+secondNum);
    })
});
clear.addEventListener("click", () =>{
    display.textContent = "";
    firstNum = "";
    secondNum = "";
    operator = "";
});
enter.addEventListener("click", () => {
    if(firstNum == "" || operator == "" || secondNum == "") return;
    let result = String(Math.round(operate(firstNum,operator,secondNum)*100)/100);
    display.textContent = result;
    firstNum=result;
    secondNum="";
    operator="";
});