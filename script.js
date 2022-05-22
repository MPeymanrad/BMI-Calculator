const $ = document;
const weightInput = $.getElementById("weight");
const heightInput = $.getElementById("height");
const resultPara = $.getElementById("result");
const statusPara = $.getElementById("status");

const UNDERWEIGHT_COLOR = "#FFC300"
const NORMAL_COLOR = "#9EDE73"
const OVERWEIGHT_COLOR = "#FF5403"
const OBESE_COLOR = "#F90716"

let BMINUmber;
function calculateBMI() {
  let weight = +weightInput.value;
  let height = +heightInput.value / 100;
  if (weight && height) {
    BMINUmber = (weight / height ** 2).toFixed(2);
    resultPara.textContent = BMINUmber;
} else {
    resultPara.textContent = "";
    statusPara.innerHTML = ''
    return;
}
setStatus()
}
function setStatus() {
    if (BMINUmber < 18.5) {
        statusPara.style.color = UNDERWEIGHT_COLOR
        statusPara.textContent = 'UnderWeight'
    } else if (30 <= BMINUmber) {
        statusPara.style.color = OBESE_COLOR
        statusPara.textContent = 'Obese'
    } else if (25 <=BMINUmber && BMINUmber <=29.9) {
        statusPara.style.color = OVERWEIGHT_COLOR
        statusPara.textContent = 'OverWeight'
    } else if ( 18.5 <=BMINUmber && BMINUmber <=24.9) {
        statusPara.style.color = NORMAL_COLOR
        statusPara.textContent = 'Normal'
    }
}
weightInput.addEventListener("change", calculateBMI);
heightInput.addEventListener("change", calculateBMI);
weightInput.addEventListener("keyup", calculateBMI);
heightInput.addEventListener("keyup", calculateBMI);
