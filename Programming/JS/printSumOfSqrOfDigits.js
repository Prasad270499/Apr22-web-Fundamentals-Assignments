let n = parseInt(prompt('Enter the Number:'))
function printSumOfSqrOfDigits(num) {
    let sum = 0, res, sqr;
    while (num > 0) {
        res = num % 10;
        sqr =res * res;
        sum = sum + sqr;
        num= parseInt(num / 10);
    }
    console.log(sum);
}
printSumOfSqrOfDigits(n)