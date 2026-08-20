const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");

const button = document.getElementById("calculate");
const result = document.getElementById("result");

button.onclick = function(){

    let x = num1.value;
    let y = num2.value;
    let z = num3.value;

    if(x == "" || y == "" || z == ""){
        result.innerHTML = "Please enter all numbers";
        return;
    }

    x = x * 1;
    y = y * 1;
    z = z * 1;

    let max;
    let min;

    if(x >= y && x >= z){
        max = x;
    }
    else if(y >= x && y >= z){
        max = y;
    }
    else{
        max=z;
    }

    if(x <= y && x <= z){
        min = x;
    }
    else if(y <= x && y <= z){
        min = y;
    }
    else{
        min = z;
    }

    result.innerHTML =
        "Maximum = " + max +
        "<br>Minimum = " + min;
}