// function sumFibs(num) {
//     let newArr = [];
//     let a = 0, b = 1;
//     for (let i = 0; i < num; i++) {
//         let temp = a + b;
//         a = b;
//         b = temp;
//         if (a <= num) {
//             newArr.push(a);
//         } else {
//             break;
//         }
//     }

//     return newArr.filter(j => j % 2 !== 0).reduce((prev, val) => prev + val)
// }


// function sumFibs(num) {
//     let prevNum = 0;
//     let currNum = 1;
//     let result = 0;
//     while (currNum <= num) {
//         if(currNum % 2 !== 0) {
//             result += currNum;
//         }
//         currNum += prevNum;
//         prevNum = currNum - prevNum;
//     }

//     return result;
// }


function sumFibs(num) {
    if(num <= 0) return 0;

    const arrFib = [1,1];
    let nextFib = 0;

    while((nextFib = arrFib[0] + arrFib[1]) <= num) {
        arrFib.unshift(nextFib);
    }

    return arrFib.filter(i => i % 2 != 0).reduce((a,b) => a + b);
}

console.log(sumFibs(10));
  //return 1785