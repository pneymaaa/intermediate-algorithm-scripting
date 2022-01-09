// function dropElements(arr, func) {
//     let newArr = arr.map(func);
//     let index = 0;
//     for (let i = 0; i < newArr.length; i++) {
//         if(newArr[i]) {
//             index = i;
//             break;
//         }
//     }
//     if(newArr.every(i => i === false)) return []
//     else {
//         return arr.slice(index);
//     }
// }

// function dropElements(arr, func) {
//     while (arr.length > 0 && !func(arr[0])) {
//         arr.shift();
//     }

//     return arr;
// }

function dropElements(arr, func) {
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
  //return [1,0,1]