
const textBox = document.getElementById("textBox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const result = document.getElementById("result")

let temp = textBox.value;
temp=Number(temp)

function convert(){
    if(toFahrenheit.checked){
         result.textContent=`${(9.5 * temp)+32}`;
    }
    else if(toCelsius.checked){
        result.textContent=`${(temp-32)*0.56}`
    }
    else{
        result.textContent = "Select a unit"
    }
}