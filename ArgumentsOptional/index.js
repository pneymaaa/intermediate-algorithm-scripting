function addTogether(x) {
    if (typeof x !== "number") return undefined;
    let newArr = Object.values(arguments);
    if (newArr.length == 2) {
        if (newArr.every(i => typeof i === "number")) return newArr[0] + newArr[1]
        else return undefined;
    } else {
        return function (y) {
            return typeof y !== 'number' ? undefined : x + y;
        }
    }
}

function addTogether() {
    const [first, second] = arguments;
    if (typeof (first) !== "number")
        return undefined;
    if (second === undefined)
        return (second) => addTogether(first, second);
    if (typeof (second) !== "number")
        return undefined;
    return first + second;
}

function addTogether() {
    const [first, second] = arguments;
    if (typeof (first) !== "number") {
        return undefined;
    } else if (second === undefined) {
        function addSecond(second) {
            if (typeof (second) !== "number") {
                return undefined;
            }
            else {
                return first + second;
            }
        }
    }
}

//console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))
console.log(addTogether(2, "3"));