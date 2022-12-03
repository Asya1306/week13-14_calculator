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
//функции для подсчета цифр - калькулятор
function sumCalc() {
    let a = document.getElementById('input1sum');
    let b = document.getElementById('input2sum');
    let result = +a.value + +b.value;
    document.getElementById('divSumResult').innerHTML = result;
}
function subtrCalc() {
    let a = document.getElementById('input1subtr');
    let b = document.getElementById('input2subtr');
    let result = +a.value - +b.value;
    document.getElementById('divSubtrResult').innerHTML = result;
}
function divisCalc() {
    let a = document.getElementById('input1divis');
    let b = document.getElementById('input2divis');
    if (+b.value == 0) {
        document.getElementById('divDivisResult').innerHTML = 'На 0 делить нельзя!';
    } else {
        let result = +a.value / +b.value;
        document.getElementById('divDivisResult').innerHTML = result;
    }
}
function multCalc() {
    let a = document.getElementById('input1mult');
    let b = document.getElementById('input2mult');
    let result = +a.value * +b.value;
    document.getElementById('divMultResult').innerHTML = result;
}