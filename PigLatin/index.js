// function translatePigLatin(str) {
//   let regex = /^[^aiueo]+/gi;

//   let consonantWord = str.match(regex);
//   let newWord = str.replace(regex, "");
//   if (consonantWord !== null) {
//     // if there is a cluster first word of consonant then remove that word to the last word and add "ay"
//     newWord += consonantWord.toString() + "ay";
//   } else {
//     // add word "way" when first word is vowel
//     newWord += "way";
//   }

//   return newWord;
// }


// function translatePigLatin(str) {
//   let regex = /^[^aiueo]+/gi;

//   let consonantWord = str.match(regex);
//   let newWord = str.replace(regex, "");

//   return consonantWord !== null
//     ? str
//       .replace(regex, "")
//       .concat(newWord)
//       .concat("ay")
//     : str.concat("way");
// }

// function translatePigLatin(str) {
//   let pigLatin = "";
//   let regex = /[aiueo]/gi;

//   if (str[0].match(regex)) {
//     pigLatin = str + "way";
//   } else if (str.match(regex) === null) {
//     pigLatin = str + "ay";
//   } else {
//     let vowel = str.indexOf(str.match(regex)[0])

//     pigLatin = str.substr(vowel) + str.substr(0, vowel) + "ay";
//   }

//   return pigLatin;
// }

// function translatePigLatin(str) {
//   if (str.match(/^[aiueo]/)) return str.concat("way");

//   let consonantWords = str.match(/^[^aiueo]+/)[0];
//   return str.substring(consonantWords.length) + consonantWords + "ay";

// }

function translatePigLatin(str) {
  return str
            .replace(/^[aiueo]\w*/, "$&way")
            .replace(/(^[^aiueo]+)(\w*)/, "$2$1ay");
}

translatePigLatin("consonant");
  // return onsonantcay
