// Functon Declare
function startFan(){
    console.log('walk towards the switch');
    console.log('press the switch');
}
startFan();

console.log('eat breakfast');
console.log('take rest');
console.log('take a shower');
startFan();

var country = "Bangladesh";
var city = "Chittagong";
var location = "shantirhat";
console.log(country);
console.log(city);
console.log(location);
startFan();

// input parameter (kono kisu neo kaz korar jnno)
function bringSingara(taka){
    console.log('singara er jonno take dice' , taka);
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
// function output system
var money = 250;
var singara = bringSingara(money);// variable diye o function input man ta dite parbo
console.log('Ai nen singara', singara);

// boi price dile koy ta boi kinlam oita bahir kora jabe
function bringBook(taka){
    console.log("Boi kiner jonno tk nici", taka);
    var bookPrice = 200;
    var bookPriceQuantity = taka / bookPrice;
    return bookPriceQuantity;
}
// function call
var totalPrice = 1000;
var book = bringBook(totalPrice);
console.log("Boi kinlam", book);

//Multiple parameter
var firstNumber = 35;
var secondNumber = 47;
function addTwoNumbers(number1, number2) {
    // console.log(number1, number2);
    var total = number1 + number2;
    return total;
}
// function call
var result = addTwoNumbers(secondNumber, firstNumber);
console.log('result value:', result);

//Multiplication
function multiplyTwoNumbers(num1, num2){
    var result = num1 * num2;
    return result;
}
// function call
var total = multiplyTwoNumbers(secondNumber, firstNumber);
console.log('total after multiply:', total);

//Differcence
// variable opor declear kora ace
function differenceTwoNumbers(count1, count2){
    var result = count1 - count2;
    return result;
}
// function call
var result = differenceTwoNumbers(secondNumber, firstNumber);
console.log('Difference Number value:', result);

//Division
// variable opor declear kora ace
function divisionTwoNumbers(count1, count2){
    var totalAmount = count1 / count2;
    return totalAmount;
}
// function call
var totalAmount = divisionTwoNumbers(secondNumber, firstNumber);
console.log('Division Number value:', totalAmount);

//Reminder%
function getReminder(number1, number2){
    const totalReminder = number1 % number2;
    return totalReminder;
}
const firstReminder = 12;
const seconReminder = 2;
const totalReminder = getReminder(firstReminder, seconReminder);
console.log('Reminder Number value:', totalReminder);