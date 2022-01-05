// using spread operator
// function destroyer(arr, ...args) {
//     return arr.filter(item => !args.includes(item));
// }

// using object.values(arguments)
function destroyer(arr) {
    let valRemove = Object.values(arguments).slice(1);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < valRemove.length; j++) {
            if (arr[i] === valRemove[j]) {
                delete arr[i];
            }
        }
    }

    return arr.filter(item => item !== null);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  // return [1,1]