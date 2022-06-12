let n = parseInt(prompt('Enter the Number:'))
function printSumOfCubeOfDigits(num) {
    let sum = 0, res;
    while (num > 0) {
        res = num % 10;
        sum = sum + (res * res * res);
        num = parseInt(num / 10);
    }
   return sum;
}
let res = printSumOfCubeOfDigits(n)
console.log(res);
function checkArmStrong(num) {
    if (printSumOfCubeOfDigits(num) === num) {
        console.log('Yes');
    } else {
        console.log('no');
    }
}
checkArmStrong(n)