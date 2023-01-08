'use strict';
//переменные
let variableBlockSum = document.getElementById('blockSum');
let variableBlockSubtr = document.getElementById('blockSubtr');
let variableBlockDivis = document.getElementById('blockDivis');
let variableBlockMult = document.getElementById('blockMult');
//функции для открытия и закрытия окошка с формами 
function showSumBlock() {
    variableBlockSum.style.display = 'flex';
    variableBlockSubtr.style.display = 'none';
    variableBlockDivis.style.display = 'none';
    variableBlockMult.style.display = 'none';
}
function showSubtrBlock() {
    variableBlockSum.style.display = 'none';
    variableBlockSubtr.style.display = 'flex';
    variableBlockDivis.style.display = 'none';
    variableBlockMult.style.display = 'none';
}
function showDivisionBlock() {
    variableBlockSum.style.display = 'none';
    variableBlockSubtr.style.display = 'none';
    variableBlockDivis.style.display = 'flex';
    variableBlockMult.style.display = 'none';
}
function showMultBlock() {
    variableBlockSum.style.display = 'none';
    variableBlockSubtr.style.display = 'none';
    variableBlockDivis.style.display = 'none';
    variableBlockMult.style.display = 'flex';
}

//сам калькулятор
const btnSum = document.getElementById('btnSum');
const btnSubtr = document.getElementById('btnSubtr');
const btnDivis = document.getElementById('btnDivis');
const btnMult = document.getElementById('btnMult');

btnSum.addEventListener('click', function() {
    let a = document.getElementById('input1sum');
    let b = document.getElementById('input2sum');
    const resultNumberSum = Calculator.sum(a, b);
})
btnSubtr.addEventListener('click', function() {
    let a = document.getElementById('input1subtr');
    let b = document.getElementById('input2subtr');
    const resultNumberSubtr = Calculator.subtr(a, b);
})
btnDivis.addEventListener('click', function() {
    let a = document.getElementById('input1divis');
    let b = document.getElementById('input2divis');
    const resultNumberDivis = Calculator.divis(a, b);
})
btnMult.addEventListener('click', function () {
    let a = document.getElementById('input1mult');
    let b = document.getElementById('input2mult');
    const resultNumberMult = Calculator.mult(a, b);
})
class Calculator {
    static sum(a, b) {
        let result = +a.value + +b.value;
        document.getElementById('divSumResult').innerHTML = result;
    }
    static subtr(a, b) {
        let result = +a.value - +b.value;
        document.getElementById('divSubtrResult').innerHTML = result;
    }
    static divis(a, b) {
        if (+b.value == 0) {
            document.getElementById('divDivisResult').innerHTML = 'На 0 делить нельзя!';
            } else {
            let result = +a.value / +b.value;
            document.getElementById('divDivisResult').innerHTML = result;
            }
    }
    static mult(a, b) {
        let result = +a.value * +b.value;
        document.getElementById('divMultResult').innerHTML = result;
    }
}