//syntax:
function function_name() {
    //code
}
function_name



function CancelPayment() {
    confirm('Do yoy really want to cancel the payment?')
}
CancelPayment();

//functions using parameters

// function function_with_parameters(parameters1, parameters2, parameters3) {
//     //code
// }
// function_with_parameters(1, 2, 3);


function printname(name) {
    console.log(`My name is ${name}`);
}
printname('Prasad Hirwe');

let sum;
function sumOfTwoNumbers(num1, num2) {
    sum = num1 + num2;
    console.log(sum);
}
sumOfTwoNumbers(4, 5)



//parseInt(string)
let num1 = parseInt(prompt('num1'));
let num2 = parseInt(prompt('num2'));
let num3 = parseInt(prompt('num3'));

function sumOfThreeNumbers(num1, num2, num3) {
    let sum = 0;
    sum = num1 + num2 + num3;
    console.log(sum)
}
sumOfThreeNumbers(num1, num2, num3)