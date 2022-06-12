let n = parseInt(prompt('Enter the Number'))
function printSumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        console.log('sum initial',sum);
        sum = sum + (num % 10);
        console.log('sum',sum);
        num = parseInt(num / 10);
        console.log('num',num);
    }
    return sum;
}
let result = printSumOfDigits(n)
console.log(result);