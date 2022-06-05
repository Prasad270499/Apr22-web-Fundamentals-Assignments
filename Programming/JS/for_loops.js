//printing first 100 numbers stsrting from 1
//initiaExp: let i = 1;
//condition: i <= 100
//updateExp: increment: i++


for (let i=2; i <= 100; i++){
    console.log(i)
}

//print all even numbers between 1-10

// for (let j = 1; j <= 10; j++) {
//     if (j % 2 === 0) {
//         console.log(j);
//     }
// }

for (let j = 2; j <= 10; j += 2) {
        console.log(j);
}

// iteration 1: j=2;
//                j <= 10 : true
//                print 2;

// iteration 2: j=4;
//                condition true;
//                print 4;
//                j +=2 j=4+2
               
// iteration 3: j=6;
//                condition true;
//                print 6;
//                j +=2 j=6+2   
               
// iteration 4: j=8;
//                condition true;
//                print 8;
//                j +=2 j=8+2

// iteration 5: j=10;
//                condition true;
//                print 10;
//                j +=2 j=10+2               


//even: remainder will be 0, on dividing the number by 2
// odd: remainder will be 0
// let num = 10;
// if (num % 2 === 0){
//     console.log('even number: ');
// }else {
//     console.log('odd number');
// }




//while loop
let i = 1; //initializationExp
while (i <= 10 ) {
    //condition
    console.log(i); //loop body
    i++; //updateExp(inc/dec)
}

let j = 2;
while (j <= 10 ) {
    console.log(j);
    j += 2;
}


//do while loop
let k = 1;
do{
console.log(k);
k++;
}while(k <= 10)
