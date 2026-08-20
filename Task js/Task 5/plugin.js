const number = document.getElementById("number");
const root = document.getElementById("root");

const button = document.getElementById("calculate");
const result = document.getElementById("result");

button.onclick = function(){

    if(number.value == "" || root.value == ""){
        result.innerHTML = "Please enter all values";
        return;
    }

    let x = number.value * 1;
    let n = root.value * 1;

    if(n <= 0){
        result.innerHTML = "Root must be greater than 0";
        return;
    }

    let answer = x ** (1 / n);

    result.innerHTML = "Result = " + answer;
}