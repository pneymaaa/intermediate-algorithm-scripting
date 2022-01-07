// function uniteUnique(arr) {
//     let newArr = [...arr];

//     let uniteUniqueArr = [];

//     for(let i = 0; i < newArr.length; i++) {
//         for( let j = 0; j < newArr[i].length; j++) {
//             if(!uniteUniqueArr.includes(newArr[i][j]))
//             uniteUniqueArr.push(newArr[i][j])
//         }
//     }

//     return uniteUniqueArr;
// }


// using concat() + reduce() + array()
// function uniteUnique(arr) {
//     let newArr;

//     let args = Array.prototype.slice.call(arguments);

//     newArr = args.reduce((prevArr, currArr) => {
//         return prevArr.concat(currArr.filter(i => prevArr.indexOf(i) === -1))
//     })

//     return newArr;
// }



function uniteUnique(...arr) {
    // create a Set which clears any duplicates since it's a regular set and not a multiset
    return [...new Set([].concat(...arr))];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//return [1, 3, 2, 5, 4]
// let newArr = [...arr] == [].concat(...arr) == arr.flat();