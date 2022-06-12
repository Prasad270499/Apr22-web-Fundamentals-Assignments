function NLargest(arr, n, N){
    arr.sort((a, b) => b - a);
    for (let i = 0; i < N; i++)
        console.log(arr[i] + " ");
}
    let arr = [ 1, 23, 12, 9, 30, 2, 50 ];
    let n = arr.length;
    let N = 1;
    NLargest(arr, n, N);