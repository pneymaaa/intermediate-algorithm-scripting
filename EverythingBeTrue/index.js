function truthCheck(collection, pre) {
    return collection.every(i => {
        return Boolean(i[pre]);
    });
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, 
{ "user": "Dipsy", "sex": "male" }, 
{ "user": "Laa-Laa", "sex": "female" }, 
{ "user": "Po", "sex": "female" }], "sex");
  //return true;

// If the first parameter is 0, -0, null, false, NaN, undefined, '' (empty string), or no parameter passed 
// then the Boolean() function returns false.