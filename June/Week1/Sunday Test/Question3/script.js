const number = parseInt(prompt('Enter a Number:-'));
function checkSumOfOddNaturalNumbers(num) {
let sum = 0
    for (let i=1; i <= (num-1); i++){
        if (i % 2 === 1){
            sum = sum + i
        }
}  console.log(sum)
}
checkSumOfOddNaturalNumbers(number)