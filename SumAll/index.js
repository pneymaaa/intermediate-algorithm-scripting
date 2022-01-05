// function sumAll(arr) {
//     arr.sort((a, b) => a - b);
//     let newArr = [];
//     for (let i = arr[0]; i <= arr[1]; i++) {
//         newArr.push(i);
//     }
//     return newArr.reduce((preValue, Value) => preValue + Value)
// }

// // using math.max(), math.min() and for..lop
// function sumAll(arr) {
//     let max = Math.max(arr[0], arr[1]);
//     let min = Math.min(arr[0], arr[1]);

//     let sum = 0;
//     for (let i = min; i <= max; i++) {
//         sum += i;
//     }

//     return sum;
// }

// using math.max(), math.min() and for..lop
function sumAll(arr) {
    const startNum = arr[0];
    const endNum = arr[1];

    const numCount = Math.abs(startNum - endNum) + 1

    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
}

function sumAll(arr) {
    let sum = 0;
    for (let i = Math.min(...arr); i < Math.max(...arr); i++) {
        sum += i;
    }
    return sum;
}

// Recursive approach
function sumAll(arr) {
    const [first, last] = [...arr].sort((a,b) => a-b);
    return first !== last ? first + sum([first + 1, last]) : first;
}

sumAll([1, 4]);