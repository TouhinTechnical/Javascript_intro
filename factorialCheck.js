// for loop diye factorial
var factorial = 1;
for (var i = 1; i <= 8; i++){
    factorial = factorial * i;
}
console.log(factorial);

// Function 
function getFactorial(number){
    let fact = 1;
    for(let i = 1; i <= number; i++){
        fact = fact * i; // reursion
    }
    return fact;
}
let result = getFactorial(10);
console.log(result);
//while
function getFactorial(number){
    let valueFact = 1;
    let i = 1;
    while(i <= number){
        valueFact = valueFact * i;
        i++;
    }
    return valueFact;
}
let resultFact = getFactorial(6);
console.log(resultFact);