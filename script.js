const $ = document;
const weightInput = $.getElementById('weight')
const heightInput = $.getElementById('height')
const resultPara = $.getElementById('result')
const statusPara = $.getElementById('status')

let BMINUmber;
function calculateBMI() {
    let weight = +weightInput.value;
    let height = +heightInput.value / 100;
    if (weight && height) {
        BMINUmber = weight / (height ** 2)
        resultPara.textContent = BMINUmber.toFixed(2)
    } else {
        resultPara.textContent = ''
    }
}

weightInput.addEventListener('change',calculateBMI)
heightInput.addEventListener('change',calculateBMI)
weightInput.addEventListener('keyup',calculateBMI)
heightInput.addEventListener('keyup',calculateBMI)