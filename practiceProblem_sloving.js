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