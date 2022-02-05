const numbers = [44, 45, 56, 23, 67, 89];
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    sum = sum + element;
}
console.log(sum);
function arraySum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const totalArraySum = arraySum([44,45,56,23,67,89]);
console.log(totalArraySum);