const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFirstName = function () {
        return firstAndLast.split(" ")[0];
    };
    this.getLastName = function () {
        return firstAndLast.split(" ")[1];
    };
    this.getFullName = function () {
        return firstAndLast;
    };
    this.setFirstName = function (first) {
        return firstAndLast = firstAndLast.replace(this.getFirstName(), first) ;
    };
    this.setLastName = function (last) {
        return firstAndLast = firstAndLast.replace(this.getLastName(), last) ;
    };
    this.setFullName = function (newFirstAndLast) {
        return firstAndLast = newFirstAndLast;
    }
    return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.setFirstName("Haskell")
console.log(bob.getFullName());