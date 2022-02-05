// find the lowest element of an array
function largestElement(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const ages = [23,25,67,87,89,34,27,76];
const oldest = largestElement(ages);
console.log('oldest is show:', oldest);

const oldest2 = largestElement([-2,-5,-8,-12]);
console.log('oldest2 is show:', oldest2);