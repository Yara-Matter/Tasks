const physics = document.getElementById("physics");
const chemistry = document.getElementById("chemistry");
const biology = document.getElementById("biology");
const mathematics = document.getElementById("mathematics");
const computer = document.getElementById("computer");

const button = document.getElementById("calculate");
const result = document.getElementById("result");

button.onclick = function(){

    let p = physics.value;
    let c = chemistry.value;
    let b = biology.value;
    let m = mathematics.value;
    let co = computer.value;

    if(p == "" || c == "" || b == "" || m == "" || co == ""){
        result.innerHTML = "Please enter all marks";
        return;
    }

    if(p < 0 || p > 50 ||
       c < 0 || c > 50 ||
       b < 0 || b > 50 ||
       m < 0 || m > 50 ||
       co < 0 || co > 50){

        result.innerHTML = "Each mark must be between 0 and 50";
        return;
    }

    let total = p*1 + c*1 + b*1 + m*1 + co*1;

    let percentage = total / 250 * 100;

    let grade;

    if(percentage >= 90){
        grade = "A";
    }
    else if(percentage >= 80){
        grade = "B";
    }
    else if(percentage >= 70){
        grade = "C";
    }
    else if(percentage >= 60){
        grade = "D";
    }
    else if(percentage >= 40){
        grade = "E";
    }
    else{
        grade = "F";
    }

    result.innerHTML =
        "Total = " + total +
        "<br>Percentage = " + percentage +
        "%<br>Grade = " + grade;
}