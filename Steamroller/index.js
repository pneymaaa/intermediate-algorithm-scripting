function steamrollArray(arr) {
    return arr.reduce((prev, val) => prev.concat(Array.isArray(val) ? steamrollArray(val) : val), [])
}

function steamrollArray(arr) {
    const flattenedArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenedArray.push(...steamrollArray(arr[i]));
        } else {
            flattenedArray.push(arr[i]);
        }
    }
    return flattenedArray;
}

function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

function steamrollArray(arr) {
    return arr
        .toString()
        .replace(",,", ",")
        .split(",")
        .map(i => {
            if (i == "[object Object") {
                return {}
            } else if (isNaN(v)) {
                return v
            } else {
                return parseInt(v);
            }
        })
}

steamrollArray([1, [2], [3, [[4]]]]);
