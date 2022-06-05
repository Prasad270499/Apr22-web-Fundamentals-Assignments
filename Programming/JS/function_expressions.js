'use Strict'; //use to make for older version compatiable
//function declaration
function sayHi() {
    console.log('Hello');
}
// sayHi()

let func = sayHi;
console.log(func);
func();


let sayHello = function () {
    console.log('say Hello function');
}


let func2 = sayHello;
func2()
sayHello()

//like that
// let a = 10;
// let b = a;
// console.log(a, b);
let result = sum(3, 4);
console.log(result);

function sum(a, b) {
    return a + b;
}
console.log(result);


// Function Expressions are created when the execuation reaches them.
let sum2 = function (a, b) {
    return a + b;
}
let result2 = sum2(2, 3)
console.log(result2);



//console.log(a);
let a = 10;
console.log(a);


//when FD is within a block, it's visible everywhere inside that block. But not outside the block
let age = 20;
// if (age > 18) {
//     isEligible()
//     function isEligible() {
//         console.log('yes');
//     }
//     isEligible()
// } else {
//     isEligible()
//     function isEligible() {
//         console.log('no');
//     }
// }
// isEligible()


let isEligible;
if (age > 18) {
    isEligible = function () {
        console.log('yes');
    }
} else {
    isEligible = function () {
        console.log('no');
    }
}
isEligible()


let op = '+';


let add;
let minus;
if (op === '-') {
    
    add = function (a, b) {
        console.log(a+b);
    }
} else {
   
    minus = function (a, b) {
        console.log(a - b);
    }
}
// add(4, 3);
minus(4, 3)