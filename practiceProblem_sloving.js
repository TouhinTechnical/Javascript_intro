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