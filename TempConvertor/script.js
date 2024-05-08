const temperature = document.getElementById("temperature");
const celciustofahrenheit = document.getElementById("celciustofahrenheit");
const fahrenheittocelcius = document.getElementById("fahrenheittocelcius");
const result = document.getElementById("result");
let temp;
function convert(){
    if(celciustofahrenheit.checked){
        temp = Number(temperature.value);
        temp = temp*(9/5) + 32;
        result.textContent = temp.toFixed(1) + "'F";
    }
    else if(fahrenheittocelcius.checked){
        temp  =Number(temperature.value);
        temp = (temp-32)*(5/9);
        result.textContent = temp.toFixed(1) + "'C";
    }
    else{
        result.textContent="select a unit";
    }
}