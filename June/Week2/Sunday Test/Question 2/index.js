//  methodes for looping an array
//  1. for loop simple method: 
//  example
let array = [1,2,3,4,5,6];
for(let i=0;i<array.length;i++){ 
    console.log('methode1',array[i]); 
}
console.log('------------');
// 2. for loop of method: in this methode we use for loop but this time simply saying <variable name> of <array name>
//  example
for(let elements of array){
    console.log('methode2',elements);
}
console.log('------------');
// 3.While loops: in this methode we use index and increase it ato loop uur array
// Example
let index=0;
while(index<array.length){ 
    console.log('methode3',array[index]); index++; 
} 
console.log('------------');