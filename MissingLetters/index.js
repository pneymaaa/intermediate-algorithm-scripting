// function fearNotLetter(str) {
//     let alphabet = {
//         a: 1,
//         b: 2,
//         c: 3,
//         d: 4,
//         e: 5,
//         f: 6,
//         g: 7,
//         h: 8,
//         i: 9,
//         j: 10,
//         k: 11,
//         l: 12,
//         m: 13,
//         n: 14,
//         o: 15,
//         p: 16,
//         q: 17,
//         r: 18,
//         s: 19,
//         t: 20,
//         u: 21,
//         v: 22,
//         w: 23,
//         x: 24,
//         y: 25,
//         z: 26
//     }

//     let newArr = []
//     for (let i = 0; i < str.length; i++) {
//         newArr.push(alphabet[str[i]]);
//     }

//     let start = newArr[0];
//     for (let j = 1; j < newArr.length; j++) {
//         if(newArr[j] - start !== 1) {
//             return Object.keys(alphabet).find(key => alphabet[key] === start + 1);
//         }
//         start = newArr[j];
//     }

//     return undefined;
// }


// using character to ASCII (charCodeAt and fromCharCode)
function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);

        if (code !== str.charCodeAt(0) + i) {
            return String.fromCharCode(code - 1)
        }
    }

    return undefined;
}


function fearNotLetter(str) {
    let currCharCode = str.charCodeAt(0);
    let missing = undefined;

    str.split("").forEach(word => {
        if (word.charCodeAt(0) === currCharCode) {
            currCharCode++;
        } else {
            missing = String.fromCharCode(currCharCode);
        }
    })

    return missing;
}

fearNotLetter("stvwx");