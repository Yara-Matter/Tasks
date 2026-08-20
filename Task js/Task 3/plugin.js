const number = document.getElementById("number");
const button = document.getElementById("check");
const result = document.getElementById("result");

button.onclick = function(){

    if(number.value == ""){
        result.innerHTML = "Please enter a number";
        return;
    }

    let x = number.value * 1;

    if(x > 0){
        result.innerHTML = "Positive";
    }
    else if(x < 0){
        result.innerHTML = "Negative";
    }
    else{
        result.innerHTML = "Zero";
    }
}