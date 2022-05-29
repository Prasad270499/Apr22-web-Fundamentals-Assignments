let age = 19;
if (age < 18){
console.log('notr eligible for voting')
} else if (age === 18){
console.log('you are now 18 eligible for voting')
} {
console.log('eligible for voting')
}


let num1 = 10;
let num2 = 20;
if (num1 > num2){
    console.log(num1 + ' num1 greater')
} else if (num1 === num2){
    console.log('both are equal')
} else {
    console.log(num2 + ' num2 is greater')
}



let num = 0;
if (num > 0){
    console.log('is positive')
} else if (num === 0){
    console.log('is zero')
} else {
    console.log('is negative')
}


//nested if/else
let n = 10;
//or its not zero
if (n != 0){
    // n is positive
    if (n > 0){
        console.log('positive')
    }
    //n is negative
    else {
        console.log('negative')
    }
}
//either the n is 0
else {
    console.log('zero')
}


// if/else using ternary operater
let n2 = 6;
n2 > 5 ? console.log('greater than 5') : console.log('less than 5');



