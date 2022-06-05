const number = parseInt(prompt('Enter the number'));
checkCube(number)
function checkCube (num) {
    for (let i=1; i <= num; i++){
    console.log(i * i * i)
}   
}