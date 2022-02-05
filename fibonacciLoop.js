// // dara math
// const fibo = [0,1];
// for (let i = 2; i <= 10; i++){
//     // n = (n-1) + (n-2)
//     // i = (i-1) + (i-2)
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);
// //function
// function fibonacciSeries(num){
//     const fibo = [0, 1];
//     for (let i = 2; i <= num; i++){
//         // n = (n-1) + (n-2)
//         // i = (i-1) + (i-2)
//         fibo[i] = fibo[i-1] + fibo[i-2];
//     }
//     return fibo;
// }
// const fiboSeries = fibonacciSeries(13);
// console.log(fiboSeries);
// input type
function fibonacciSeries(num){
    if (typeof num != 'number'){
        return 'Please give a number';
    }
    else if (num < 2){
        return 'Please enter a positive number greater than 1';
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fiboSeries = fibonacciSeries(13);
console.log(fiboSeries);
