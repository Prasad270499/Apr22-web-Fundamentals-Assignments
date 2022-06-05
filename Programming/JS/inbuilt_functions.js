// alert
//syntax: alert (message);


//has only one option i.e; 'ok' option
// alert('hello');

//prompt
//syntax: prompt(title, defaultvalue)

// let age = prompt('what is your age?');
// console.log(age);
// if (age > 18) {
//     console.log('eligible for voting');
// } else {
//     console.log('cant vote');
// }

//confirm


let value = confirm('is your age more than 18?');
console.log(value);
if (value) {
    alert('eligible for voting');
} else {
    alert('cant vote');
}