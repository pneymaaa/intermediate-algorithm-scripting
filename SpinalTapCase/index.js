// function spinalCase(str) {
//   return str.split(/(?=[A-Z])|\s|\-|\_/).join("-").toLowerCase();
// }

// Using replace()
function spinalCase(str) {
  // create a variable for the white space and underscores
  let regex = /\s+|_+/g;

  // replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}


spinalCase('theAndy_Griffith_Show');