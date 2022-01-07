// function myReplace(str, before, after) {
//     let newWord = [];
//     str.split(" ").map(word => {
//         if (word === before) {
//             if (/^[A-Z]/.test(word[0])) {
//                 word = after[0].toUpperCase().concat(after.slice(1, after.length))
//                 newWord.push(word);
//             } else {
//                 word = after.toLowerCase();
//                 newWord.push(word);
//             }
//         } else {
//             newWord.push(word);
//         }
//     });

//     return newWord.join(" ");
// }


// function myReplace(str, before, after) {
//     let index = str.indexOf(before);
//     if (str[index] === str[index].toUpperCase()) {
//         after = after.charAt(0).toUpperCase() + after.slice(1);
//     } else {
//         after = after.charAt(0).toLowerCase() + after.slice(1);
//     }

//     str = str.replace(before, after);

//     return str;
// }

// function myReplace(str, before, after) {
//     if (/^[A-Z]/.test(before)) {
//         after = after[0].toUpperCase() + after.substring(1);
//     } else {
//         after = after[0].toLowerCase() + after.substring(1);
//     }

//     return str.replace(before, after);
// }

// Using prototype
String.prototype.capitalize = String.prototype.capitalize ||
    function () {
        return this[0].toUpperCase() + this.slice(1);
    }

const Util = (function () {
    function textCase(str, tCase) {
        if (tCase) {
            return setCase(str, tCase)
        } else {
            return getCase(str)
        }

        function setCase(str, tCase) {
            switch(tCase) {
                case "uppercase":
                    return str.toUpperCase();
                case "lowercase":
                    return str.toLowerCase();
                case "capitalized":
                    return str.capitalize();
                default:
                    return str;
            }
        }

        function getCase(str) {
            if (str === str.toUpperCase()) {
                return "uppercase";
            }
            if (str === str.toLowerCase()) {
                return "lowercase";
            }
            if (str === str.capitalize()) {
                return "capitalized";
            }
            return "normal";
        }
    }

    return {
        textCase
    }
})();

function myReplace(str, before, after) {
    const { textCase } = Util;
    const regex = new RegExp(before, "gi");
    const replacingStr = textCase(after, textCase(before));

    return str.replace(regex, replacingStr);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
//console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
  //return He is Sitting on the couch