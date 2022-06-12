let num = parseInt(prompt('Enter the number:'));
function printProdOfDigitsOfNumber(num) {
    let prod = 1;
    while (num > 0) {
        prod = prod * (num % 10);
        num = parseInt(num / 10);
    }
    console.log(prod)
}
printProdOfDigitsOfNumber(num)







function printSumOfEvenAndProdOfOddDigits(num) {
    let result, sum = 0, prod =1;
    while (num > 0) {
        result = num % 10;
        if (result % 2 === 0) {
            sum = sum + result;
        } else{
            prod = prod * result;
        }
        num = parseInt(num / 10);
    }
    return {sum, prod};
}
let ans = printSumOfEvenAndProdOfOddDigits(num)
console.log(ans);