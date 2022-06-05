//print a function which return 10 natural numbers
function printFirst10NaturalNumbers() {
    for (let i=1; i<=10; i++){
     console.log(i);
    }
}
printFirst10NaturalNumbers();


//print a function which return N natural numbers
// let n = parseInt(prompt('Enter a number:'));
// function printNaturalNumbers(number) {
//     for (let i=1; i<=number; i++){
//         console.log(i);
//     }
// }
// printNaturalNumbers(n);



//print a function which return sum of 10 natural numbers
function sumOfFirst10Num() {
    let sum = 0;
    for (let i=1; i<=10; i++) {
        sum = sum + i;
        console.log(`sum=${sum}+${i}`);
    }
    console.log(sum);
}
sumOfFirst10Num()


//print a function which return sum of 10 natural numbers
let n = parseInt(prompt('Enter a number:'));
printNaturalNumbers(n)
function printNaturalNumbers(number) {
    sum = number * (number + 1) / 2;
    console.log(sum);
}



