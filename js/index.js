'use strict'

let num = null;
let secNum = null;
let result = null;


function mainFunction(callback) {
    num = +prompt('Введите число');
    secNum = +prompt('Введите еще одно число');
    alert(`Первое число- ${num} \n Второе число- ${secNum}`);
    return callback(num,secNum);
}


function pow(num,secNum) {
    result = Math.pow(num,secNum);
    return alert(`${num} ** ${secNum} = ${result}`);
}

function division(num,secNum) {
    result = num / secNum;
    return alert(`${num} / ${secNum} = ${result}`);
}
function multiply(num,secNum) {
    result = num * secNum;
    return alert(`${num} * ${secNum} = ${result}`);
}
function modulo(num,secNum) {
    result = num % secNum;
    return alert(`${num} % ${secNum} = ${result}`);
}

mainFunction(pow);
mainFunction(division);
mainFunction(multiply);
mainFunction(modulo);

