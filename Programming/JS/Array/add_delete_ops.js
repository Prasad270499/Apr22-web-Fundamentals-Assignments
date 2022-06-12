let fruitBasket = ['Apple', 'Banana', 'Orange', 'grapes'];
console.log(fruitBasket.pop());
console.log(fruitBasket);



let todo = ['Prasad', 'Hirwe', 27, 04, 1999, 'Ahmednagar', 'Maharashtra'];
// todo.pop()
console.log("pop",todo.pop());
console.log('at', todo.at(-1));


fruitBasket.push("pear", 'Watermelon');
console.log(fruitBasket);

fruitBasket[fruitBasket.length] = "Guava";
console.log(fruitBasket);



fruitBasket.unshift('Mango', 'Straberry');
console.log(fruitBasket);




let arr = [2, 3, 4, 5]
let sum = 0;
function addSum(arr) {
    for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    }
    arr.push(sum);
    console.log(arr);
}
addSum(arr);