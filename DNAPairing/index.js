// function pairElement(str) {
//     let newArr = [];
//     str.split("").map(item => {
//         let arr = []
//         if (item === "C") {
//             arr.push(item, "G")
//         } else if (item === "G") {
//             arr.push(item, "C")
//         } else if (item === "A") {
//             arr.push(item, "T")
//         } else if (item === "T") {
//             arr.push(item, "A")
//         }
//         newArr.push(arr);
//     })
//     return newArr;
// }

// function pairElement(str) {
//     let paired = [];

//     let search = function (char) {
//         switch (char) {
//             case "A":
//                 paired.push(["A", "T"]);
//                 break;
//             case "T":
//                 paired.push(["T", "A"]);
//                 break;
//             case "C":
//                 paired.push(["C", "G"]);
//                 break;
//             case "G":
//                 paired.push(["G", "C"]);
//                 break;
//         }
//     }

//     for (let i = 0; i < str.length; i++) {
//         search(str[i]);
//     }

//     return paired;
// }

function pairElement(str) {
    let pairing = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };

    return str.split("").map(i => [i, pairing[i]]);
}

pairElement("GCG");
  //[["G", "C"], ["C","G"], ["G", "C"]]