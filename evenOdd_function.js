// is even number
function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}
const myNumber = 145;
const isMyNumberEven = isEven(myNumber);
console.log('is my Number even: ', isMyNumberEven);

// is odd number
function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
}
const myNumberOdd = 2345;
const isMyNumberOdd = isOdd(myNumberOdd);
console.log('is my Number odd: ', isMyNumberOdd);