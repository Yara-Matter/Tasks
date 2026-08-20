const number = document.getElementById("number");
const button = document.getElementById("check");
const result = document.getElementById("result");

button.onclick = function(){

    if(number.value == ""){
        result.innerHTML = "Please enter a number";
        return;
    }

    let x = number.value * 1;

    if(x % 2 == 0){
        result.innerHTML = "Even";
    }
    else{
        result.innerHTML = "Odd";
    }
}