//switch case
let pet= 'cat';
switch (pet) {
    case 'lizard':
        console.log('I own a lizard');
        break;
    case 'dog':
        console.log('I own a dog');
        break;
    case 'cat':
        console.log('I own a cat');
        break;
default:
    console.log('I dont own a pet');
    break;        
}



let operator = '*';
let num20 = 20;
let num30 = 30;
let result;
switch (operator) {
    case '+' :
        result = num20 + num30;
        break;
    case '-' :
        result = num20 - num30;
        break;
    case '*' :
        result = num20 * num30;
        break;
    case '/' :
        result = num20 / num30;
        break;
default:
    console.log('Invalid Operator');
    break;        
}
console.log(result);