"use strict";

// Функции
function showFirstMessage() {
    console.log('Hello World!');
}
showFirstMessage(); //выводит Hello World!


function showSecMessage(text) {
    console.log(text);
}
showSecMessage('Hello World!'); //выводит Hello World!


let num = 20;
function showThirdMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num)
}
showThirdMessage(num); //выводит 20 и 10


function calc(a, b) {
    return (a+b);
}
console.log(calc(4,3)); //выводит 7
console.log(calc(5,6)); //выводит 11
console.log(calc(10,6)); //выводит 16
 

function ret() {
    let num = 50;
    //
    return num
}
const anotherNum = ret();
console.log(anotherNum); //выводит 50


const logger = function() {
    console.log('Hello');
};
logger() //выводит Hello

const calcArrow = (a, b) => a + b;
console.log(calcArrow(1, 2)); //выводит 3

// Методы и свойства
const str = 'test';
const arr = [1, 2, 3];

console.log(str.length); //выводит 4
console.log(arr.length); //выводит 3

console.log(str[2]); //выводит s

console.log(str.toUpperCase()); //выводит TEST
console.log(str.toLowerCase()); //выводит test

let fruit = 'Some fruit';
console.log(fruit.indexOf('fruit')); //выводит 5 (индекс позиции)
console.log(fruit.indexOf('й')); //выводит -1 (отсутствие значения)

const logg = 'Hello world'
console.log(logg.slice(6,11)) // выводит world
console.log(logg.slice(6)) // выводит world
console.log(logg.substring(6, 11)) // выводит world
console.log(logg.substr(6, 5)) // выводит world

const num_2 = 12.2;
console.log(Math.round(num_2)); //выводит 12

const test_2 = '12.2px';
console.log(parseInt(test_2)); //выводит 12
console.log(parseFloat(test_2)); //выводит 12.2





