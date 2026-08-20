const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");

const button = document.getElementById("calculate");
const result = document.getElementById("result");

button.onclick = function(){

    if(num1.value == "" || num2.value == ""){
        result.innerHTML = "Please enter both numbers";
        return;
    }

    let x = num1.value * 1;
    let y = num2.value * 1;

    let op = operation.value;

    let answer;

    if(op == "+"){
        answer = x + y;
    }
    else if(op == "-"){
        answer = x - y;
    }
    else if(op == "*"){
        answer = x * y;
    }
    else if(op == "/"){

        if(y == 0){
            result.innerHTML = "Cannot divide by zero";
            return;
        }

        answer = x / y;
    }
    else if(op == "%"){
        answer = x % y;
    }

    result.innerHTML = "Result = " + answer;
}