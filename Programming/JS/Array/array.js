let todo = ['Prasad', 'Hirwe', 27, 04, 1999, 'Ahmednagar', 'Maharashtra'];
// for (let i = 0; i <= todo.length-1; i++)
for (let i = (todo.length-1); i >=0; i--){
console.log(todo[i]);
}



let even = [1, 2, 3, 4, 5, 10, 12, 15, 17];
function checkEvens(even) {
    for (let j = 0; j < even.length; j++){
        if(even[j] % 2 ===0) {
            console.log('even->',even[j]);
        }
    }
}
checkEvens(even)


let evenIndex = [1, 2, 3, 4, 5, 10, 12, 15, 17];
function checkEvens(evenIndex) {
    for (let k = 0; k < even.length; k++){
        if([k] % 2 ===0) {
            console.log('evenIndex->',evenIndex[k]);
        }
    }
}