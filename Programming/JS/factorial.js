//print a function which return factorial
let n = parseInt(prompt('enter a number'));
factorial(n);
function factorial(number) {
    let res = 1;
    if (number <= 1) {
    console.log('1');
} else {
    for (let i = 2; i <= n; i++){
        res = res * i;
    }
}
console.log(res)
}