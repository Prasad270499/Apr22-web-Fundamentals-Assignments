// let n = parseInt(prompt('enter a number'))

let n = parseInt(prompt('enter a number till you want check'))

for (let i = 1; i <= n; i++){
    if (checkprime(i)) {
        console.log(i);
    }
}

function checkprime(num) {
    if (num <= 1){
        return false;
    }
    for (let i = 2; i < num; i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// if (checkprime(n)) {
//     console.log('true')
// } else {
//     console.log('false')
// }
// condition ? (print if condition is true) : (print if condition is false)




// checkprime(n) ? console.log('true') : console.log('false');