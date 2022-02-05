// 3ta number take konta boru oita bahir korar system
const business = 450;
const minister = 350;
const army = 600;

// compare 3
if(business > minister && business > army){
    console.log('Business is bigger');
}else if(minister > business && minister > army){
    console.log('minister is bigger');
}else{
    console.log('army is bigger');
} 
// second way
var max = Math.max(business, minister, army);
console.log('largest value is', max);
// function method
// Ques: write a function to find the smallest of three Numbers
function findSmallestNumber(firstNumber,secondNumber,thirdNumber){
    if(firstNumber < secondNumber && firstNumber < thirdNumber){
        var firstNumberValue = 'First Number is smallest';
        return firstNumberValue;
    }
    else if(secondNumber < firstNumber && secondNumber < thirdNumber){
        var secondNumberValue = 'Second Number is smallest';
        return secondNumberValue;
    }
    else{
        var thirdNumberValue = 'Third Number is smallest';
        return thirdNumberValue;
    }
}
var smallestFunctionCall = findSmallestNumber(350,450,700);
console.log('Smaller value is show: ', smallestFunctionCall);