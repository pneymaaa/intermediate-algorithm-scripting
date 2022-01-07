// function convertHTML(str) {
//     let symbolArr = str.match(/&|<|>|"|'/g);
//     if (symbolArr !== null) {
//         for (let symbol of symbolArr) {
//             switch (symbol) {
//                 case '&':
//                     str = /&/g[Symbol.replace](str, '&amp;');
//                     break;
//                 case '<':
//                     str = /</g[Symbol.replace](str, '&lt;');
//                     break;
//                 case '>':
//                     str = />/g[Symbol.replace](str, '&gt;');
//                     break;
//                 case '"':
//                     str = /"/g[Symbol.replace](str, '&quot;');
//                     break;
//                 default:
//                     str = /'/g[Symbol.replace](str, '&apos;');
//                     break;
//             }
//         }
//     }

//     return str;
// }

// function convertHTML(str) {
//     let temp = str.split("");
//     for (let i = 0; i < temp.length; i++) {
//         switch (temp[i]) {
//             case '&':
//                 temp[i] = '&amp;';
//                 break;
//             case '<':
//                 temp[i] = '&lt;';
//                 break;
//             case '>':
//                 temp[i] = '&gt;';
//                 break;
//             case '"':
//                 temp[i] = '&quot;';
//                 break;
//             case "'":
//                 temp[i] = '&apos;';
//                 break;
//         }
//     }

//     temp = temp.join("");
//     return temp;
// }

function convertHTML(str) {
    const htmlEntities = {
        "&": '&amp;',
        "<": '&lt;',
        ">": '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    }

    return str.replace(/[&<>"']/g, match => htmlEntities[match])
}

function convertHTML(str) {
    const htmlEntities = {
        "&": '&amp;',
        "<": '&lt;',
        ">": '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    }

    return str.split("").map(i => htmlEntities[i] || i).join("");
}


convertHTML('Dolce & Gabbana');