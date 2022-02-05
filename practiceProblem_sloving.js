// Problem Sloving #1

// Problem sloveing : 3ta number take boru number ta kuje bahir korar program
var firstNumber = 30;
var secondNumber = 20;
var thirdNumber = 10;

if(firstNumber > secondNumber){
    if(firstNumber > thirdNumber){
        console.log('firstNumber');
    }
    else{
        console.log('thirdNumber');
    }
}
else{
    if(secondNumber > thirdNumber){
        console.log('secondNumber');
    }
    else{
        console.log('thirdNumber');
    }
}

// Problem Sloving #2
// Exam Result
var aliya = 95;
var daliya = 66;
var saliya = 80;
var maliya = 59;
var liliya = 47;
var jaliya = 77;

if(aliya <= 100){
    console.log("Aliya got A+");
}
else{
    console.log("Auto pass");
}

if(daliya >= 60 && daliya <= 70){
    console.log("Daliya got C")
}
else{
    console.log("Auto pass");
}

if(saliya >= 80 && saliya <= 90){
    console.log("Saliya got A");
}
else{
    console.log("Auto pass");
}

if(maliya >= 50 && maliya <= 60){
    console.log("Maliya got D");
}
else{
    console.log("Auto pass");
}

if(liliya >= 50 || liliya <= 50){
    console.log("Liliya got F😑😥");
}
else{
    console.log("Auto pass");
}

if(jaliya >= 70 && jaliya <= 80){
    console.log("Jaliya got B");
}
else{
    console.log("All is auto pass");
}

// Problem Sloving #3

// Ques: given n, check whether n is prime or Composition
// n=21 composite
// n=17 prime
// n=1 1 is neither prime nor composite
// n=25 composite
// n=2 prime
var n = 1;
var count = 0;
for (var i=2; i<n; i++){
    if(n%i==0){
        count++;
    }
}
if(count==0){
    if(n==1){
        console.log('1 is neither prime or composite');
    }
    else{
        console.log('prime');
    }
}
else{
    console.log('Composite');
}

// Problem Sloving #4

// Q: Array element kha loop maddome dakano
var numbers = [45, 86, 34, 87, 12, 98, 82];
for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    console.log(element);
}
// Another 18.5Module
var practiceArray = ["রাত ৮ টা বাজে মডিউল আনলক করো", "ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো", "ভিডিও দেখতে দেখতে নোটস নাও", "মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো", "রাত ৮ টা বাজে মডিউল আনলক করো", "রাত ৮ টা বাজে মডিউল আনলক করো", "রাত ৮ টা বাজে মডিউল আনলক করো", "রাত ৮ টা বাজে মডিউল আনলক করো", "রাত ৮ টা বাজে মডিউল আনলক করো", "রাত ৮ টা বাজে মডিউল আনলক করো"];
for (var i = 0; i < 10; i++){
    var element = practiceArray[i];
    console.log(element);
}

// problem sloving #5
// Ques: একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।
function multiplicationTable13(number){
    for(var i = 1; i <= 10; i++){
        var result = i * number;
        // console.log(result);
        console.log(`${number} x ${i} = ${result}`); // eivaba print hoy system consolelog 1x2=2;

    }
}
multiplicationTable13(13);

// Problem sloving #6
// Ques: একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
function squareTable(number){
    var squareCount = number * number; // recursion
    // console.log(squareCount);
    console.log(`${number} x ${number} = ${squareCount}`);
    return squareCount;
}
var result = squareTable(20); //user joto number nibe ta square korbe
console.log(result);

// f(n-1) + n =f(n); ba (n(n+1))/2;
function sum(n){
    if(n === 0){
        return 0;
    }else{
        return sum(n-1) + n;
    }
}
console.log(sum(1000)); // recursion use korar jnno output onk value nile kintu browzer ta error dakabe krn tara value ta count korte pare nah

// Problem sloving #7

// Ques: তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

function yearsOddOrEven(number){
    if(number % 2 == 0){
        var evenNumber = true;
        return evenNumber; // jor number
    }
    else{
        var oddNumber = false;
        return oddNumber; // bajor number
    }
}
var age = yearsOddOrEven(23);
console.log('My Age is :', age);

// Problem sloving #8

// Ques:  leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

function isLeapYear(year){
    if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 == 0)){
        return true;
    }
    else{
        return false;
    }
}
const myYear = 2023;
const myYearLeap = isLeapYear(myYear);
console.log('This year is leap year or not:', myYearLeap);

// Problem sloving #9
// Ques: এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।
function hourToMin(hours){
    let mins = hours * 60;
    return mins;
}
var convertResult = hourToMin(48);
console.log('Hour to Minute is convert: ', convertResult);

// Ques: একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে
for(let i = 1; i <= 100; i++){
    console.log('Serial Number is :', i);
}
// Ques: ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।
for(let i = 51; i <= 80; i += 2){
    console.log('Odd Number show: ', i);
};
// Ques: তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 
let firstValue = 45;
let secondValue = 87;
let thirdValue = 96;
function threeNumberAddition(num1,num2,num3){
   let threeAdditionResult = num1 + num2 + num3;
   return threeAdditionResult; 
}
let additionValue = threeNumberAddition(firstValue,secondValue,thirdValue);
console.log('Three Number Addition is: ', additionValue);

// Problem sloving #10
// Ques: তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে
function celciusToFarenheit(celcius){
    let farenheit = (celcius * 1.8) + 32; // Formula
    return farenheit;
}
let farenheitValue = celciusToFarenheit(2);
console.log('Farenheit value is: ', farenheitValue);

// Ques: তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 
function farenheitToCelcius(ferenheit) {
    let celcius = (ferenheit - 32) * 0.555555556; // Formula
    return celcius;
}
let celciusValue = farenheitToCelcius(64);
console.log('Celcius value is: ', celciusValue.toFixed(4));

// Problem Sloving #11

// Ques: কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।

function markSheets(number){
    if((number >= 80) && (number < 100)){
        let thisGradeAplus = 'You got a A+';
        return thisGradeAplus;
    }
    else if((number >= 70) && (number < 80)){
        let thisGradeA = 'You got a A';
        return thisGradeA;
    }
    else if((number >= 60) && (number < 70)){
        let thisGradeAmanus = 'You got a A-';
        return thisGradeAmanus;
    }
    else if((number >= 50) && (number < 60)){
        let thisGradeB = 'You got a B';
        return thisGradeB;
    }
    else if((number >= 40) && (number < 50)){
        let thisGradeC = 'You got a C';
        return thisGradeC;
    }
    else if ((number >= 33) && (number < 40)){
        let thisGradeD = 'You got a D';
        return thisGradeD;
    }
    else if(number < 33){
        let thisGradeF = 'You got a F';
        return thisGradeF;
    }
    else{
        let thisGradeNotFound = 'You result is not found';
        return thisGradeNotFound;
    }

}
let markValue = markSheets(46);
console.log('The result value is: ', markValue);

// Problem Sloving #12
