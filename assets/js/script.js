'use strict';
function getSum() {
    const number1 = prompt('Введите первое слагаемое','');
    const number2 = prompt('Введите второе слагаемое','');
    alert(`Сумма: ${+number1 + +number2}`);
}
function getSubtr() {
    const number1 = prompt('Введите уменьшаемое','');
    const number2 = prompt('Введите вычитаемое','');
    alert(`Разность: ${+number1 - +number2}`);
}
function getDivision() {
    const number1 = prompt('Введите делимое','');
    const number2 = prompt('Введите делитель','');
    alert(`Частное: ${+number1 / +number2}`);
}
function getMult() {
    const number1 = prompt('Введите перовый множитель','');
    const number2 = prompt('Введите второй множитель','');
    alert(`Произведение: ${+number1 * +number2}`);
}